import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

export default function Beranda({navigation}) {
  const image = [
    require('../assets/carouselberanda.png'),
    require('../assets/carouselberanda.png'),
    require('../assets/carouselberanda.png')
  ]
  return (
    <ScrollView>
      {/* <View style={{ backgroundColor: 'white', elevation: 5, width: 'full', height: 80, justifyContent: 'center', paddingTop: 30, paddingLeft: 25 }}>
        <View style={{ flexDirection: 'row', gap: 17 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Root')} >
            <Image source={require('../assets/sidee.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, bottom: 3 ,fontFamily:'PoppinsSemiBold'}}>Beranda</Text>
        </View>
      </View> */}
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ backgroundColor: '#f75454', width: 'full', }}>
          <Text style={{ textAlign: 'center', color: 'white' ,fontSize:12,fontFamily:'PoppinsSemiBold'}}>Isi data rekening bank untuk mentransfer Dana Qris</Text>
        </View>
        <View style={{ alignItems: 'center' }}>

          <View style={{ backgroundColor: 'white', width: 346, height: 70, marginTop: 50, borderRadius: 20, justifyContent: 'center', elevation: 5, }}>
            <View style={{ marginLeft: 15, flexDirection: 'row' }}>
              <Image source={require('../assets/iconberanda.png')} />
              <Text style={{ marginLeft: 15, marginTop: 5, color: "#C5C5C5", fontSize: 12 ,fontFamily:'Poppins'}}>Rp.<Text style={{ color: 'black', fontSize: 14, fontWeight: '700' }}>107.000  </Text></Text>
              <Image style={{ marginLeft: 50 }} source={require('../assets/iconberanda.png')} />
              <Text style={{ marginLeft: 15, marginTop: 5, color: "#C5C5C5", fontSize: 12 ,fontFamily:'Poppins'}}>Rp.<Text style={{ color: 'black', fontSize: 14, fontWeight: '700' }}>350.000  </Text></Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 30 }}>
          <SliderBox images={image} sliderBoxHeight={125} parentWidth={357} dotColor='orange' inactiveDotColor='gray' autoplay={true} paginationBoxVerticalPadding={-20} autoPlayInterval={5000} circleLoop={true}/>
        </View>
        <View style={{ justifyContent: 'center', marginTop: 30, marginLeft: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: '500' ,fontFamily:'Poppins'}}>
            Ringkasan Hari ini
          </Text>

          <View style={{ flexDirection: 'row', gap: 20, flexWrap: 'wrap' }}>

            <View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 10, width: 167, height: 90, marginTop: 20 }}>
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: '400', color: '#C5C5C5' ,fontFamily:'Poppins'}}>Total Transaksi</Text>
              <Text style={{ textAlign: 'center', marginTop: 15, fontFamily:'PoppinsSemiBold'}}>3</Text>
            </View>
            <View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 10, width: 167, height: 90, marginTop: 20 }}>
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: '400', color: '#C5C5C5',fontFamily:"Poppins" }}>Pendapatan</Text>
              <Text style={{ textAlign: 'center', marginTop: 15, fontFamily:'PoppinsSemiBold'}}>Rp.38.000</Text>
            </View>
            <View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 10, width: 167, height: 90, marginTop: 5 }}>
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: '400', color: '#C5C5C5' ,fontFamily:"Poppins"}}>Transaksi Tunai</Text>
              <Text style={{ textAlign: 'center', marginTop: 15, fontFamily:'PoppinsSemiBold' }}>Rp.20.000</Text>
            </View>
            <View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 10, width: 167, height: 90, marginTop: 5 }}>
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: '400', color: '#C5C5C5' ,fontFamily:"Poppins"}}>Transaksi Qris</Text>
              <Text style={{ textAlign: 'center', marginTop: 15, fontFamily:'PoppinsSemiBold' }}>Rp.18.500</Text>
            </View>
            <View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 10, width: 167, height: 90, marginTop: 5 }}>
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: '400', color: '#C5C5C5' ,fontFamily:"Poppins"}}>Menu Terjual</Text>
              <Text style={{ textAlign: 'center', marginTop: 15, fontFamily:'PoppinsSemiBold'}}>8</Text>
            </View>
            <View style={{ backgroundColor: 'white', elevation: 3, borderRadius: 10, width: 167, height: 90, marginTop: 5 }}>
              <Text style={{ marginLeft: 10, marginTop: 7, fontWeight: '400', color: '#C5C5C5' ,fontFamily:"Poppins"}}>Transaksi Terlaris</Text>
              <Text style={{ textAlign: 'center', marginTop: 15, fontFamily:'PoppinsSemiBold'}}>Rp.50.000</Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#F99722",
                  width: 350,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text style={{ color: 'white', fontSize: 18 ,fontFamily:"Poppins"}}>Mulai Transaksi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: '#edebeb', width: 'full', height: 5, marginTop: 20, }}></View>
        <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <View style={{ backgroundColor: 'white', width: 354, height: 300, borderRadius: 20, elevation: 5, alignItems: 'center', paddingTop: 25 }}>
            <Image source={require('../assets/berandapos.png')} />
            <Text style={{ color: '#C5C5C5', marginTop: 15 ,fontFamily:"Poppins"}}>Berlangganan POSTKU Plus</Text>
            <Text style={{ fontSize: 17 ,fontFamily:"PoppinsSemiBold"}}>Rp.1k/Hari</Text>

            <TouchableOpacity>
              <View style={{ width: 285, height: 45, justifyContent: 'center', alignItems: 'center', borderColor: '#64F961', borderWidth: 1, marginTop: 20, borderRadius: 10, elevation:5,backgroundColor:'white'}}>
                <Text style={{ fontWeight: 'bold', color: '#64F961', fontSize: 18 ,fontFamily:"Poppins" }}>Upgrade</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>
        <View style={{ backgroundColor: '#edebeb', width: 'full', height: 5, marginTop: 20, }}></View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>


          <View style={{ backgroundColor: 'white', justifyContent: 'center', marginTop: 20 }}>
            <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 20, fontWeight: 600,fontFamily:'Poppins'}}>Artikel Bisnis</Text>
            <View style={{ backgroundColor: 'white', width: 353, height: 150, gap: 30, justifyContent: 'center', elevation: 5, borderRadius: 10, marginTop: 20 }}>
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <Image source={require('../assets/Burger.png')} />
                <Text style={{ width: 160, marginTop: 40, fontSize: 12, fontWeight: 500, fontFamily:"Poppins"}}>Burger Monster ekspansi, Indonesia bersiap menghadapi lawan internasional</Text>
                <Image style={{ top: 131, right: 35, }} source={require('../assets/Eye.png')} />
                <Text style={{ right: 45, top: 128, fontSize: 10,fontFamily:'Poppins' }}>145</Text>
              </View>
            </View>
            <View style={{ backgroundColor: 'white', width: 353, height: 150, gap: 30, justifyContent: 'center', elevation: 5, borderRadius: 10, marginTop: 20 }}>
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <Image source={require('../assets/googlemap.png')} />
                <Text style={{ width: 160, marginTop: 40, fontSize: 12, fontWeight: 500,fontFamily:"Poppins" }}>Burger Monster ekspansi, Indonesia bersiap menghadapi lawan internasional</Text>
                <Image style={{ top: 131, right: 35, }} source={require('../assets/Eye.png')} />
                <Text style={{ right: 45, top: 128, fontSize: 10, fontFamily:"Poppins"}}>145</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20,marginBottom:10 }}>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'white', elevation: 5, height: 36, width: 120, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text style={{ color: '#31CEFF',fontFamily:'Poppins' }}>Read More...</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>

  )
}