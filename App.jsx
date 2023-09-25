import React from "react";
import { View, Text } from 'react-native';
import SaveData from './src/screens/saveData'
import ToDo from './src/screens/todo'

const App = () => {
  return (
    <View style={{flex:1}}>
     {/* <SaveData /> */}
     <ToDo />
        </View>
  )
}

export default App;
