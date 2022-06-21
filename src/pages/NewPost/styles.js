import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #FFF;
`;

export const Input = styled.TextInput`
background-color: #FFF;
padding: 15px 13px;
font-size: 20px;
border-radius: 8px;
color: #000;
margin-top: 35px;
margin-right: 15px;
margin-left: 15px;
box-shadow: 1px 1px 3px rgba(18, 18, 18, 0.8);
elevation: 4;
`;

export const Button = styled.TouchableOpacity`
background-color: #7504b6;
margin-right: 14px;
border-radius: 5px;
padding: 7px 12px;
margin-top: 2px;
align-items: center;
justify-content: center;
`;

export const ButtonText = styled.Text`
color: #FFF;
font-size: 16px;
`;