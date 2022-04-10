import React from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from '../Components/Profile/Profile';
import Footer from '../Components/Footer/Footer';

const ProfileScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Profile styles={styles.profileContainer} />
            <Footer styles={styles.container} />
        </View>
    );
};


export default ProfileScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
    },
    profileContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },

    mainContainer: {
        height: '100%'
    }

});