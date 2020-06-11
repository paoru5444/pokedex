import React from 'react';

import { FlatList, View, ActivityIndicator } from 'react-native';

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

const PokemonList = ({ pokemons, navigation, offSetHandler }) => {

  function goTo(value) {
    navigation.navigate('Details', { pokemon: value })
  }

  function renderFooter() {
    return (
      <View>
        <ActivityIndicator size={50} color="#bdbd" />
      </View>
    )
  }

  return (
    <FlatList
      data={pokemons}
      style={{ marginTop: 10 }}
      onEndReachedThreshold={0.3}
      onEndReached={() => offSetHandler()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderFooter}
      renderItem={({ item, index }) => (
        <Card key={Math.random() + index} onPress={() => goTo(item)}>

          <DotsBackground source={require('../../../assets/dots.png')} />
          <BallBackground source={require('../../../assets/Pokeball2.png')} />
          <PokeImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png` }} />

          <PokeId>
            {item.id < 100 ? `#0${item.id}` : `#${item.id}`}
          </PokeId>

          <PokeName>{item.name}</PokeName>

          <View style={{ flexDirection: 'row' }}>
            {item.types.map(type => (
              <PokeType>
                <PokeTypeIcon
                  source={require('../../../assets/types/bug.png')}
                />

                <PokeTypeText>
                  {type.type.name}
                </PokeTypeText>
              </PokeType>
            ))}
          </View>
        </Card>
      )}
    />
  )
}

export default PokemonList;