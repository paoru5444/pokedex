import React, { useState } from 'react';

import {
  Bar,
  Input,
  Icon,
  SearchButton,
  ButtonText,
  BallImage,
  ButtonArea,
  NotFound,
} from './styles';

import api from '../../../services/api'

import PokeCard from '../../../components/PokeCard'

const SearchBar = ({ navigation, setSearchResult, searchResult }) => {

  const [searching, setSearching] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [pokemonNotFound, setPokemonNotFound] = useState(false)

  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState({})

  async function searchPokemon() {
    if (searching) return

    setSearching(true)

    await api.get('/pokemon/' + search).then(function (response) {
      setPokemon(response.data)
      setSearchResult(true)
      setSearching(false)
      setPokemonNotFound(false)
    })
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status == 404) {
          setPokemonNotFound(true)
          setSearchResult(true)
        }
        setSearching(false)
      });
  }

  function resetSearch() {
    setPokemonNotFound(false)
    setSearch('')
    setSearchResult(false)
    setPokemon({})
    setShowButton(false)
  }

  return (
    <>
      <Bar>
        <Icon name="search" size={20} color="#747476" />

        <Input
          placeholder="What pokemon are you looking for?"
          onKeyPress={() => setShowButton(true)}
          onChangeText={value => setSearch(value)}
          autoCapitalize="none"
        />
      </Bar>

      {showButton && search != '' && (
        <ButtonArea>
          <SearchButton
            onPress={searchPokemon}
          >
            <BallImage source={require('../../../assets/catch.png')} />

            <ButtonText>
              Catch Pokemon
          </ButtonText>
          </SearchButton>

          <SearchButton
            onPress={resetSearch}
          >
            <BallImage source={require('../../../assets/butterfree.png')} />

            <ButtonText>
              Abandon Pokemon
            </ButtonText>
          </SearchButton>
        </ButtonArea>
      )}

      {pokemon.hasOwnProperty("name") && !pokemonNotFound && (
        <PokeCard
          item={pokemon}
          index="0"
          navigation={navigation}
        />
      )}

      {pokemonNotFound && (
        <NotFound
          source={require('../../../assets/404.png')}
        />
      )}
    </>
  );
}

export default SearchBar;