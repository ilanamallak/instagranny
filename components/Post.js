import React, { useState } from 'react'
import { Image, Text, TextInput, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Header = ({name, profilePic}) => <View style={styles.header}>
    <Image style={styles.headerImg} source={profilePic} />
    <Text style={styles.headerText}>{name}</Text>
</View>

const Like = () => {
    const [liked, setLiked] = useState(false)

    return <View style={styles.like}>
        <TouchableWithoutFeedback style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => setLiked(current => !current)}>
            <Ionicons
                name="md-heart"
                size={30}
                style={{ marginRight: 17, width: 30 }}
                color={liked ? '#E53045' : '#ccc'}
            />
            <Text style={{color: liked ? '#E53045' : '#010101'}}>
                Amei essa foto!
            </Text>
        </TouchableWithoutFeedback>
    </View>
}

const Comments = () => <View style={styles.comments}>
    <Image style={styles.commentsImg} source={require('../assets/images/comment-pp.jpeg')} />
    <TextInput style={styles.commentsInput} placeholder="Adicionar um comentário" />
</View>

const Post = ({name, profilePic, pic}) => <View style={styles.container}>
    <Header name={name} profilePic={profilePic} />
    <Image style={styles.image} source={pic} />
    <Like />
    <Comments />
</View>

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        backgroundColor: '#fff',
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        marginTop: 12,
        paddingHorizontal: 20
    },
    headerImg: {
        width: 52,
        height: 52,
        borderRadius: 26,
        marginRight: 12
    },
    headerText: {
        fontWeight: '600',
        fontSize: 18
    },
    image: {
        marginTop: 12,
        height: 375,
        width: '100%'
    },
    like: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginTop: 12,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    comments: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#dfdfdf',
        height: 42
    },
    commentsImg: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 17
    },
    commentsInput: {
        flex: 1,
        fontSize: 16,
        height: 30,
    }
})

export default Post