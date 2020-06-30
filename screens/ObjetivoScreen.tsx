import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Objetivo() {
  return (
    <View style={estilo.area}>
      <Text style={estilo.titulo}>Objetivo Profissional</Text>
      <Text style={estilo.texto}>
        Por estar buscando o meu primeiro emprego, almejo cargos
        menores/iniciantes na minha área como Suporte Técnico, Jovem Aprendiz TI
        ou Administrativo. Quero agregar a minha vontade de crescer e foco no
        meu trabalho.
      </Text>
      <Text style={estilo.titulo}>Áreas de interesse</Text>
      <Text style={estilo.texto2}>- Informática/T.I no nível Técnico</Text>
      <Text style={estilo.texto2}>- Informática/T.I no nível Estágio</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  area: {
    backgroundColor: "white",
    flex: 1,
  },
  titulo: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    padding: 10,
  },
  texto: {
    textAlign: "justify",
    fontSize: 14,
    padding: 10,
  },
  texto2: {
    fontSize: 14,
    padding: 4,
  },
});
