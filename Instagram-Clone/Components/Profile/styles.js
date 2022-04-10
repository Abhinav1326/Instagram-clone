import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        // height: '100%',
        marginTop: 40,
        display: "flex",
        alignItems: "center"
    },

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

    logo2Cont: {
        display: "flex",
        alignItems: "center"
    },

    logo2: {
        fontSize: 20,
        fontWeight: '600',
        top: 0
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
    profileCont: {
        width: '100%',
        position: "absolute",
        top: 42,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        justifyContent: "space-between",
    },

    profileImgCont: {
        marginTop: 25,
        // borderRadius: 50,
    },

    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: "contain",
    },

    followersCont: {
        display: "flex",
        alignItems: "center",
    },

    followersContMain: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    followersView: {
        display: "flex",
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    followersViewNumber: {
        fontSize: 20,
        fontWeight: '700',
    },

    followersViewText: {
        color: '#d3d3d3',
    },

    buttonCont: {
        marginTop: 10,
    },

    button: {
        color: '#000',
        // backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#d3d3d3',
        paddingVertical: 5,
        paddingHorizontal: 60,
        borderRadius: 3,
        textAlign: "center",
        fontWeight: "bold",
    },

    bioContainer: {
        // position: "absolute",
        top: 185,
        width: '100%',
        paddingHorizontal: 15
    },

    UserBio: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    postsCont: {
        position: "absolute",
        top: 275
    },

    postsIconCont: {
        display: "flex",
        alignItems: "center",
    },
    postsIcon: {
        marginHorizontal: 3,
        fontSize: 17,
        marginBottom: 1,
    },


    postsImageCont: {
        height: '100%',
        width: '100%',
        display: "flex",
        // justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 20,

    },

    postsImage2: {
        height: 112,
        width: 112,
        resizeMode: "cover",
        margin: 2
    }

});

export default styles;