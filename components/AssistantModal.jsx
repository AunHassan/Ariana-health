import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import SideDrawer from "./SideDrawer";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import Composer from "./Composer";
import useChats from "../hooks/useChats";

const { width } = Dimensions.get("window");

export default function AssistantModal({ onClose }) {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const { chats, activeChatId, setActiveChatId, addMessage, createChat } =
    useChats();

  useEffect(() => {
    if (!chats.length) createChat();
  }, []);

  const activeChat = chats.find((c) => c.id === activeChatId) || chats[0];

  return (
    <View style={styles.container}>
      <View
        style={[styles.panel, { width: drawerOpen ? width * 0.88 : width }]}
      >
        <ChatHeader
          title={activeChat?.title || "New Chat"}
          onClose={onClose}
          onToggleDrawer={() => setDrawerOpen((v) => !v)}
        />

        <MessageList messages={activeChat?.messages || []} />

        <Composer
          onSend={(text) => {
            addMessage(activeChat.id, { sender: "user", text });
            // simulate bot reply
            setTimeout(() => {
              addMessage(activeChat.id, {
                sender: "bot",
                text: "This is a sample reply.",
              });
            }, 700);
          }}
        />
      </View>

      {drawerOpen && (
        <SideDrawer
          chats={chats}
          activeId={activeChatId}
          onSelect={(id) => {
            setActiveChatId(id);
            setDrawerOpen(false);
          }}
          onNew={() => {
            const id = createChat();
            setActiveChatId(id);
            setDrawerOpen(false);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  panel: {
    height: "88%",
    backgroundColor: "#fff",
  },
});
