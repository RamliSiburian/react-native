import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import Home from './src/screen/Home';
import Register from './src/screen/Register';
import Login from './src/screen/Login';
import Todo from './src/screen/Todo';
import AddList from "./src/screen/Add-list";
import AddCategory from "./src/screen/Add-category";
import DetailList from "./src/screen/Detail-list";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "navy" },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let colorName = color

                    if (route.name === "List") {
                        iconName = focused ? "list-circle" : "list-circle-outline"
                    } else if (route.name === "AddList") {
                        iconName = focused ? "add" : "add-outline"
                    } else if (route.name === "AddCategory") {
                        iconName = focused ? "duplicate" : "duplicate-outline"
                    }
                    return <Ionicons name={iconName} size={20} color={colorName} />
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black"
            })}>
            <tab.Screen name="List" component={Todo} options={{ headerShown: false }} />
            <tab.Screen name="AddList" component={AddList} options={{ headerShown: false }} />
            <tab.Screen name="AddCategory" component={AddCategory} options={{ headerShown: false }} />
        </tab.Navigator>
    )
}

export default function Container() {
    return (
        <NavigationContainer>
            <stack.Navigator >
                <stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <stack.Screen name="Todo" component={MyTab} options={{ headerShown: false }} />
                <stack.Screen name="DetailList" component={DetailList} options={{ headerShown: false }} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
