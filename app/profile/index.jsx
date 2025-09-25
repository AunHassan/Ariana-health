import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import patients from "./../../assets/data/profile.json";
import PatientAccordion from "./../../components/PatientAccordion.jsx";
import FloatingAddButton from "./../../components/FloatingAddButton.jsx";
import { useRouter } from "expo-router";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PatientAccordion patient={item} />}
        contentContainerStyle={styles.list}
      /> 
      <FloatingAddButton onPress={() => router.push("/profile/add")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  list: { padding: 16 },
});
