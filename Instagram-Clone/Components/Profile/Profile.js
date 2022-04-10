import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StatusBar, Button, FlatList } from 'react-native';
import styles from './styles';
import { Divider } from 'react-native-elements';



const Profile = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.logo2Cont}>
                    <Text style={styles.logo2} >Alexa</Text>
                </View>
                <View style={styles.msg}>
                    <TouchableOpacity><Image style={styles.msgImg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/875/875068.png' }}></Image></TouchableOpacity>
                    <TouchableOpacity><Image style={styles.msgImg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }}></Image></TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </View>



            <View style={styles.profileCont} >
                {/* <Divider width={2} orientation='vertical' /> */}
                <View style={styles.profileImgCont}>
                    <Image style={styles.profileImg} source={{ uri: 'https://www.eaglesvine.com/wp-content/uploads/2021/07/Alexa-Grace_01.jpg' }}></Image>
                </View>

                <View style={styles.followersCont}>
                    <View style={styles.followersContMain}>
                        <View style={styles.followersView}>
                            <Text style={styles.followersViewNumber}>30</Text>
                            <Text style={styles.followersViewText}>Posts</Text>
                        </View>
                        <View style={styles.followersView}>
                            <Text style={styles.followersViewNumber}>153</Text>
                            <Text style={styles.followersViewText}>Followers</Text>
                        </View>
                        <View style={styles.followersView}>
                            <Text style={styles.followersViewNumber}>48</Text>
                            <Text style={styles.followersViewText}>Following</Text>
                        </View>
                    </View>

                    <View style={styles.buttonCont}>
                        <TouchableOpacity><Text style={styles.button}>Edit Profile</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.bioContainer}>
                <Text style={styles.UserBio}>Alexa</Text>
                <Text>Putting my best Foot 🚶‍♀️ forward - In heels 👠 Everyday -
                    this are my random musings as an Actress 👩‍💼.
                </Text>
            </View>

            <View style={styles.postsCont}>
                <View style={styles.postsIconCont}>
                    {/* <Image style={styles.postsIcon} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/971/premium/971501.png?token=exp=1634417361~hmac=5fa4ad0ce3279b51d43f16a988c826d6' }}></Image> */}
                    <Text style={styles.postsIcon}>Your Posts</Text>
                </View>
                {/* <Divider style={styles.divider} width={2} orientation='vertical' /> */}

                <View style={styles.postsImageCont} vertical showsVerticalScrollIndicator={false}>
                    <Image style={styles.postsImage2} source={{ uri: 'https://www.eaglesvine.com/wp-content/uploads/2021/07/Alexa-Grace_01.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/594/98/442/alexa-grace-model-women-smiling-wallpaper-preview.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://pbs.twimg.com/profile_images/1005169763994210305/nfdxocHZ.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://i.ytimg.com/vi/E32wCHkqRI0/maxresdefault.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/561/630/325/alexa-grace-women-pornstar-model-blonde-hd-wallpaper-preview.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://asklovecute.com/wp-content/uploads/2021/07/alexa-grace.jpeg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://p4.wallpaperbetter.com/wallpaper/130/606/478/alexa-grace-women-pornstar-blonde-green-eyes-hd-wallpaper-preview.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://www.eaglesvine.com/wp-content/uploads/2021/07/Alexa-Grace_04.jpg' }}></Image>
                    <Image style={styles.postsImage2} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/158/315/681/alexa-grace-model-women-looking-at-viewer-wallpaper-preview.jpg' }}></Image>
                </View>

            </View>

        </View>
    );
};


export default Profile;

