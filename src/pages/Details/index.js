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
  PokedexData,
  PokedexItem,
  PokedexText,
  PokedexRow,
  DotsBackground,
} from './styles';

import { RectButton } from 'react-native-gesture-handler'

import { color, background, images } from '../../utils/resources'

import { ProgressBar } from '@react-native-community/progress-bar-android';

const Details = ({ route, navigation }) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    setPokemon(route.params.pokemon)
  }, [])

  return (
    <>
      {pokemon && pokemon.types && (
        <Container style={{ backgroundColor: background[pokemon.types[0].type.name] }}>
          <Header>
            <RectButton onPress={() => navigation.goBack()}>
              <HeaderIcon name="arrow-left" size={30} color="#fff" />
            </RectButton>
          </Header>

          <DotsBackground source={require('../../assets/dots2.png')} />

          <DetailTitle>
            {pokemon.name}
          </DetailTitle>

          <View style={{ alignSelf: 'center', flexDirection: 'row', width: '80%', marginTop: '10%', justifyContent: 'space-around' }}>
            <PokeImage source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png` }} />

            <View>
              <PokeId>
                {pokemon.id < 10 ? `#00${pokemon.id}` : pokemon.id > 10 && pokemon.id < 100 ? `#0${pokemon.id}` : `#${pokemon.id}`}
              </PokeId>

              <PokeName>{pokemon.name}</PokeName>

              {pokemon && pokemon.types && (
                <View style={{ flexDirection: 'row' }}>
                  {pokemon.types.map(type => (
                    <PokeType style={{ backgroundColor: color[type.type.name] }}>
                      <PokeTypeIcon
                        source={images[type.type.name]}
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
            <PokedexData style={{ color: background[pokemon.types[0].type.name] }}>
              Pokédex Data
            </PokedexData>

            {pokemon && pokemon.stats && (
              <View style={{ width: '80%', alignSelf: 'center' }}>
                <PokedexRow>
                  <PokedexItem>
                    HP
              </PokedexItem>

                  <PokedexText>
                    {pokemon.stats[0].base_stat}
                  </PokedexText>

                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={pokemon.stats[0].base_stat / 100}
                  />
                </PokedexRow>

                <PokedexRow>
                  <PokedexItem>
                    Ataque
              </PokedexItem>

                  <PokedexText>
                    {pokemon.stats[1].base_stat}
                  </PokedexText>

                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={pokemon.stats[1].base_stat / 100}
                  />
                </PokedexRow>

                <PokedexRow>
                  <PokedexItem>
                    Defesa
              </PokedexItem>

                  <PokedexText>
                    {pokemon.stats[2].base_stat}
                  </PokedexText>

                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={pokemon.stats[2].base_stat / 100}
                  />
                </PokedexRow>

                <PokedexRow>
                  <PokedexItem>
                    Velocidade
                  </PokedexItem>

                  <PokedexText>
                    {pokemon.stats[4].base_stat}
                  </PokedexText>

                  <ProgressBar
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={pokemon.stats[4].base_stat / 100}
                  />
                </PokedexRow>

                <PokedexRow>
                  <PokedexItem>
                    Abilities
                </PokedexItem>

                  <PokedexItem>
                    {pokemon.abilities.map((o, index) => (
                      <PokedexText>
                        {index + 1}. {o.ability.name} {'\n'}
                      </PokedexText>
                    ))}
                  </PokedexItem>
                </PokedexRow>
              </View>
            )}
          </BottomBackground>

        </Container>
      )}
    </>
  );
}

export default Details;