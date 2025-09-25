import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import MedicalAccordion from "./MedicalAccordion";

export default function PatientAccordion({ patient }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        style={styles.patient}
      >
        <View style={styles.profileIamgeContainer}>
          {patient.profileImage ? (
            <Image
              source={{ uri: patient.profileImage }}
              style={styles.avatar}
            />
          ) : (
            <Text style={styles.avatarText}>👩‍💼</Text>
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
    // backgroundColor: "pink",
    borderColor: "#f1f2f4",
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2, 
    borderCurve:1,
    padding: 12,
  },
  patient: {
    flexDirection: "row",
    justifyContent: " left",
    alignItems: "center",
    // backgroundColor: 'red'

  },
  profileIamgeContainer: {
    width: 60,
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#28c1a50D",
    borderWidth: 2,
    borderRadius: "50%",
    borderColor: "#28c1a5CC",
    overflow: "hidden",
  },

  avatar: { width: 60, height: 60, borderRadius: 20 },
  avatarText: { fontSize: 40, marginBottom: -5, },

  textContainer: {
    flexDirection: "col",
    marginLeft: 7,
  },
  dropdownArrow: {
    marginLeft: "auto",
    
  },

  name: { fontSize: 16, fontWeight: "bold" },
  sub: { fontSize: 14, color: "#555" },
  body: { marginTop: 10 },
  basicDetails: {
    fontSize: 18,
    fontWeight: 600,
    color: '#28c1a5',
  },
  label: { fontSize: 14, marginBottom: 4 },
  visit: { marginTop: 10 },
  sectionTitle: { fontWeight: "bold", marginBottom: 4 },
});
