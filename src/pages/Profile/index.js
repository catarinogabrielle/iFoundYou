import React, { useContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import PostsList from '../../components/PostsList';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';

import {
    Container,
    Content,
    UpLoadButton,
    UpLoadText,
    Avatar,
    Name,
    Email,
    ListPosts,
    Config,
    ModalContainerConfig,
    ButtonConfig,
    ButtonTextConfig,
    ModalContainer,
    ButtonBack,
    Input,
    Button,
    ButtonText
} from './styles';
import { ActivityIndicator, View, Modal } from 'react-native';

export default function Profile() {
    const { singOut, user } = useContext(AuthContext);

    const [nome, setNome] = useState(user?.nome);
    const [email, setEmail] = useState(user?.email);
    const [url, setUrl] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openConfig, setOpenConfig] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {

        const subscriber = firestore().collection('posts')
            .where('userId', '==', user.uid)
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                const postList = [];

                snapshot.forEach(doc => {
                    postList.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });

                setPosts(postList);
                setLoading(false);

            })

        return () => subscriber();

    }, []);

    return (
        <Container>
            <Content>

                <Config onPress={() => setOpenConfig(true)}>
                    <Feather
                        name="settings"
                        color="#7504b6"
                        size={21}
                    />
                </Config>

                {
                    url ?
                        (
                            <UpLoadButton onPress={() => alert('aqui')}>
                                <UpLoadText>+</UpLoadText>
                                <Avatar
                                    source={{ uri: url }}
                                />
                            </UpLoadButton>
                        ) : (
                            <UpLoadButton onPress={() => alert('aqui')}>
                                <UpLoadText>+</UpLoadText>
                            </UpLoadButton>
                        )
                }

                <Name numberOfLines={1}>{user.nome}</Name>
                <Email numberOfLines={1}>{user.email}</Email>

            </Content>

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

            <Modal visible={openConfig} animationType="fade" transparent={true}>
                <ModalContainerConfig>
                    <ButtonConfig onPress={() => setOpenConfig(false)}>
                        <Feather
                            name="arrow-left"
                            size={22}
                            color="#FFF"
                        />
                        <ButtonTextConfig>Voltar</ButtonTextConfig>
                    </ButtonConfig>
                    <ButtonConfig onPress={() => { setOpen(true); setOpenConfig(false) }}>
                        <Feather
                            name="edit"
                            size={22}
                            color="#FFF"
                        />
                        <ButtonTextConfig>Aterar</ButtonTextConfig>
                    </ButtonConfig>
                    <ButtonConfig onPress={() => singOut()}>
                        <Feather
                            name="log-out"
                            size={22}
                            color="#FFF"
                        />
                        <ButtonTextConfig>Sair</ButtonTextConfig>
                    </ButtonConfig>
                </ModalContainerConfig>
            </Modal>

            <Modal visible={open} animationType="slide" transparent={true}>
                <ModalContainer>
                    <ButtonBack onPress={() => setOpen(false)}>
                        <Feather
                            name="x"
                            size={25}
                            color="#FFF"
                        />
                    </ButtonBack>

                    <Input
                        placeholder={user?.nome}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                    <Input
                        placeholder={user?.email}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <Button>
                        <ButtonText>Atualizar</ButtonText>
                    </Button>
                </ModalContainer>
            </Modal>

        </Container>
    );
}