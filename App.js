import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import Cesta from "./src/views/Cesta";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import mock from "./src/mocks/cesta";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // A tela permanecerá visível até que o hideAsync seja chamado.
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if(fontCarregada) {
      SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) {
    return <View />;
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}


