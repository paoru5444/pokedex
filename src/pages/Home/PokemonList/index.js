import React from 'react';

import { FlatList, View, ActivityIndicator } from 'react-native';

import PokeCard from '../../../components/PokeCard'

const PokemonList = ({ pokemons, navigation, offSetHandler }) => {

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
        <PokeCard
          item={item}
          index={index}
          navigation={navigation}
        />
      )}
    />
  )
}

export default PokemonList;