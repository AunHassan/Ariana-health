import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";
import AssistantModal from "./AssistantModal";

export default function AssistantFloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal visible={open} animationType="slide" transparent>
        <AssistantModal onClose={() => setOpen(false)} />
      </Modal>

      <View style={styles.wrapper} pointerEvents="box-none">
        <TouchableOpacity
          accessibilityLabel="Open assistant"
          style={styles.button}
          onPress={() => setOpen(true)}
        >
          <Text style={styles.icon}>💬</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 18,
    bottom: 28,
    zIndex: 999,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2b6ef6",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  icon: { color: "#fff", fontSize: 26 },
});
