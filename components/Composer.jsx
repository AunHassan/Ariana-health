import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Composer({ onSend }) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
          multiline
          style={styles.input}
        />
        <TouchableOpacity
          onPress={send}
          style={styles.sendBtn}
          accessibilityLabel="Send message"
        >
          <Text style={{ color: "#fff" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#eef2ff",
    backgroundColor: "#fff",
  },
  input: { flex: 1, minHeight: 40, maxHeight: 120, paddingHorizontal: 12 },
  sendBtn: {
    backgroundColor: "#2b6ef6",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
