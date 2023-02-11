import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface fab {
    title: string
    position?: 'bl'|'br'
    action:()=>void
}

export const Fab = ({action, title, position='br'}:fab) => {
  return (
    <View style={[styles.container, (position==='br')?styles.fabPositionBR : styles.fabPositionBL]}>
        <TouchableOpacity onPress={action}>
            <Text style={styles.number}>{title}</Text>
        </TouchableOpacity>
    </View>  
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        borderRadius:100,
        padding:12,
        width:100,
        height:100,
        justifyContent:'center'        
    },
    fabPositionBR:{
        position:'absolute',
        bottom:20,
        right:20,
        
    },
    fabPositionBL:{
        position:'absolute',
        bottom:20,
        left:20,
        
    },

    number:{
        alignSelf:'center',
        color:'white',
        fontSize:50,
        fontWeight:'bold'
    },

})

