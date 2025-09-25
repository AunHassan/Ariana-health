import { IconSymbol } from "@/app-example/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import { View } from "react-native";
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerStyle: {
          backgroundColor: "#1BC0AD", // header background
          elevation: 0, // remove Android shadow if you like
          shadowOpacity: 0, // remove iOS shadow if you like
        },

        // 🔹 Text color & font
        headerTintColor: "#fff", // back button + title color
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          headerShown: true,
          headerTitle: 'aun',
          // headerTitle: () => (
          //   <View style={{ alignItems: "center" }}>
          //     <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          //       Home
          //     </Text>
          //     <Text style={{ fontSize: 14, color: "#e0e0e0", marginTop: 2 }}>
          //       Welcome to the dashboard
          //     </Text>
          //   </View>
          // ),

          // 🔹 Optional custom component on the right
          headerRight: () => <IconSymbol name="gear" size={24} color="#fff" />,
        }}
      />
      <Tabs.Screen
        name="appointments/index"
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),

          title: "Appointments",
        }}
      />
      <Tabs.Screen
        name="assistant/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="message" color={color} />
          ),
          title: "Assistant",
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person" color={color} />
          ),
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gearshape.fill" color={color} />
          ),
          title: "Settings",
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({
//   header-container: {
//     backgroundColor: '#28c1a5',
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//   },
//   // greeting: {
//   //   fontSize: 22,
//   //   color: '#fff',
//   //   fontWeight: 'bold',
//   //   marginBottom: 6,
//   // },
//   // subText: {
//   //   fontSize: 16,
//   //   color: '#eafaf7',
//   //   marginBottom: 20,
//   // },
//   // input: {
//   //   backgroundColor: 'rgba(255,255,255,0.2)',
//   //   paddingVertical: 12,
//   //   paddingHorizontal: 15,
//   //   borderRadius: 20,
//   // },
//   // placeholder: {
//   //   color: '#fff',
//   //   fontSize: 14,
//   // },
// });
