import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native'

import {
  Container,
  Header,
  HeaderIcon,
  TitleSection,
  Title,
  SubTitle,
} from './styles';

import PokemonList from './PokemonList'
import SearchBar from './SearchBar'

const Home = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  const [catchingPokemons, setCatchingPokemons] = useState(false)

  async function getPokemon(value = 0) {
    console.log(value)
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
          // data.map(o => {
          //   o.types.map(o => {
          //     // o.type["image"] = `${require(str)}`
          //     console.log(o)
          //   })
          // })
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

    if (offset === 140) {
      setOffset(offset + 11)
    } else {
      setOffset(offset + 20)
    }

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
          Search for Pokémon by name or using the National Pokedéx number
        </SubTitle>
      </TitleSection>

      <SearchBar
        pokemons={pokemons}
      />

      {pokemons.length > 0 && (
        <PokemonList
          pokemons={pokemons}
          navigation={props.navigation}
          offSetHandler={offSetHandler}
        />
      )}
    </Container>
  );
}

export default Home;