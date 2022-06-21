import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;

export const Content = styled.View`
align-items: center;
background-color: #FFF;
`;

export const UpLoadButton = styled.TouchableOpacity`
margin-top: 9%;
background-color: #F1F1F1;
width: 155px;
height: 155px;
border-radius: 90px;
justify-content: center;
align-items: center;
z-index: 5;
`;

export const Config = styled.TouchableOpacity`
position: absolute;
top: 5%;
right: 6%;
`;

export const UpLoadText = styled.Text`
z-index: 9;
position: absolute;
font-size: 55px;
color: #7504b6;
opacity: 0.3;
`;

export const Avatar = styled.Image`
width: 150px;
height: 150px;
border-radius: 80px;
opacity: 0.9;
`;

export const Name = styled.Text`
margin-top: 15px;
margin-right: 20px;
margin-left: 20px;
font-size: 28px;
color: #000;
font-weight: bold;
opacity: 0.8;
`;

export const Email = styled.Text`
margin-top: 4px;
margin-right: 20px;
margin-left: 20px;
font-size: 16px;
color: #000;
font-weight: bold;
opacity: 0.5;
`;

export const ListPosts = styled.FlatList`
flex:1;
margin-top: 19px;
background-color: #F1F1F1;
border-top-right-radius: 8px;
border-top-left-radius: 8px;
`;

export const ModalContainerConfig = styled.View`
width: 30%;
height: 20%;
background-color: #7504b6;
justify-content: center;
align-items: center;
top: 1.8%;
right: 5%;
position: absolute;
border-radius: 8px;
`;

export const ButtonConfig = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-evenly;
width: 80%;
align-items: center;
padding: 9px;
`;

export const ButtonTextConfig = styled.Text`
color: #FFF;
font-weight: bold;
font-size: 13px;
`;

export const ModalContainer = styled.View`
width: 100%;
height: 60%;
background-color: #7504b6;
padding-top: 20%;
align-items: center;
position: absolute;
bottom: 0;
`;

export const ButtonBack = styled.TouchableOpacity`
position: absolute;
top: 18px;
left: 15px;
`;

export const Input = styled.TextInput`
width: 80%;
padding: 5px;
margin-top: 30px;
font-size: 17px;
border-bottom-color: #FFF;
border-bottom-width: 1px;
`;

export const Button = styled.TouchableOpacity`
width: 80%;
background-color: #F1F1F1;
margin-top: 40px;
padding: 10px;
border-radius: 10px;
justify-content: center;
align-items: center;
`;

export const ButtonText = styled.Text`
color: #7504b6;
font-size: 20px;
`;