import react from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
     let estilo = estilos.texto;

     if(style?.fontWeight === "bold") { // Interrogação previne erros null
          estilo = estilos.textNegrito;
     }

     return <Text style={[style, estilos]}>{ children }</Text> // Pegar o estilo do componente atual e seus "filhos"
}

const estilos = StyleSheet.create({
     texto: {
          fontFamily: "MontserratRegular",
          fontWeight: "normal",
     },
     textNegrito: {
          fontFamily: "MontserratBold",
          fontWeight: "normal",
     }
});