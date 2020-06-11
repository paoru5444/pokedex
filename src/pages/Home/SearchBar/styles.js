import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
