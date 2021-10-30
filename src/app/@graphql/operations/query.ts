import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`
  {
    characters {
      id
      name
      actor
      description
      total_episodes
      photo
      url
      votes
    }
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter( $id: ID!) {
    character( id: $id) {
      id
      name
      actor
      description
      total_episodes
      photo
      url
      votes
    }
  }
`;
