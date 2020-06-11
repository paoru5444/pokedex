import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather'

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: #8BBE8A;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row;
  padding-right: 30px;
  margin-top: 10%;
`;

export const HeaderIcon = styled(Feather)`
  width: 25px;
  height: 25px;
  margin: 20px;
`;

export const DetailTitle = styled.Text`
  position: absolute;
  width: 585px;
  height: 119px;
  left: -86px;
  top: 5%;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 119px;
  text-align: center;
  text-transform: uppercase;
  color: #eee;
  z-index: -1;
`;

export const PokeImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const PokeId = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
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

export const BottomBackground = styled.View`
  position: absolute;
  width: 100%;
  height: 60%;
  bottom: 0;
  background: #FFFFFF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const PokeDescription = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #747476;
  width: 80%;
  align-self: center;
  margin-top: 10%;
`
export const PokedexData = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #62B957;
  width: 80%;
  align-self: center;
  margin-top: 5%;
`

export const PokedexItem = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #17171B;
`

export const PokedexText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  margin: 5px;
`

export const PokedexRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

