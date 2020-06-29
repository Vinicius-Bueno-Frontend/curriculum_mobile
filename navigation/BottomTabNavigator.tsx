import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import HistoriaScreen from "../screens/HistoriaScreen";
import CardapioScreen from "../screens/CardapioScreen";
import ContatoScreen from "../screens/ContatoScreen";
import LocalizacaoScreen from "../screens/LocalizacaoScreen";

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="História"
        component={Historia}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cardápio"
        component={Cardapio}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book-open" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="wpforms" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Localização"
        component={Localizacao}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="map-marker-alt" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

const HistoriaStack = createStackNavigator();
function Historia() {
  return (
    <HistoriaStack.Navigator>
      <HistoriaStack.Screen
        name="HistoriaScreen"
        component={HistoriaScreen}
        options={{ headerTitle: "Nossa História" }}
      />
    </HistoriaStack.Navigator>
  );
}

const CardapioStack = createStackNavigator();
function Cardapio() {
  return (
    <CardapioStack.Navigator>
      <CardapioStack.Screen
        name="CardapioScreen"
        component={CardapioScreen}
        options={{ headerTitle: "O que temos" }}
      />
    </CardapioStack.Navigator>
  );
}

const ContatoStack = createStackNavigator();
function Contato() {
  return (
    <ContatoStack.Navigator>
      <ContatoStack.Screen
        name="ContatoScreen"
        component={ContatoScreen}
        options={{ headerTitle: "Contato" }}
      />
    </ContatoStack.Navigator>
  );
}

const LocalizacaoStack = createStackNavigator();
function Localizacao() {
  return (
    <LocalizacaoStack.Navigator>
      <LocalizacaoStack.Screen
        name="LocalizacaoScreen"
        component={LocalizacaoScreen}
        options={{ headerTitle: "Localização" }}
      />
    </LocalizacaoStack.Navigator>
  );
}
