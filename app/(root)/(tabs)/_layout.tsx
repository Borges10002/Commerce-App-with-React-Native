import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image source={icon} resizeMode="contain" className="size-6" />
    <Text
      className={`${
        focused ? "text-primary-100 font-rubik-medium" : "text-black font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={focused ? icons.homeActive : icons.home}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={focused ? icons.notificationActive : icons.notification}
              focused={focused}
              title="Notifications"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={focused ? icons.recieptActive : icons.reciept}
              focused={focused}
              title="Orders"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={focused ? icons.profileActive : icons.profile}
              focused={focused}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
