import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "../Cesta/components/Detalhes";
import Topo from "../Cesta/components/Topo";

export default function Cesta() {
     return <>
          <Topo/>
          <View style={estilos.cesta}>
               <Detalhes/>
          </View>
     </>
}

const estilos = StyleSheet.create({
     cesta: {
          paddingVertical: 8,
          paddingHorizontal: 16,
     },
});