import React from 'react';
import { View } from 'react-native';
import Header from '../Components/Header/Header';
import Story from '../Components/Story/Story';
import Footer from '../Components/Footer/Footer';

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <Story />
            <Footer />
        </View>
    );
};


export default HomeScreen;
