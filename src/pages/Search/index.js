import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import SearchList from '../../components/SearchList';

import { AreaInput, Input, List } from './styles';

export default function Search() {
    const [input, setInput] = useState('');
    const [users, setUsers] = useState([]);

    const color = ['#7504b6', '#6824fb', '#2629b4'];

    useEffect(() => {
        if (input === '' || input === undefined) {
            setUsers([]);
            return;
        }

        const subscriber = firestore().collection('users')
            .where('nome', '>=', input)
            .where('nome', '<=', input + "\uf8ff")
            .onSnapshot(snapshot => {
                const listUsers = [];

                snapshot.forEach(doc => {
                    listUsers.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });

                setUsers(listUsers);

            })

        return () => subscriber();

    }, [input]);

    return (
        <LinearGradient style={styles.Container} colors={color}>

            <AreaInput>
                <Feather
                    name="search"
                    color="#7504b6"
                    size={20}
                />
                <Input
                    placeholderTextColor="#6E6E6E"
                    placeholder="Procurando Alguem?"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
            </AreaInput>

            <List
                showsVerticalScrollIndicator={false}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SearchList data={item} />}
            />

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    Container: {
        paddingTop: 15,
        flex: 1,
    }
})