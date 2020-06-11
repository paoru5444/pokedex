import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
  Bar,
  Input,
  Icon,
} from './styles';

const SearchBar = () => {
  return (
    <Bar>
      <Icon name="search" size={20} color="#747476" />

      <Input
        placeholder="What pokemon are you looking for?"
      /> 
    </Bar>
  );
}

export default SearchBar;