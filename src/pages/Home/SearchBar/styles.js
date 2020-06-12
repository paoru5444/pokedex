import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RectButton } from 'react-native-gesture-handler'

export const Bar = styled.View`
  width: 90%;
  height: 60px;
  background: #F2F2F2;
  border-radius: 10px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding-left: 5px;
`;

export const Icon = styled(FontAwesome)`
  margin: 10px
`;


export const Input = styled.TextInput`
  width: 90%;
  height: 60px;
  background: #F2F2F2;
`;

export const SearchButton = styled(RectButton)`
  width: 49%;
  height: 60px;
  background: #F2F2F2;
  margin-top: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;


export const ButtonText = styled.Text`
  font-size: 10px;
  color: #4f4f4f;
  font-weight: bold;
`;

export const BallImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const ButtonArea = styled.View`
  width: 90%;
  height: 60px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`;

export const NotFound = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
  resize-mode: contain;
  flex: 1;
`;



