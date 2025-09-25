import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import MedicalAccordion from "./MedicalAccordion";

export default function PatientAccordion({ patient }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.header}
      >
        <View style={styles.profileIamgeContainer}>
          {patient.profileImage ? (
            <Image
              source={{ uri: patient.profileImage }}
              style={styles.avatar}
            />
          ) : (
            <Text style={styles.avatarText}>👤</Text>
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{patient.name}</Text>
          <Text
            style={styles.sub}
          >{`Age: ${patient.age}, ${patient.gender}`}</Text>
        </View>
        <View style={styles.dropdownArrow}>
          <Text>V</Text>
        </View>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.body}>
            <Text style={styles.basicDetails}>
            Basic Pateint Details
            </Text>
          <Text style={styles.label}>Full Name: {patient.name}</Text>
          <Text style={styles.label}>
            Age: {patient.age} (DOB: {patient.dob})
          </Text>
          <Text style={styles.label}>Contact: {patient.contact}</Text>
          {patient.email && (
            <Text style={styles.label}>Email: {patient.email}</Text>
          )}
          <Text style={styles.label}>Address: {patient.address}</Text>
          <Text style={styles.label}>
            Emergency: {patient.emergencyContact.name} (
            {patient.emergencyContact.phone})
          </Text>
          <Text style={styles.label}>Blood Group: {patient.bloodGroup}</Text>

          <MedicalAccordion patient={patient} />

          {/* Current Visit */}
          {patient.visits.length > 0 && (
            <View style={styles.visit}>
              <Text style={styles.sectionTitle}>Current Visit</Text>
              <Text>Date: {patient.visits[0].date}</Text>
              <Text>Cause: {patient.visits[0].cause}</Text>
              <Text>Notes: {patient.visits[0].doctorNotes}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "##dcdfe0",
    marginBottom: 12,
    borderRadius: 8,
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: " left",
    alignItems: "center",
  },
  profileIamgeContainer: {
    width: 50,
    height: 50,
    borderColor: "#28c1a5",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#28c1a521",
  },

  avatar: { width: 40, height: 40, borderRadius: 20 },
  avatarText: { fontSize: 32 },

  textContainer: {
    flexDirection: "col",
    marginLeft: 5,
  },
  dropdownArrow: {
    marginLeft: "auto",
  },

  name: { fontSize: 16, fontWeight: "bold" },
  sub: { fontSize: 14, color: "#555" },
  body: { marginTop: 10 },
  basicDetails:{
    fontSize:18,
    fontWeight: 600,
    color: '#28c1a5',
  },
  label: { fontSize: 14, marginBottom: 4 },
  visit: { marginTop: 10 },
  sectionTitle: { fontWeight: "bold", marginBottom: 4 },
});
