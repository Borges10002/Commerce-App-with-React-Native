import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View className="font-rubik-extrabold">
        <Text style={{ color: "red", fontFamily: "Rubik-Bold" }}>
          Raghunadh
        </Text>
        <Link href={"/(root)/(tabs)/home"}>Home</Link>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
