import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import { Fab } from '../componentes/Fab';

export const ContadorScreen = () => {

  const [contador, setContador] = useState<number>(0)

  return (
    <View style={styles.container}>
        <Text style={styles.contador}>Contador {contador}</Text>
        <Fab title ='+1' action={()=> setContador(contador +1)}/>
        <Fab title ='-1' position ='bl' action={()=> setContador(contador -1)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 110,
      height: 110,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.32,
    elevation: 16,
  },
  contador:{
    textAlign:'center',
    fontSize: 80,
    top: -15
  }
})
