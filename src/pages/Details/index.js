import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  HeaderIcon,
  DetailTitle,
  PokeImage,
  PokeId,
  PokeName,
  PokeType,
  PokeTypeIcon,
  PokeTypeText,
  BottomBackground,
  PokeDescription,
  PokedexData,
  PokedexItem,
  PokedexText,
  PokedexRow,
} from './styles';

import { RectButton } from 'react-native-gesture-handler'

const Details = ({ route, navigation }) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    setPokemon(route.params.pokemon)
  }, [])

  return (
    <Container>
      <Header>
        <RectButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" size={30} />
        </RectButton>
      </Header>

      <DetailTitle>
        {pokemon.name}
      </DetailTitle>

      <View style={{ alignSelf: 'center', flexDirection: 'row', width: '80%', marginTop: '10%', justifyContent: 'space-around' }}>
        <PokeImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png` }} />

        <View>
          <PokeId>
            {pokemon.id < 100 ? `#00${pokemon.id}` : `#${pokemon.id}`}
          </PokeId>

          <PokeName>{pokemon.name}</PokeName>
          {console.log(pokemon.types)}

          {pokemon.types > 0 && (
            <View style={{ flexDirection: 'row' }}>
              {pokemon.types.map(type => (
                <PokeType>
                  <PokeTypeIcon
                    source={require('../../assets/types/bug.png')}
                  />

                  <PokeTypeText>
                    {type.type.name}
                  </PokeTypeText>
                </PokeType>
              ))}
            </View>
          )}
        </View>
      </View>

      <BottomBackground>
        <PokeDescription>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
        </PokeDescription>

        <PokedexData>
          Pokédex Data
        </PokedexData>

        <View style={{ width: '80%', alignSelf: 'center' }}>
          <PokedexRow>
            <PokedexItem>
              HP
            </PokedexItem>

            <PokedexText>
              100
            </PokedexText>
          </PokedexRow>

          <PokedexRow>
            <PokedexItem>
              Ataque
            </PokedexItem>

            <PokedexText>
              {pokemon.height}
            </PokedexText>
          </PokedexRow>

          <PokedexRow>
            <PokedexItem>
              Defesa
            </PokedexItem>

            <PokedexText>
              {pokemon.weight}
            </PokedexText>
          </PokedexRow>

          <PokedexRow>
            <PokedexItem>
              Velocidade
            </PokedexItem>

            <PokedexText>
              {pokemon.weight}
            </PokedexText>
          </PokedexRow>

          <PokedexRow>
            <PokedexItem>
              Abilities
            </PokedexItem>
            {console.log(pokemon.abilities)}

            <PokedexItem>
              {pokemon.abilities.map((abilitie, index) => (
                <PokedexText>
                  {index + 1}. {abilitie.ability.name}{'\n'}
                </PokedexText>
              ))}
            </PokedexItem>
          </PokedexRow>
        </View>
      </BottomBackground>

    </Container>
  );
}

export default Details;