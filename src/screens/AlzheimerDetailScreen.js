import React from "react";
import { Image, ScrollView, Platform, StyleSheet } from "react-native";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const AlzheimerDetailScreen = ({ route }) => {
  const disease = route.params;
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#5E7CE2", "#A0D2DB", "#87CEEB"]}
      style={styles.container}
    >
      <Appbar.Header style={styles.appbar}>
        {Platform.OS === "android" && (
          <Appbar.BackAction onPress={() => navigation.navigate("PlantList")} />
        )}
        <Appbar.Content title={disease.name} titleStyle={styles.title_header} />
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: disease.image_url }} style={styles.image} />
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Title style={styles.title}>Defintion of State</Title>
            <Paragraph style={styles.paragraph}>
              {disease.definition_of_state}
            </Paragraph>
            <Title style={styles.title}>Characteristic Symptoms</Title>
            <Paragraph style={styles.paragraph}>{disease.characteristic_symptoms}</Paragraph>
            <Title style={styles.title}>Possible Causes</Title>
            <Paragraph style={styles.paragraph}>{disease.possible_causes}</Paragraph>
            <Title style={styles.title}>Recommended Treatments</Title>
            <Paragraph style={styles.paragraph}>{disease.recommended_treatments}</Paragraph>
            <Title style={styles.title}>Tips for Caregivers</Title>
            <Paragraph style={styles.paragraph}>{disease.tips_for_caregivers}</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  scrollView: {
    padding: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
  },
  cardContent: {
    padding: 16,
  },
  title_header: {
    textAlign: "center",
    color: "white",
    fontSize: Platform.OS === "android" ? 20 : 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: "justify",
    color: "black",
    lineHeight: Platform.OS === "android" ? 25 : 30,
  },
});

export default AlzheimerDetailScreen;
