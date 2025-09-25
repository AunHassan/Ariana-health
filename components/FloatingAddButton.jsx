import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FloatingAddButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.plus}>＋</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  plus: { fontSize: 28, color: "#fff" },
});
