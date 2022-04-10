import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    post: {
        marginTop: '1%',
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,

    },

    leftbody: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    userlogo: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#ff8501',
    },

    leftBodyText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 10
    },

    leftBody: {

    },

    rightbody: {
        height: 25,
        width: 25,
        resizeMode: "contain",
    },

    postcont: {
        marginBottom: 50,
    },

    postImageCont: {
        height: 450,
        width: '100%',

    },

    postImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },

    bottomBar: {
        paddingHorizontal: 10,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    bbLeft: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },

    bbLeftimg: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        margin: 10,
        marginHorizontal: 6,
    },
    bbLeftimg3: {
        height: 25,
        width: 25,
        resizeMode: "contain",
        marginHorizontal: 7,
    },


    bbRight: {
        height: 25,
        width: 25,
        resizeMode: "contain",
    },
});

export default styles;