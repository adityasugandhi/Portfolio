import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import ProjectsScreen from "./Pages/Projects.js";
import HomeScreen from "./Pages/Home.js";
import {createSwitchNavigator} from 'react-navigation/web';
// import { createSwitchNavigator } from '@react-navigation/native';

import Navbar from "./Components/Navbar.js"; // Replace with your actual Navbar component

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// Define Stack Navigator Screens
const StackScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* Add more screens if needed */}
    <Stack.Screen name="Projects" component={ProjectsScreen} />
  </Stack.Navigator>
);

const SwitchNavigator = createSwitchNavigator({
  Screen1: HomeScreen,
  Screen2: ProjectsScreen,
});

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? (
        // Use Navbar for web platform
        <Navbar>
          <SwitchNavigator />
        </Navbar>
      ) : (
        // Use MobileNavbar for iOS and Android platforms
        <BottomTab.Navigator>
          <BottomTab.Screen name="StackScreens" component={StackScreens} />
          {/* Add more bottom tab screens if needed */}
        </BottomTab.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
