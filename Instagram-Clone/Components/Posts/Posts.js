import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Divider } from 'react-native-elements';
// import Users from '../../Data/PostsData';



// const Posts = ({ posts }) => {
//     return (
//         <View>
//             <PostsCont post={posts} />
//         </View>
//     )
// };


const Posts = ({ }) => {
    return (
        <ScrollView style={styles.posts} vertical showsVerticalScrollIndicator={false}>
            <View style={styles.postcont}>

                <Divider width={2} orientation='vertical' />
                <View style={styles.post}>
                    <View style={styles.leftbody}>

                        <Image style={styles.userlogo} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/594/98/442/alexa-grace-model-women-smiling-wallpaper-preview.jpg' }}></Image>

                        <Text style={styles.leftBodyText}>Alexa</Text>
                    </View>
                    <TouchableOpacity><Image style={styles.rightbody} source={require('../../assets/Gallery/icon_dot.png')}></Image></TouchableOpacity>
                </View>
                <View style={styles.postImageCont}>
                    <Image style={styles.postImage} source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/594/98/442/alexa-grace-model-women-smiling-wallpaper-preview.jpg' }}></Image>

                    <View style={styles.bottomBar}>

                        <View style={styles.bbLeft}>
                            <TouchableOpacity>
                                <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity><Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1634034745~hmac=b3d3458c71b6f2011b0129002edfd3b1' }}></Image></TouchableOpacity>
                            <TouchableOpacity><Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png' }}></Image></TouchableOpacity>
                        </View>
                        <TouchableOpacity><Image style={styles.bbRight} source={{ uri: 'https://www.freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png' }} /></TouchableOpacity>
                    </View>
                </View>
                {/* <Divider orientation='horizontal' width={2} />; */}
            </View>

            <View style={styles.postcont}>

                {/* <Divider width={1} orientation='vertical' /> */}
                <View style={styles.post}>
                    <View style={styles.leftbody}>
                        <Image style={styles.userlogo} source={{ uri: 'https://i.pinimg.com/736x/db/38/29/db382916e20ffe546ff6e5ae6a1b0de0.jpg' }}></Image>
                        <Text style={styles.leftBodyText}>Tony</Text>
                    </View>
                    <Image style={styles.rightbody} source={require('../../assets/Gallery/icon_dot.png')}></Image>
                </View>
                <View style={styles.postImageCont}>
                    <Image style={styles.postImage} source={{ uri: 'https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg' }}></Image>

                    <View style={styles.bottomBar}>

                        <View style={styles.bbLeft}>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1634034745~hmac=b3d3458c71b6f2011b0129002edfd3b1' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png' }}></Image>
                        </View>
                        <Image style={styles.bbRight} source={{ uri: 'https://www.freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png' }} />
                    </View>
                </View>
            </View>

            <View style={styles.postcont}>
                <View style={styles.post}>
                    <View style={styles.leftbody}>
                        <Image style={styles.userlogo} source={{ uri: 'https://www.eaglesvine.com/wp-content/uploads/2021/07/Alexa-Grace_01.jpg' }}></Image>
                        <Text style={styles.leftBodyText}>Alexa</Text>
                    </View>
                    <Image style={styles.rightbody} source={require('../../assets/Gallery/icon_dot.png')}></Image>
                </View>
                <View style={styles.postImageCont}>
                    <Image style={styles.postImage} source={{ uri: 'https://pbs.twimg.com/profile_images/1005169763994210305/nfdxocHZ.jpg' }}></Image>

                    <View style={styles.bottomBar}>

                        <View style={styles.bbLeft}>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1634034745~hmac=b3d3458c71b6f2011b0129002edfd3b1' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png' }}></Image>
                        </View>
                        <Image style={styles.bbRight} source={{ uri: 'https://www.freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png' }} />
                    </View>
                </View>
            </View>

            <View style={styles.postcont}>
                <View style={styles.post}>
                    <View style={styles.leftbody}>
                        <Image style={styles.userlogo} source={require('../../assets/Gallery/story1.jpg')}></Image>
                        <Text style={styles.leftBodyText}>Alexa</Text>
                    </View>
                    <Image style={styles.rightbody} source={require('../../assets/Gallery/icon_dot.png')}></Image>
                </View>
                <View style={styles.postImageCont}>
                    <Image style={styles.postImage} source={{ uri: 'https://asklovecute.com/wp-content/uploads/2021/07/alexa-grace.jpeg' }}></Image>

                    <View style={styles.bottomBar}>

                        <View style={styles.bbLeft}>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1634034745~hmac=b3d3458c71b6f2011b0129002edfd3b1' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png' }}></Image>
                        </View>
                        <Image style={styles.bbRight} source={{ uri: 'https://www.freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png' }} />
                    </View>
                </View>
            </View>

            <View style={styles.postcont}>
                <View style={styles.post}>
                    <View style={styles.leftbody}>
                        <Image style={styles.userlogo} source={require('../../assets/Gallery/story1.jpg')}></Image>
                        <Text style={styles.leftBodyText}>Alexa</Text>
                    </View>
                    <Image style={styles.rightbody} source={require('../../assets/Gallery/icon_dot.png')}></Image>
                </View>
                <View style={styles.postImageCont}>
                    <Image style={styles.postImage} source={{ uri: 'https://p4.wallpaperbetter.com/wallpaper/130/606/478/alexa-grace-women-pornstar-blonde-green-eyes-hd-wallpaper-preview.jpg' }}></Image>

                    <View style={styles.bottomBar}>

                        <View style={styles.bbLeft}>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1634034745~hmac=b3d3458c71b6f2011b0129002edfd3b1' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png' }}></Image>
                        </View>
                        <Image style={styles.bbRight} source={{ uri: 'https://www.freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png' }} />
                    </View>
                </View>
            </View>

            <View style={styles.postcont}>
                <View style={styles.post}>
                    <View style={styles.leftbody}>
                        <Image style={styles.userlogo} source={require('../../assets/Gallery/story1.jpg')}></Image>
                        <Text style={styles.leftBodyText}>Alexa</Text>
                    </View>
                    <Image style={styles.rightbody} source={require('../../assets/Gallery/icon_dot.png')}></Image>
                </View>
                <View style={styles.postImageCont}>
                    <Image style={styles.postImage} source={{ uri: 'https://www.eaglesvine.com/wp-content/uploads/2021/07/Alexa-Grace_04.jpg' }}></Image>

                    <View style={styles.bottomBar}>

                        <View style={styles.bbLeft}>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2958/premium/2958783.png?token=exp=1634034745~hmac=b3d3458c71b6f2011b0129002edfd3b1' }}></Image>
                            <Image style={styles.bbLeftimg} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png' }}></Image>
                        </View>
                        <Image style={styles.bbRight} source={{ uri: 'https://www.freepngimg.com/download/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png' }} />
                    </View>
                </View>
            </View>


        </ScrollView>

    );
};


export default Posts;
