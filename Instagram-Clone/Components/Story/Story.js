import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import styles from './Styles';
import Posts from '../Posts/Posts';
// import { Divider } from 'react-native-elements';
// import PostsData from '../../Data/PostsData';


const Story = () => {
    return (
        <ScrollView style={styles.stories} vertical showsVerticalScrollIndicator={false} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image style={styles.story} source={require('../../assets/Gallery/story1.jpg')} />
                <Image style={styles.story} source={{ uri: 'https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg' }} />
                <Image style={styles.story} source={{ uri: 'https://www.iwmbuzz.com/wp-content/uploads/2021/07/what-is-so-special-about-alexandra-daddarios-eyes-deets-inside-see-asap-2.jpg' }} />
                <Image style={styles.story} source={{ uri: 'https://media.allure.com/photos/5ab3c4ced3f2c006a5663e44/4:3/w_2000,h_1500,c_limit/elizabeth-olsen-calls-out-poor-photoshop-empire-cover.jpg' }} />
                <Image style={styles.story} source={{ uri: 'https://images.indianexpress.com/2021/06/tom-hiddleston-loki-1200-1.jpg' }} />
                <Image style={styles.story} source={{ uri: 'https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg' }} />
                <Image style={styles.story} source={{ uri: 'https://media.allure.com/photos/5ab3c4ced3f2c006a5663e44/4:3/w_2000,h_1500,c_limit/elizabeth-olsen-calls-out-poor-photoshop-empire-cover.jpg' }} />
                <Image style={styles.story} source={require('../../assets/Gallery/story1.jpg')} />
            </ScrollView>

            {/* <View style={styles.textCont}> */}
            <Text style={styles.text}>Story</Text>
            {/* </View> */}
            {/* <Divider orientation="horizontal" />; */}

            <ScrollView>
                {PostsData.map((posts, index) => {
                })}
            </ScrollView>

            <Posts />

        </ScrollView>
    );
};


export default Story;

