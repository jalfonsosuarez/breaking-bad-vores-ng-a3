import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragment';

export const GET_CHARACTERS = gql`
  query getCharacters( $skip: Boolean!){
    characters {
      ...CharacterObject
    }
  }
  ${CHARACTER_OBJECT}
`;

export const GET_CHARACTER = gql`
  query getCharacter( $id: ID!, $skip: Boolean!) {
    character( id: $id) {
      ...CharacterObject
    }
  }
  ${CHARACTER_OBJECT}
`;
