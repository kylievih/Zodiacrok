import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet } from "react-native";
import Home from "../pages/home";
import Planets from "../pages/planets";
import Zodiac from "../pages/zodiac";
import Rokmojih from "../pages/rokmojih";
import Perfil from "../pages/perfil";

// Importando imagens personalizadas
import homeIcon from "../../../assets/Menu/feed.png";
import planetsIcon from "../../../assets/Menu/planets.png";
import zodiacIcon from "../../../assets/Menu/zodiac.png";
import rokmojihIcon from "../../../assets/Menu/rokmojih.png";
import perfilIcon from "../../../assets/Menu/perfil.png";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#A0A0A0",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0.5,
          borderColor: "#F2F2F2",
          paddingTop: 5,
        },
        tabBarShowLabel: false, // Ocultando os nomes das abas
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image source={homeIcon} style={{ width: size, height: size }} />
            </View>
          ),
        }}
      />

      {/*
      <Tab.Screen
        name="Planets"
        component={Planets}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image
                source={planetsIcon}
                style={{ width: size, height: size }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Zodiac"
        component={Zodiac}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image
                source={zodiacIcon}
                style={{ width: size, height: size }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Rokmojih"
        component={Rokmojih}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image
                source={rokmojihIcon}
                style={{ width: size, height: size }}
              />
            </View>
          ),
        }}
      />
      */}

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIcon]}>
              <Image
                source={perfilIcon}
                style={{ width: size, height: size }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  activeIcon: {
    backgroundColor: "#F2F2F2",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
