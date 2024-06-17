import React, { useState, useEffect } from "react";
import { FlatList, View, Platform, SafeAreaView } from "react-native";
import { Appbar } from 'react-native-paper';
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import AlzheimerCard from "../components/AlzheimerCard";
import { LinearGradient } from "expo-linear-gradient";
import { alzheimerListScreenStyles } from "../styles/screenStyles";
import AlzheimerCardSkeleton from "../components/AlzheimerCardSkeleton";
import { useNavigation } from '@react-navigation/native';

const AlzheimerListScreen = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "types"));
        console.log('tenemos: ', querySnapshot)
        const fetchedTypes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Llega: ', fetchedTypes)
        setTypes(fetchedTypes);
      } catch (error) {} finally {
        setLoading(false);
      }
    };
    fetchTypes();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 15 }).map((_, index) => (
      <AlzheimerCardSkeleton key={index} />
    ));
  };

  return (
    <LinearGradient
      colors={["#5E7CE2", "#A0D2DB", "#87CEEB"]}
      style={{ ...alzheimerListScreenStyles.container }}
    >
      <Appbar.Header style={alzheimerListScreenStyles.appbar}>
        {Platform.OS === "android" && (
          <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
        )}
        <Appbar.Content
          title={"Alzheimer Types"}
          titleStyle={alzheimerListScreenStyles.title_header}
        />
      </Appbar.Header>
      <SafeAreaView style={{ ...alzheimerListScreenStyles.container }}>
        {loading ? (
          <View>{renderSkeletons()}</View>
        ) : (
          <FlatList
            data={types}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <AlzheimerCard alzheimer={item} />}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AlzheimerListScreen;