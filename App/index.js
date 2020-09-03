import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Navigation from './config/Navigation';
import { ConversionContextProvider } from './util/ConversionContext';


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  
  export default () => ( 
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  )

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Currency Converters</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

