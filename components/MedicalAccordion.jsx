import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";

export default function MedicalAccordion({ patient }) {
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const animatedValue = useRef(new Animated.Value(0)).current; // drives height + arrow

  const toggleOpen = () => {
    const toValue = open ? 0 : 1;

    if (!open) setOpen(true); // render content before opening

    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false, // can't animate height with native driver
    }).start(() => {
      if (open) setOpen(false); // hide content after collapse
    });
  };

  // height animation (0 → 0px, 1 → contentHeight)
  const heightInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  // arrow rotation (0 → 180deg, 1 → 270deg)
  const rotateInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "270deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOpen}>
        <View style={styles.info}>
          <Text style={styles.title}>Medical Information</Text>
          <Animated.Text
            style={[
              styles.dropdown,
              { transform: [{ rotate: rotateInterpolation }] },
            ]}
          >
            く
          </Animated.Text>
        </View>
      </TouchableOpacity>

      {/* Animated wrapper */}
      <Animated.View style={[styles.animatedContainer, { height: heightInterpolation }]}>
        {/* Hidden measuring view */}
        <View
          style={styles.hiddenContent}
          onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}
        >
          <View style={styles.content}>
            <Text style={styles.label}>Allergies: {patient.allergies}</Text>
            <Text style={styles.label}>
              Conditions: {patient.conditions.join(", ")}
            </Text>
            <Text style={styles.label}>
              Medications: {patient.medications.join(", ")}
            </Text>
            <Text style={styles.label}>History: {patient.history}</Text>
            <Text style={styles.label}>
              Family History: {patient.familyHistory}
            </Text>
          </View>
        </View>

        {/* Visible animated content */}
        {open && (
          <View style={styles.content}>
            <Text style={styles.label}>Allergies: {patient.allergies}</Text>
            <Text style={styles.label}>
              Conditions: {patient.conditions.join(", ")}
            </Text>
            <Text style={styles.label}>
              Medications: {patient.medications.join(", ")}
            </Text>
            <Text style={styles.label}>History: {patient.history}</Text>
            <Text style={styles.label}>
              Family History: {patient.familyHistory}
            </Text>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#f1f2f4",
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2,
    padding: 12,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#28c1a5",
  },
  dropdown: {
    fontSize: 16,
    fontWeight: "600",
    color: "#28c1a5",
  },
  animatedContainer: {
    overflow: "hidden",
  },
  hiddenContent: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
  },
  content: {
    paddingTop: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "400",
  },
});
