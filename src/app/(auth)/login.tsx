
import { Button, Logo } from '@components';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { rf, rh, rw } from 'src/utils/size';
const OUTLINE_WIDTH = rw(25)
const OUTLINE_RADIUS = OUTLINE_WIDTH/2

export default function login() {
  return (
    <View style={styles.container}>
        
        {/* header part */}
        <View style={styles.header}>
            <Logo size={rw(10)} />
            <Button text='bangla'type='outline'  bodyStyle={{width:OUTLINE_WIDTH, borderRadius:OUTLINE_RADIUS}}/>
        </View>

        {/* title part */}
        <View style={styles.titleBody}>
            <Text style={styles.title}>Welcome Back! Demo</Text>
            <Text style={styles.subTitle}>Login to your account</Text>
        </View>


     
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:rw(5),
        paddingVertical:rw(5),
        backgroundColor:colors.textLight0,
        rowGap: rh(2.5)
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    titleBody:{
        rowGap:2
    },
    title:{
        fontSize:rf(3),
        fontWeight:"900",
        color:colors.coolGray900

    },
    subTitle:{
        fontSize:rf(2.1),
        fontWeight:"400",
        color:colors.coolGray500
    }
});
