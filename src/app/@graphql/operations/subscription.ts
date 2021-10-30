import { gql } from 'apollo-angular';
import { CHARACTER_OBJECT } from './fragment';

export const CHANGE_VOTE = gql`
    subscription changeVote( $id: ID!, $skip: Boolean! ) {
        changeVote( id: $id) {
        ...CharacterObject
        }
    }
    ${CHARACTER_OBJECT}
`;

export const CHANGE_VOTES = gql`
    subscription changeVotes( $skip: Boolean! ) {
        changeVotes	 {
        ...CharacterObject
        }
    }
    ${CHARACTER_OBJECT}
`;