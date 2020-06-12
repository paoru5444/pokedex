import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 30px;
  margin-top: 10%;
`;

export const HeaderIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin: 20px;
`;

export const TitleSection = styled.View`
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #17171B;
  padding-left: 5%;
  padding-top: 5%;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #747476;
  line-height: 19px;
  padding-left: 5%;
  padding-top: 5%;
`;

export const CatchSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CatchText = styled.Text`
`;