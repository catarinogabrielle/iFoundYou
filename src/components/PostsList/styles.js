import styled from 'styled-components/native';

export const Container = styled.View`
margin: 8px 2%;
background-color: #FFF;
padding: 11px;
border-radius: 8px;
box-shadow: 1px 1px 3px rgba(18, 18, 18, 0.3);
elevation: 3;
`;

export const Header = styled.TouchableOpacity`
width: 100%;
flex-direction: row;
align-items: center;
margin-bottom: 5px;
`;

export const Avatar = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
margin-right: 6px;
`;

export const Name = styled.Text`
color: #353840;
font-size: 17px;
font-weight: bold;
`;

export const ContentView = styled.View`
padding: 6px 5px;
`;

export const Content = styled.Text`
color: #353840;
font-size: 14.3px;
`;

export const Actions = styled.View`
flex-direction: row;
align-items: baseline;
justify-content: space-between;
`;

export const LikeButton = styled.TouchableOpacity`
width: 53px;
margin-top: 12px;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;

export const Like = styled.Text`
color: #6824fb;
margin-left: 6px;
font-size: 16px;
`;

export const TimePost = styled.Text`
margin-right: 6px;
font-size: 14px;
`;