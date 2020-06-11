import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const Card = styled(RectButton)`
  border-radius: 10px;
  width: 90%;
  height: 145px;
  align-self: center;
  background-color: #bdbd;
  margin-top: 30px
  padding-left: 5%;
  padding-top: 5%;
`;

export const PokeId = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: rgba(23, 23, 27, 0.6);
`;

export const PokeName = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF;
  text-transform: capitalize;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const PokeImage = styled.Image`
  position: absolute;
  width: 130px;
  height: 130px;
  right: 20px;
  top: -20px;
`

export const PokeType = styled.View`
  width: 75px;
  height: 30px;
  background: #9DA0AA;
  border-radius: 3px;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const PokeTypeIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin: 5px;
`;

export const PokeTypeText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #FFFFFF;
  margin: 5px 0px;
  text-transform: capitalize;
`;

export const BallBackground = styled.Image`
  position: absolute;
  width: 145px;
  height: 145px;
  right: 0;
`;

export const DotsBackground = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  right: 50%;
  top: 5%;
`;
