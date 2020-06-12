import React from 'react';
import { View } from 'react-native';

import {
  Card,
  PokeId,
  PokeName,
  PokeImage,
  PokeType,
  PokeTypeIcon,
  PokeTypeText,
  BallBackground,
  DotsBackground,
} from './styles'

import { background, color, images } from '../../utils/resources'

import { pokeIdParser } from '../../utils/pokeIdParser'

const PokeCard = ({ item, index, navigation }) => {
  
  function goTo(value) {
    navigation.navigate('Details', { pokemon: value })
  }

  return (
    <Card
      key={Math.random() + index}
      onPress={() => goTo(item)}
      style={{ backgroundColor: background[item?.types[0].type.name] }}
    >

      <DotsBackground source={require('../../assets/dots.png')} />
      <BallBackground source={require('../../assets/Pokeball3.png')} />
      <PokeImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png` }} />

      <PokeId>
        {pokeIdParser(item.id)}
      </PokeId>

      <PokeName>{item.name}</PokeName>

      <View style={{ flexDirection: 'row' }}>
        {item.types.map((type, i) => (
          <PokeType
            key={Math.random() + i}
            style={{ backgroundColor: color[type.type.name] }}
          >
            <PokeTypeIcon
              source={images[type.type.name]}
            />

            <PokeTypeText>
              {type.type.name}
            </PokeTypeText>
          </PokeType>
        ))}
      </View>
    </Card>
  )
}

export default PokeCard;