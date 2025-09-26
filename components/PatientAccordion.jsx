import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
} from "react-native";
import MedicalAccordion from "./MedicalAccordion";

// Enable LayoutAnimation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function PatientAccordion({ patient }) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    const finalValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  // Interpolate between 0 and contentHeight
  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleExpand} style={styles.patient}>
        <View style={styles.profileIamgeContainer}>
          {patient.profileImage ? (
            <Image source={{ uri: patient.profileImage }} style={styles.avatar} />
          ) : (
            <Text style={styles.avatarText}>👩‍💼</Text>
          )}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>{patient.name}</Text>
          <Text style={styles.sub}>{`Age: ${patient.age}, ${patient.gender}`}</Text>
        </View>

        <View style={styles.dropdownArrow}>
          <Text
            style={[
              styles.dropArrow,
              expanded ? styles.arrowOpen : styles.arrowClosed,
            ]}
          >
            く
          </Text>
        </View>
      </TouchableOpacity>

      {/* Animated container */}
      <Animated.View style={{ overflow: "hidden", height: heightInterpolation }}>
        {/* Hidden measuring container (captures content height) */}
        <View
          style={styles.hiddenContent}
          onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}
        >
          <Text style={styles.basicDetails}>Basic Patient Details</Text>
          <Text style={styles.label}>Full Name: {patient.name}</Text>
          <Text style={styles.label}>
            Age: {patient.age} (DOB: {patient.dob})
          </Text>
          <Text style={styles.label}>Contact: {patient.contact}</Text>
          {patient.email && <Text style={styles.label}>Email: {patient.email}</Text>}
          <Text style={styles.label}>Address: {patient.address}</Text>
          <Text style={styles.label}>
            Emergency: {patient.emergencyContact.name} ({patient.emergencyContact.phone})
          </Text>
          <Text style={styles.label}>Blood Group: {patient.bloodGroup}</Text>

          {/* Child Accordions */}
          <MedicalAccordion patient={patient} />
          <MedicalAccordion patient={patient} />

          {/* Example for visits */}
          {/* {patient.visits.length > 0 && (
            <View style={styles.visit}>
              <Text style={styles.sectionTitle}>Current Visit</Text>
              <Text>Date: {patient.visits[0].date}</Text>
              <Text>Cause: {patient.visits[0].cause}</Text>
              <Text>Notes: {patient.visits[0].doctorNotes}</Text>
            </View>
          )} */}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "#f1f2f4",
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2,
    padding: 12,
  },
  patient: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIamgeContainer: {
    width: 60,
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#28c1a50D",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#28c1a5CC",
    overflow: "hidden",
  },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  avatarText: { fontSize: 40, marginBottom: -5 },
  textContainer: {
    marginLeft: 7,
  },
  dropdownArrow: {
    marginLeft: "auto",
  },
  dropArrow: {
    fontSize: 16,
    fontWeight: "600",
    color: "#28c1a5",
  },
  arrowClosed: {
    transform: [{ rotate: "180deg" }],
  },
  arrowOpen: {
    transform: [{ rotate: "270deg" }],
  },
  hiddenContent: {
    paddingTop: 10,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  sub: { fontSize: 14, color: "#555" },
  basicDetails: {
    fontSize: 18,
    fontWeight: "600",
    color: "#28c1a5",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "400",
  },
  visit: { marginTop: 10 },
  sectionTitle: { fontWeight: "bold", marginBottom: 4 },
});
