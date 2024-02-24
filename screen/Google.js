import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Whatsapp({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginTop: 30, marginLeft: 30, width: 306 }}>
                <Text style={{ fontSize: 36, color: '#F99722', fontFamily: "PoppinsBold" }}>Ayo masuk.</Text>
                <Text style={{ color: '#F99722', fontSize: 18, fontWeight: '300', marginTop: 10, fontFamily: "Poppins" }}>Dan mulai petualangan bisnismu bersama kami</Text>
            </View>
            <View style={{ marginTop: 80, alignItems: 'center' }}>


                <View
                    style={{
                        borderBlockColor: "#C5C5C5",
                        borderLeftColor: "#C5C5C5",
                        borderRightColor: "#C5C5C5",
                        borderRadius: 15,
                        width: 350,
                        borderWidth: 1,
                        marginTop: 20,
                        height: 50,
                        justifyContent: "center",
                        paddingLeft: 10,
                    }}
                >
                    <TextInput placeholder='No Whatsapp' style={{ fontFamily: "Poppins" }} inputMode='numeric' />
                </View>
            </View>

            <View style={{marginTop:385,alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Beranda')}>
                    <View style={{ width: 355, height: 50, backgroundColor: '#F99722', justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 15 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins' }}>Masuk</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}