import React, { useRef, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages = [] }) {
  const ref = useRef();

  useEffect(() => {
    if (messages.length) ref.current?.scrollToEnd?.({ animated: true });
  }, [messages.length]);

  return (
    <FlatList
      ref={ref}
      data={messages}
      keyExtractor={(m) => m.id}
      renderItem={({ item }) => <MessageBubble message={item} />}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 12, paddingBottom: 6 },
});
