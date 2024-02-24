import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { StatusBar } from 'expo-status-bar'
import {useFonts} from 'expo-font'
const image = [
  require('../assets/p11.png'),
  require('../assets/p22.png'),
  require('../assets/p33.png')
]

export default function onBoarding({ navigation }) {
  const [loaded] = useFonts({
    Poppins:require('../assets/Poppins-Medium.ttf'),
    PoppinsSemiBold:require('../assets/Poppins-SemiBold.ttf'),
    PoppinsBold:require('../assets/Poppins-Bold.ttf')
  })
  if(!loaded){
    return null
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between' }}>
      <StatusBar backgroundColor='#f99722' style='light' />
      {/* on boarding */}
      <View style={{ marginTop: 75, alignItems: 'center' }}>
        <Image source={require('../assets/posku.png')} />
        <Text style={{ paddingTop: 10 ,fontFamily:'Poppins'}}>Aplikasi Kasir Gratis Untuk UMKM Indonesia</Text>
      </View>
      <SliderBox images={image} sliderBoxHeight={420} inactiveDotColor="gray" dotColor='orange' autoplay={true} paginationBoxVerticalPadding={-20} circleLoop={true} autoPlayInterval={5000} />
      {/* on boarding */}

      <View style={{ backgroundColor: 'white', elevation: 20, flexDirection: 'column', alignItems: 'center', height: 160, justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
          <View style={{ backgroundColor: '#F99722', width: 350, height: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 10, borderRadius: 10 }}>
            <Text style={{ color: 'white' ,fontFamily:'Poppins'}}>Daftar Akun</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Masuk')}>
          <View style={{ borderWidth: 1, borderColor: '#F99722', width: 350, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
            <Text style={{ color: '#F99722' ,fontFamily:"Poppins"}}>Masuk</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}