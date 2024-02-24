import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import React from "react";
import {Picker} from '@react-native-picker/picker'
import { useState } from "react";
export default function daftar({navigation}) {
  const [items, setItems] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kabupaten, setKabupaten] = useState();
  const [kecamatan, setKecamatan] = useState();
  const [kelurahan, setKelurahan] = useState();
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={'#f99722'}/>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={{fontFamily:'Poppins'}}>Halo UMKMers, ayo lengkapi data dibawah</Text>
        </View>
        <View style={{ marginTop: 15, marginLeft: 20 }}>
          <Text
            style={{ fontSize: 20, fontFamily: "PoppinsBold" }}
          >
            Data Owner
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput placeholder='username' style={{fontFamily:'Poppins'}}/>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput placeholder='password' style={{fontFamily:'Poppins'}}/>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput placeholder='e-mail' inputMode="email" style={{fontFamily:'Poppins'}}/>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput placeholder='no. whatsapp' inputMode="numeric" style={{fontFamily:'Poppins'}}/>
          </View>
        </View>
        <View style={{ marginTop: 25, marginLeft: 20 }}>
          <Text
            style={{  fontSize: 20, fontFamily: "PoppinsBold" }}
          >
            Data Toko
          </Text>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput placeholder='nama' style={{fontFamily:'Poppins'}}/>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <TextInput placeholder='alamat' style={{fontFamily:'Poppins'}}/>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Picker mode="dropdown" selectedValue={items} onValueChange={setItems}>
              <Picker.Item
                label='kategori Toko'
                enabled={false}
                style={{ color: "#4a5568" }}
              />
              <Picker.Item label='toko kelontong' value={"toko kelontong"} />
              <Picker.Item label='salon' value={"salon"} />
              <Picker.Item label='cuci steam' value={"cuci steam"} />
              <Picker.Item label='laundry' value={"laundry"} />
            </Picker>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Picker mode="dropdown" selectedValue={provinsi} onValueChange={setProvinsi}>
              <Picker.Item
                label='provinsi'
                enabled={false}
                style={{ color: "#4a5568" }}
              />
              <Picker.Item label='DKI Jakarta' value={"DKI Jakarta"} />
              <Picker.Item label='Banten' value={"Banten"} />
              <Picker.Item label='jawa Tengah' value={"Jawa Tengah"} />
              <Picker.Item label='Jawa Timur' value={"Jawa Timur"} />
              <Picker.Item label='Jawa Barat' value={"Jawa Barat"} />
            </Picker>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Picker mode="dropdown" selectedValue={kabupaten} onValueChange={setKabupaten}>
              <Picker.Item
                label='kab / kota'
                enabled={false}
                style={{ color: "#4a5568" }}
              />
              <Picker.Item label='bogor' value={"bogor"} />
              <Picker.Item label='cikarang' value={"cikarang"} />
              <Picker.Item label='bandung' value={"bandung"} />
              <Picker.Item label='jakarta' value={"jakarta"} />
            </Picker>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Picker mode="dropdown" selectedValue={kecamatan} onValueChange={setKecamatan}>
              <Picker.Item
                label='kecamatan'
                enabled={false}
                style={{ color: "#4a5568" }}
              />
              <Picker.Item label='sukaresmi' value={"sukaresmi"} />
              <Picker.Item label='serang baru' value={"serang baru"} />
              <Picker.Item label='cibarusah' value={"cibarusah"} />
            </Picker>
          </View>
          <View
            style={{
              borderBlockColor: "#C5C5C5",
              borderLeftColor: "#C5C5C5",
              borderRightColor: "#C5C5C5",
              borderRadius: 7,
              width: 350,
              borderWidth: 1,
              marginTop: 20,
              height: 40,
              justifyContent: "center",
            }}
          >
            <Picker mode="dropdown" selectedValue={kelurahan} onValueChange={setKelurahan}>
              <Picker.Item
                label='kelurahan / desa'
                enabled={false}
                style={{ color: "#4a5568" }}

              />
              <Picker.Item label='sukoharjo' value={"sukoharjo"} />
              <Picker.Item label='sukaragam' value={"sukaragam"} />
              <Picker.Item label='balaraja' value={"balaraja"} />
            </Picker>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => Alert.alert('succes register',navigation.navigate('Pilih Outlet'))}>
            <View
              style={{
                backgroundColor: "#F99722",
                width: 350,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{color:'white',fontFamily:'PoppinsBold',fontSize:18}}>Daftar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
