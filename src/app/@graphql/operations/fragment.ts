import { gql } from 'apollo-angular';

export const CHARACTER_OBJECT = gql`
  fragment CharacterObject on Character {
    id
    name
    actor @skip(if: $skip)
    description @skip(if: $skip)
    total_episodes @skip(if: $skip)
    photo @skip(if: $skip)
    url @skip(if: $skip)
    votes
  }
`;
