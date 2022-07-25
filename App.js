
import { StatusBar, SafeAreaView, View } from 'react-native';

import Cesta from './src/telas/Cesta';
import { 
   useFonts,
   Montserrat_400Regular,
   Montserrat_600SemiBold,
   Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratSemi": Montserrat_600SemiBold,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }  
  return (
    <SafeAreaView >
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}


