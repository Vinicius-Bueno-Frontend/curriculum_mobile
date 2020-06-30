import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import PessoaisScreen from "../screens/PessoaisScreen";
import FormacaoScreen from "../screens/FormacaoScreen";
import ObjetivoScreen from "../screens/ObjetivoScreen";

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Pessoais"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Dados Pessoais"
        component={Pessoais}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-tie" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Formação"
        component={Formacao}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pencil-alt" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Objetivo"
        component={Objetivo}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="info-circle" color={color} />
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
const PessoaisStack = createStackNavigator();
function Pessoais() {
  return (
    <PessoaisStack.Navigator>
      <PessoaisStack.Screen
        name="PessoaisScreen"
        component={PessoaisScreen}
        options={{ headerTitle: "Dados Pessoais" }}
      />
    </PessoaisStack.Navigator>
  );
}

const FormacaoStack = createStackNavigator();
function Formacao() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="FormacaoScreen"
        component={FormacaoScreen}
        options={{ headerTitle: "Minha Formação" }}
      />
    </FormacaoStack.Navigator>
  );
}

const ObjetivoStack = createStackNavigator();
function Objetivo() {
  return (
    <ObjetivoStack.Navigator>
      <ObjetivoStack.Screen
        name="ContatoScreen"
        component={ObjetivoScreen}
        options={{ headerTitle: "Objetivo e Interesses" }}
      />
    </ObjetivoStack.Navigator>
  );
}
