import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function HealthAssistantCard({
  headerIcon,
  title,
  description,
  micIcon,
  placeholder,
  cameraIcon
}) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        {/* <MaterialIcons name={headerIcon} size={28} color="#585454" /> */}
        <Text style={styles.icon}>{headerIcon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.inputLike}>
        <View style={styles.headerRow}>
          {/* <MaterialIcons name={micIcon} size={28} color="#585454" /> */}
          <Text style={styles.icon}>{micIcon}</Text>
          <Text style={styles.placeholder}>{placeholder}</Text>
          {/* <MaterialIcons name={micIcon} size={28} color="#585454" /> */}
          <Text style={styles.icon}>{cameraIcon}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1BC0AD",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    alignSelf: "center",
    elevation: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 15,
    color: "#eaf8f8",
    marginVertical: 10,
  },
  inputLike: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    padding: 12,
  },
  placeholder: {
    color: "#f1f1f1",
    fontSize: 14,
  },
});
