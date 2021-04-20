// react native
import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screen
import { HomeScreen } from "./screens/main/Home";
import { LoginScreen } from "./screens/auth/Login";
import { SignupScreen } from "./screens/auth/Signup";
import { DiaryScreen } from "./screens/diary/Diary";
import { RecommendationScreen } from "./screens/recommendation/Recommendation";
import { SurveyintroScreen } from "./screens/recommendation/SurveyIntro";

// theme
import theme from "./assets/theme/index";
import { ThemeProvider } from "styled-components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Recommendation" component={RecommendationScreen} />
    </Tab.Navigator>
  );
}

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="SurveyIntro"
        component={SurveyintroScreen}
        options={{ title: "SurveyIntro" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Mystack />
      </NavigationContainer>
    </ThemeProvider>
  );
}
