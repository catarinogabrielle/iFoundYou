import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../contexts/auth';

import { StyleSheet, View, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import PostsList from '../../components/PostsList';

import { Container, ButtonPost, ListPosts } from './styles';
import Header from '../../components/Header';

export default function Home() {

    const color = ['#7504b6', '#6824fb', '#2629b4'];

    const navigation = useNavigation();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {

        const subscriber = firestore()
            .collection('posts')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                const postList = [];

                snapshot.forEach(doc => {
                    postList.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });

                setPosts(postList);
                setLoading(false);

            })

        return () => subscriber();

    }, []);

    return (
        <Container>
            <Header />

            {
                loading ?
                    (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={50} color="#6824fb" />
                        </View>
                    ) : (
                        <ListPosts
                            showsVerticalScrollIndicator={false}
                            data={posts}
                            renderItem={({ item }) => <PostsList data={item} userId={user.uid} />}
                        />
                    )
            }

            <LinearGradient style={styles.ButtonPlus} colors={color}>
                <ButtonPost onPress={() => navigation.navigate('NewPost')} >
                    <Feather
                        name="plus"
                        color="#FFF"
                        size={25}
                    />
                </ButtonPost>
            </LinearGradient>

        </Container>
    );
}


const styles = StyleSheet.create({
    ButtonPlus: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '5%',
        right: '6%',
        borderRadius: 30
    }
})
