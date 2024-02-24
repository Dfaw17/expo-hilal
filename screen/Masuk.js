import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Masuk({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 30, marginLeft: 30, width: 306 }}>
        <Text
          style={{ fontSize: 36, color: "#F99722", fontFamily: "PoppinsBold" }}
        >
          Ayo masuk.
        </Text>
        <Text
          style={{
            color: "#F99722",
            fontSize: 18,
            fontWeight: "300",
            marginTop: 10,
            fontFamily: "Poppins",
          }}
        >
          Dan mulai petualangan bisnismu bersama kami
        </Text>
      </View>

      <View
        style={{ marginTop: 80, alignItems: "center", flexDirection: "column" }}
      >
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
          <TextInput placeholder="username" style={{ fontFamily: "Poppins" }} />
        </View>

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
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={{ fontFamily: "Poppins" }}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            backgroundColor: "#C5C5C5",
            width: 100,
            height: 1,
            marginTop: 20,
            alignItems: "center",
            marginLeft: 30,
          }}
        ></View>
        <Text
          style={{
            textAlign: "center",
            top: 10,
            left: 15,
            fontSize: 11,
            color: "#C5C5C5",
            fontFamily: "Poppins",
          }}
        >
          Atau masuk dengan
        </Text>
        <View
          style={{
            backgroundColor: "#C5C5C5",
            width: 100,
            height: 1,
            marginTop: 20,
            alignItems: "center",
            marginLeft: 30,
          }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Masuk dengan WA")}
        >
          <Image source={require("../assets/whatsapp.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Masuk dengan email")}
        >
          <Image source={require("../assets/googlelogo.png")} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 200,
        }}
      >
        <Text style={{ fontFamily: "Poppins" }}>
          Belum punya akun?{" "}
          <Text
            onPress={() => navigation.navigate("Daftar")}
            style={{ color: "#F99722" }}
          >
            Daftar
          </Text>
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Root', { screen: 'Beranda' })}>
          <View
            style={{
              width: 355,
              height: 50,
              backgroundColor: "#F99722",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              borderRadius: 15,
            }}
          >
            <Text
              style={{ color: "white", fontSize: 18, fontFamily: "Poppins" }}
            >
              Masuk
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
