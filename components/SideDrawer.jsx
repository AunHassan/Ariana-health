// components/SideDrawer.jsx
import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default function SideDrawer({
  open,
  conversations = [],
  onOpenConversation,
  onNewChat,
  onClose,
}) {
  const width = 260;
  const anim = useRef(new Animated.Value(open ? 0 : -width)).current;
  const visible = useRef(open);

  useEffect(() => {
    Animated.timing(anim, {
      toValue: open ? 0 : -width,
      duration: 220,
      useNativeDriver: false,
    }).start();
  }, [open]);

  return (
    <>
      {/* backdrop */}
      {open && (
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
      )}

      <Animated.View style={[styles.drawer, { left: anim, width }]}>
        <View style={styles.header}>
          <Text style={styles.title}>Chats</Text>
          <TouchableOpacity onPress={onNewChat} style={styles.newBtn}>
            <Text style={{ fontWeight: "700" }}>+ New</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchWrap}>
          <TextInput placeholder="Search chats..." style={styles.searchInput} />
        </View>

        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.convItem}
              onPress={() => onOpenConversation(item.id)}
            >
              <View style={styles.convAvatar}>
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                  {item.title ? item.title[0].toUpperCase() : "C"}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={styles.convTitle}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.convPreview}>
                  {item.messages && item.messages.length
                    ? item.messages[item.messages.length - 1].text
                    : ""}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 100, // below header
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },
  drawer: {
    position: "absolute",
    top: 30,
    bottom: 0,
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderColor: "#28c1a5",
    zIndex: 50,
    shadowColor: "#000",
    shadowOpacity: 0.11,
    shadowRadius: 6,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#28c1a5",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  title: { fontSize: 16, fontWeight: "700" },
  newBtn: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#fff",
    color: "#28c1a5",
    borderRadius: 8,
  },
  searchWrap: { padding: 10 },
  searchInput: { backgroundColor: "#f6f6f6", padding: 10, borderRadius: 8 },
  convItem: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  convAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#28c1a5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  convTitle: { fontWeight: "700" },
  convPreview: { color: "#666", fontSize: 12 },
});
