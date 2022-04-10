import React, { useState } from 'react';
// import { Component } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import styles from './styles';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';



const Footer = () => {


    return (



        <View style={styles.footer}>

            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png' }} style={styles.image}></Image>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png' }} style={styles.image}></Image>
            <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2859/premium/2859706.png?token=exp=1634036496~hmac=7abc8d9d0f2425470dde4a9fd7086024' }} style={styles.image}></Image>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }} style={styles.image}></Image>
            <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1634037403~hmac=d871c7ff04bf86319e7e5303379db009' }} style={styles.image}></Image>
        </View>

    )
};


export default Footer;
