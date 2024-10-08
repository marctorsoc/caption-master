import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { GlobalStyles } from "../../src/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderLeft,
  HeaderRight,
} from "../../src/components/Library/Header";
import { GlobalContext } from "../../src/context/global-context";

export default function Layout() {
  const { globalConfig, setGlobalConfig } = useContext(GlobalContext);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
      }}
      screenListeners={{
        tabPress: () => {
          // reset storyLongPressed when a tab is pressed
          setGlobalConfig({
            ...globalConfig,
            storyLongPressed: undefined,
          });
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: null,
          tabBarLabel: "Play",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="library-outline"
              size={size}
              color={color}
            />
          ),
          headerLeft: ({ tintColor }) => (
            <HeaderLeft tintColor={tintColor} />
          ),
          headerRight: ({ tintColor }) => (
            <HeaderRight tintColor={tintColor}></HeaderRight>
          ),
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: "Catalog",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
