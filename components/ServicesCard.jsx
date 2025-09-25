import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";

const ServicesCard = ({ data }) => {
  return (
    <View style={styles.cardContainer}>
      {data.map(({ title, desc, onPress, icon }, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={onPress}>
          {/* <MaterialIcons name={icon} size={28} color="#28c1a5" /> */}
          <Text style={styles.icon}>{icon}</Text>
          {/* <Icon /> */}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{desc}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ServicesCard;

// const styles = StyleSheet.create({
//   cardContainer:{
//     width: "100%",
//     padding: 20,
//     flexWrap: "wrap",
//     gap: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     width: "25%",

//     // flex: 1,
//     margin: 8,
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     alignItems: "center",
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginTop: 10,
//     color: "#333",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 13,
//     color: "#666",
//     textAlign: "center",
//     marginTop: 4,
//   },
// });

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // allows wrapping to next line
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  card: {
    width: "48%", // ~2 cards per row with space-between
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 16, // vertical spacing between rows

    // shadow
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginTop: 4,
  },
});
