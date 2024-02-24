import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Beranda from './screen/Beranda'
import Masuk from './screen/Masuk'
const Drawer = createDrawerNavigator()
export default function iniside() {
    return (
    <Drawer.Navigator initialRouteName='beranda'>
        <Drawer.Screen name='beranda' component={Beranda}/>
        <Drawer.Screen name='Masuk' component={Masuk}/>
    </Drawer.Navigator>
  )
}