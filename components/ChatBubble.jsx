// components/ChatBubble.jsx
import { StyleSheet, Text, View } from "react-native";

export default function ChatBubble({ message,userProfile="U" }) {
  const isUser = message.from === "user";
  const avatar = isUser ? (
    <View style={styles.userAvatar}>
      <Text style={{ color: "#fff", fontWeight: "700" }}>
        {userProfile}
      </Text>
    </View>
  ) : (
    <View style={styles.botAvatar}>
      <Text style={{ color: "#fff", fontWeight: "700"  }}>
        {/* first letter - for demo put 'U' */}🤖
      </Text>
    </View>
  );

  return (
    <View
      style={[
        styles.row,
        isUser
          ? { justifyContent: "flex-end" }
          : { justifyContent: "flex-start" },
      ]}
    >
      {!isUser && <View style={{ marginRight: 8 }}>{avatar}</View>}

      <View
        style={[styles.bubble, isUser ? styles.userBubble : styles.botBubble]}
      >
        <Text style={isUser ? styles.userText : styles.botText}>
          {message.text}
        </Text>
      </View>

      {isUser && <View style={{ marginLeft: 8 }}>{avatar}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "flex-end", marginVertical: 6 },
  botAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f1f2f4",
    alignItems: "center",
    justifyContent: "center",
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#28c1a5",
    alignItems: "center",
    justifyContent: "center",
  },
  bubble: { maxWidth: "75%", padding: 12, borderRadius: 12 },
  botBubble: { backgroundColor: "#f1f2f4", borderTopLeftRadius: 4 },
  userBubble: { backgroundColor: "#28c1a5", borderTopRightRadius: 4 },
  botText: { color: "#111" },
  userText: { color: "#fff" },
});
