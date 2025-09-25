// import { useState, useEffect, useCallback } from "react";
// import { v4 as uuidv4 } from "uuid";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const STORAGE_KEY = "@assistant_chats_v1";

// export default function useChats() {
//   const [chats, setChats] = useState([]);
//   const [activeChatId, setActiveChatId] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const raw = await AsyncStorage.getItem(STORAGE_KEY);
//         if (raw) {
//           const parsed = JSON.parse(raw);
//           setChats(parsed);
//           setActiveChatId(parsed[0]?.id || null);
//         }
//       } catch (e) {
//         console.warn("load chats failed", e);
//       }
//     })();
//   }, []);

//   useEffect(() => {
//     AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(chats)).catch(() => {});
//   }, [chats]);

//   const createChat = useCallback(() => {
//     const id = uuidv4();
//     const newChat = {
//       id,
//       title: "New Chat",
//       messages: [],
//       createdAt: Date.now(),
//     };
//     setChats((prev) => [newChat, ...prev]);
//     setActiveChatId(id);
//     return id;
//   }, []);

//   const addMessage = useCallback((chatId, msg) => {
//     setChats((prev) =>
//       prev.map((c) =>
//         c.id === chatId
//           ? {
//               ...c,
//               messages: [
//                 ...c.messages,
//                 { id: uuidv4(), timestamp: Date.now(), ...msg },
//               ],
//             }
//           : c
//       )
//     );
//   }, []);

//   return { chats, activeChatId, setActiveChatId, createChat, addMessage };
// }
