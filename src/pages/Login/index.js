import React, { useState, useEffect, useContext } from 'react';
import { Animated, StyleSheet, Keyboard, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { AuthContext } from '../../contexts/auth'

import {
    InputEmail,
    Input,
    Button,
    ButtonText,
    ForgotPassword,
    ForgotPasswordText,
    SignUpButton,
    SignUpText,
    LoginButton,
    LoginText
} from './styles';

export default function Login() {
    const { signUp, signIn, loadingAuth } = useContext(AuthContext);

    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 170, y: 145 }));
    const [logoBottom] = useState(new Animated.Value(60));

    const color = ['#7504b6', '#6824fb', '#2629b4'];

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 17,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();

    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: 90,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(logoBottom, {
                toValue: 12,
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 170,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: 145,
                duration: 100,
                useNativeDriver: false,
            }),
            Animated.timing(logoBottom, {
                toValue: 60,
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();
    }

    function toggleLogin() {
        setLogin(!login);
        setName('');
        setEmail('');
        setPassword('');
    }

    function handleLogin() {
        if (email === '' || password === '') {
            console.log('Preencha todos os campos!');
            return;
        }

        //Logar usuario!
        signIn(email, password);

    }

    function handleForgotPassword() {
        alert('Recuperar senha!');
    }

    function handleSignUp() {
        if (name === '' || email === '' || password === '') {
            console.log('Preencha todos os campos!');
            return;
        }

        //Cadastrando usuario!
        signUp(email, password, name);

    }

    if (login) {
        return (
            <LinearGradient style={styles.Container} colors={color}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height: logo.y,
                        bottom: logoBottom,
                    }}
                    source={require('../../assets/coracao.png')}
                />

                <Animated.View
                    style={[
                        styles.AnimatedView,
                        {
                            opacity: opacity,
                            transform: [
                                { translateY: offset.y }
                            ]
                        }
                    ]}
                >

                    <InputEmail
                        placeholder="email@email.com"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder="******"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <Button onPress={handleLogin}>
                        {
                            loadingAuth ? (
                                <ActivityIndicator size={20} color="#2629b4" />
                            ) : (
                                <ButtonText >Acessar</ButtonText>
                            )
                        }
                    </Button>

                    <ForgotPassword onPress={() => handleForgotPassword()}>
                        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                    </ForgotPassword>

                    <SignUpButton onPress={() => toggleLogin()}>
                        <SignUpText>CRIAR CONTA</SignUpText>
                    </SignUpButton>

                </Animated.View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient style={styles.Container} colors={color}>
            <Animated.Image
                style={{
                    width: logo.x,
                    height: logo.y,
                    bottom: logoBottom,
                }}
                source={require('../../assets/coracao.png')}
            />

            <InputEmail
                placeholderTextColor="#fff"
                placeholder="email@email.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                placeholderTextColor="#fff"
                placeholder="Nome"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Input
                placeholderTextColor="#fff"
                placeholder="******"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <Button onPress={handleSignUp}>
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#2629b4" />
                    ) : (
                        <ButtonText>Cadastrar</ButtonText>
                    )
                }
            </Button>

            <LoginButton onPress={() => toggleLogin()}>
                <LoginText>Ja possuo uma conta</LoginText>
            </LoginButton>
        </LinearGradient>
    );
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    AnimatedView: {
        width: '100%',
        alignItems: 'center',
    }
})