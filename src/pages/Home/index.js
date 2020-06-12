import React, { useEffect, useState } from 'react';

import { ActivityIndicator, View } from 'react-native'

import {
  Container,
  Header,
  HeaderIcon,
  TitleSection,
  Title,
  SubTitle,
  CatchSection,
  CatchText,
} from './styles';

import PokemonList from './PokemonList'
import SearchBar from './SearchBar'

const Home = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  const [catchingPokemons, setCatchingPokemons] = useState(false)
  const [searching, setSearching] = useState(false)

  const [searchResult, setSearchResult] = useState(false)

  async function getPokemon(value = 0) {
    setCatchingPokemons(true)

    if (catchingPokemons) return

    try {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + value)
        .then(response => response.json())
        .then(data => {
          let results = data.results;
          let promisesArray = results.map(result => {
            return fetch(result.url).then(response => response.json());
          })
          return Promise.all(promisesArray);
        }).then((data) => {
          setPokemons([...pokemons, ...data])
          setCatchingPokemons(false)
        })
    } catch (error) {
      console.log(error)
      setCatchingPokemons(false)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  function offSetHandler() {
    if (catchingPokemons) return

    setOffset(offset + 20)
    getPokemon(offset + 20)
  }

  return (
    <Container
      source={require("../../assets/Pokeball.png")}
      imageStyle={{ width: 400, height: 300 }}
    >
      <Header>
        <HeaderIcon source={require('../../assets/generation.png')} />
        <HeaderIcon source={require('../../assets/sort.png')} />
        <HeaderIcon source={require('../../assets/filter.png')} />
      </Header>

      <TitleSection>
        <Title>Pokédex</Title>
        <SubTitle>
          Search for Pokémon by name or using the National Pokedéx number{'\n'}
          ex: blastoise or 6
        </SubTitle>
      </TitleSection>

      <SearchBar
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        navigation={props.navigation}
      />

      {!searchResult && (
        <>
          {pokemons.length > 0 ? (
            <PokemonList
              pokemons={pokemons}
              navigation={props.navigation}
              offSetHandler={offSetHandler}
            />
          ) : (
              <CatchSection>
                <ActivityIndicator color="#bdbd" size={60} />
                <CatchText>
                  Catching Pokemons
                </CatchText>
              </CatchSection>
            )}
        </>
      )}
    </Container>
  );
}

export default Home;