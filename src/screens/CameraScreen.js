import React, { useState, useEffect, useRef } from "react";
import { Image, StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from "expo-media-library";
import { Button } from "../components/Button";
import uuid from "react-native-uuid";
import { env } from "../env/env";
import { db, db_storage } from "../firebaseConfig";
import { LinearGradient } from "expo-linear-gradient";
import { cameraScreenStyles } from '../styles/screenStyles';

const CameraScreen = () => {

    const storageRef = ref(db_storage, uuid.v4());

    const cameraRef = useRef(null);

    const navigation = useNavigation();

    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTrainning, setIsTrainning] = useState(false);
    const [uri, setUri] = useState(null);
    const [visible, setVisible] = useState(true);
    const [visiblePicture, setVisiblePicture] = useState(true);

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted");
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (galleryStatus.status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        })();
    }, []);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                const selectedAsset = result.assets[0];
                setImage(selectedAsset.uri);
                setIsLoading(!isLoading);
                setUri(selectedAsset.uri);
            } else {
                setIsLoading(false);
            }
        } catch (e) { }
    };

    const uploadImage = (uri) => {
        setIsTrainning(true);
        setVisiblePicture(!visiblePicture);
        const hoy = new Date();
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onerror = reject;
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    resolve(xhr.response);
                }
            };
            xhr.open("GET", uri);
            xhr.responseType = "blob";
            xhr.send();
        })
            .then((resolve) => {
                uploadBytes(storageRef, resolve).then((snapshot) => {
                    const path =
                        env.firebase_env + snapshot.metadata.fullPath + "?alt=media";
                    let formData = new FormData();
                    formData.append("image", path);
                    let xhr = new XMLHttpRequest();
                    xhr.open("POST", env.ngrok);
                    xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            const resultado = JSON.parse(this.responseText);
                            addDoc(collection(db, "historical"), {
                                image_path: path,
                                type_one: resultado[0]['class'] + ': ' + resultado[0]['probability'] + '%',
                                type_two: resultado[1]['class'] + ': ' + resultado[1]['probability'] + '%',
                                type_three: resultado[2]['class'] + ': ' + resultado[2]['probability'] + '%',
                                createdAt: hoy.getTime(),
                            });
                            setIsTrainning(false);
                            navigation.navigate("Historical");
                        } else {
                            setIsLoading(!isLoading);
                        }
                    };
                    xhr.send(formData);
                });
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };

    return (
        <LinearGradient
            colors={['#5E7CE2', '#A0D2DB', '#87CEEB']}
            style={!image ? cameraScreenStyles.container_first : cameraScreenStyles.container}>
            {!image ? (
                <Image style={cameraScreenStyles.camera} source={require('../../assets/images/load_image.png')} />
            ) : (
                <Image style={cameraScreenStyles.camera} source={{ uri: image }} />
            )}
            <View style={cameraScreenStyles.buttonContainer}>
                {image ? (
                    <>
                        <Button
                            title={""}
                            icon="retweet"
                            color={"#5E7CE2"}
                            disabled={!visiblePicture}
                            size={40}
                            onPress={() => {
                                setImage(null);
                                setIsLoading(!isLoading);
                                setVisible(true);
                            }}
                        />
                        <Button
                            title={""}
                            icon="check"
                            color={"#5E7CE2"}
                            disabled={!visiblePicture}
                            size={40}
                            onPress={() => {
                                uploadImage(uri);
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Button
                            title={""}
                            icon="home"
                            color={"#5E7CE2"}
                            disabled={!visible}
                            size={40}
                            onPress={() => navigation.navigate("Home")}
                        />
                        <Button
                            title={""}
                            icon="folder-images"
                            color={"#5E7CE2"}
                            disabled={!visible}
                            size={40}
                            onPress={pickImage}
                        />
                    </>
                )}
            </View>
            {isTrainning && (
                <View
                    style={cameraScreenStyles.loading_indicator}
                >
                    <ActivityIndicator size="large" color="#7bc4db" />
                    <View style={cameraScreenStyles.container_message_style}>
                        <Text style={cameraScreenStyles.message_style}>Preparing Classification</Text>
                    </View>
                </View>
            )}
        </LinearGradient>
    );

};

export default CameraScreen;