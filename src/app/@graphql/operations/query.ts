import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`
  query getCharacters( $skip: Boolean!){
    characters {
      id
      name
      actor @skip( if: $skip )
      description @skip( if: $skip )
      total_episodes @skip( if: $skip )
      photo @skip( if: $skip )
      url @skip( if: $skip )
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
