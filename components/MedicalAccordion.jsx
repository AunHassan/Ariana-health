import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MedicalAccordion({ patient }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={styles.title}>Medical Information {open ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.content}>
          <Text>Allergies: {patient.allergies}</Text>
          <Text>Conditions: {patient.conditions.join(", ")}</Text>
          <Text>Medications: {patient.medications.join(", ")}</Text>
          <Text>History: {patient.history}</Text>
          <Text>Family History: {patient.familyHistory}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 10 },
  title: { fontWeight: "bold", fontSize: 14, marginBottom: 6 },
  content: { paddingLeft: 8 },
});
