import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageBubble({ message }) {
  const isUser = message.sender === "user";
  return (
    <View style={[styles.row, isUser ? styles.rightRow : styles.leftRow]}>
      {!isUser && (
        <View style={styles.avatar}>
          <Text>🤖</Text>
        </View>
      )}

      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
      >
        <Text>{message.text}</Text>
      </View>

      {isUser && (
        <View style={styles.userAvatar}>
          <Text>{(message.userName || "U").charAt(0)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "flex-end", marginVertical: 6 },
  leftRow: { justifyContent: "flex-start" },
  rightRow: { justifyContent: "flex-end" },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F7FAFC',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    backgroundColor: "#28c1a5",
  },
  bubble: { maxWidth: "75%", padding: 10, borderRadius: 12 },
  botBubble: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "red",
  },
  userBubble: { backgroundColor: "#28c1a5", color: "#fff" },
});
