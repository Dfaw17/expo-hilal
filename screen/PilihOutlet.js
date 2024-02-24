import { View, Text, Image , TouchableOpacity } from "react-native";
import { useMemo, useState } from "react";
import RadioButtonsGroup, { RadioButton } from "react-native-radio-buttons-group";
export default function PilihOutlet({navigation}) {

const useValue = useMemo(() => ([
  {label:'Rumah Violet 1',id:'1',value:'Rumah Violet 1'},
]))
const useValue2 = useMemo(() => ([
  {label:'Rumah Violet 2',id:'2',value:'Rumah Violet 2'},
]))
const [isChecked, setChecked] = useState()
  return (
    <View style={{ justifyContent: "space-between", flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
          height: 350,
          marginHorizontal: 50,
          borderRadius: 30,
        }}
      >
        <Image source={require("../assets/hehei.png")} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 260,
          flexDirection: "column",
        }}
      >
        <View 
          style={{
            borderWidth: 1,
            borderColor: "#C5C5C5",
            width: 350,
            height: 50,
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 25,
            alignItems:'flex-start'
          }}
        >
          <RadioButtonsGroup onPress={setChecked} radioButtons={useValue} selectedId={isChecked} labelStyle={{fontFamily:'Poppins'}}/>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C5C5C5",
            width: 350,
            height: 50,
            justifyContent:'center',
            borderRadius: 10,
            marginTop: 25,
            alignItems:'flex-start',
          }}
        >
        <RadioButtonsGroup onPress={setChecked} radioButtons={useValue2} selectedId={isChecked} labelStyle={{fontFamily:'Poppins'}}/>

        </View>
     
      <TouchableOpacity onPress={() => navigation.navigate('LoadingBar')}>
            <View
              style={{
                backgroundColor: "#F99722",
                width: 350,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop:100
              }}
            >
              <Text style={{color:'white',fontFamily:'Poppins',fontSize:18}}>Pilih Toko</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}

