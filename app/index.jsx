import { useRouter } from "expo-router";
import { View } from "react-native";

import HealthAssistantCard from "../components/HealthAssistantCard";
import ServicesCard from "../components/ServicesCard";

export default function Index() {
  const router = useRouter();

  const servicesData = [
    {
      title: "Talk to AI Doctor",
      icon: "📆",
      desc: "Instant health assessment",
      onPress: () => router.push("/appointments"),
    },
    {
      title: "Book Video Call",
      icon: "📹",
      desc: "Consult real doctors",
      onPress: () => router.push("/assistant"),
    },
    {
      title: "Home Care visit",
      icon: "🏠",
      desc: "Doctor visits you",
      onPress: () => router.push("/profile"),
    },
    {
      title: "Order Medicines",
      icon: "💊",
      desc: "prescription delivery",
      onPress: () => router.push("/settings"),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HealthAssistantCard
        headerIcon="🤖"
        title="AI Health Assistant"
        description="Describe your symptoms for instant assessment"
        micIcon="🎤"
        placeholder=" Tell me how you're feeling...  "
        cameraIcon="📷"
      />
      <ServicesCard data={servicesData} />
    </View>
  );
}
