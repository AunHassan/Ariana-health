import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ChatHeader({ title, onClose, onToggleDrawer }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onToggleDrawer} style={styles.drawerBtn}>
        <Text>≡</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onClose} style={styles.close}>
        <Text>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#eef2ff",
  },
  drawerBtn: { width: 44, justifyContent: "center", alignItems: "center" },
  title: { flex: 1, textAlign: "center", fontWeight: "600" },
  close: { width: 44, justifyContent: "center", alignItems: "center" },
});
