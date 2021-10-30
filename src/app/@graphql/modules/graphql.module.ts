import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { onError } from '@apollo/client/link/error';

const uri = 'http://localhost:8000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const errorLink = onError( ( { graphQLErrors, networkError } ) => {
    if ( graphQLErrors ) {
      console.log( 'GraphQL error: ', graphQLErrors );
    }
    if ( networkError ) {
      console.log( 'Network error: ', networkError );
    }
  });

  return {
    link: ApolloLink.from( [ errorLink, httpLink.create({uri}) ] ),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
