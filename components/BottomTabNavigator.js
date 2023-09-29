import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "../Screens/Transaction";
import SearchScreen from "../Screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              var iconName;
              if (route.name === "Transacción") {
                iconName = "book";
              } else if (route.name === "Buscar") {
                iconName = "search";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              height: 80,
              borderTopWidth: 0,
              backgroundColor: "#5653d4",
            },
            labelStyle: {
              fontSize: 20,
            },
            labelPosition: "beside-icon",
          }}
        >
          <Tab.Screen name="Transacción" component={TransactionScreen} />
          <Tab.Screen name="Buscar" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
