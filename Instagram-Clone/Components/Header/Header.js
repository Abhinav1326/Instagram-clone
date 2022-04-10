import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import styles from './Styles';


const Header = () => {
    return (
        <View style={styles.header}>

            <View style={styles.logo2}>
                <Image style={styles.logo2img} source={require('../../assets/Gallery/logo.png')}></Image>
            </View>
            <View style={styles.msg}>
                <TouchableOpacity><Image style={styles.msgImg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/875/875068.png' }}></Image></TouchableOpacity>
                <TouchableOpacity><Image style={styles.msgImg} source={{ uri: 'https://static.thenounproject.com/png/3084968-200.png' }}></Image></TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
};


export default Header;
