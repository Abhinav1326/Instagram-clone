import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        bottom: 0,
        alignItems: 'center',
        padding: 10,
        paddingHorizontal: 5,
        justifyContent: "center"
    },

    image: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        marginHorizontal: 23,
    },

});

export default styles;