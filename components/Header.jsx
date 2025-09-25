import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Header({ title = "Assistant",desc = "Medical AI Online",onClose, onOpenDrawer }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onOpenDrawer} style={styles.iconButton}>
        <Text style={styles.icon}>☰</Text>
      </TouchableOpacity>

      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      <TouchableOpacity onPress={onClose} style={styles.iconButton}>
        <Text style={styles.icon}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    marginTop: 30,
    color: "#fff",
    backgroundColor: "#28c1a5",
    borderColor: "#28c1a5",
  },
  iconButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { fontSize: 20, color: "#fff" },
  titleWrap: { flex: 1, alignItems: "start", justifyContent: "start" },
  title: { fontSize: 16, fontWeight: "700", color: "#fff" },
  desc: { fontSize: 14, fontWeight: "400", color: "#fff" },
});
