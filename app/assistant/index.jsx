import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";

import Header from "./../../components/Header";
import SideDrawer from "./../../components/SideDrawer";
import ChatBubble from "./../../components/ChatBubble.jsx";
import ChatInputBar from "./../../components/ChatInputBar.jsx";


const chatData = require("./../../assets/data/chats.json");

export default function Assistant() {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [activeConvId, setActiveConvId] = useState(null);
  const [messages, setMessages] = useState([]);

  const [chatTitle, setchatTitle] = useState(["Medical AI . Online"]);

  useEffect(() => {
    // load from local JSON
    setConversations(chatData.conversations || []);

    // pick first conversation as active by default
    if ((chatData.conversations || []).length > 0) {
      const first = chatData.conversations[0];
      setActiveConvId(first.id);
      setMessages(first.messages || []);
    }
  }, []);

  function openConversation(convId) {
    const conv = conversations.find((c) => c.id === convId);
    if (!conv) return;
    setActiveConvId(convId);
    setMessages(conv.messages || []);
    setDrawerOpen(false);
    setchatTitle(conv.title || []);
  }

  function handleNewChat() {
    // for demo: create a new empty conversation in memory
    const newConv = {
      id: `c${Date.now()}`,
      title: "New Chat",
      messages: [
        { id: `m${Date.now()}`, from: "bot", text: "Hello! How can I help?" },
      ],
      lastUpdated: new Date().toISOString(),
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConvId(newConv.id);
    setMessages(newConv.messages);
    setDrawerOpen(false);
  }

  function handleSend(text) {
    if (!text?.trim()) return;
    const newMsg = { id: `m${Date.now()}`, from: "user", text: text.trim() };
    // append locally
    setMessages((prev) => [...prev, newMsg]);

    // simple bot echo reply after a short delay (demo)
    setTimeout(() => {
      const botMsg = {
        id: `m${Date.now() + 1}`,
        from: "bot",
        text: `Bot reply: I heard "${text.trim()}"`,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <Header
          title="Health Assistant"
          desc={chatTitle}
          onClose={() => router.back()}
          onOpenDrawer={() => setDrawerOpen((s) => !s)}
        />

        <SideDrawer
          open={drawerOpen}
          conversations={conversations}
          onOpenConversation={openConversation}
          onNewChat={handleNewChat}
          onClose={() => setDrawerOpen(false)}
        />

        <View style={styles.content}>
          {activeConvId ? (
            <>
              <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16, paddingBottom: 90 }}
                renderItem={({ item }) => <ChatBubble message={item} />}
              />
              <ChatInputBar onSend={handleSend} />
            </>
          ) : (
            <View style={styles.empty}>
              <Text style={{ color: "#666" }}>
                Select a conversation or create a new chat.
              </Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#fff" },
  content: { flex: 1 },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
});

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Assistant = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Assistant</Text>
//     </View>
//   );
// };

// export default Assistant;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// app/assistant/index.jsx
