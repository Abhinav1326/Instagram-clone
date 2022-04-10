import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        position: 'absolute',
        height: 40,
        width: '100%',
        flexDirection: 'row',
        top: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },

    logo2img: {
        height: 110,
        width: 110,
        resizeMode: 'contain',
    },

    msg: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },

    msgImg: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
        marginHorizontal: 3,
    },
});

export default styles;