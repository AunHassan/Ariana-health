// components/ChatInputBar.jsx
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ChatInputBar({ onSend }) {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type a message..."
        style={styles.input}
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity onPress={handleSend} style={styles.btn}>
        <Text style={{ color: "#fff", fontWeight: "700" }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
  },
  btn: {
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#28c1a5",
    borderRadius: 8,
  },
});
