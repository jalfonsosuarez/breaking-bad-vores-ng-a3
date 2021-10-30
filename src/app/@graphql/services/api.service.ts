import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private apollo: Apollo ) { }

  // tslint:disable-next-line: typedef
  protected query( query: DocumentNode, variables: object = {}, context: object = {} ) {
    return this.apollo.watchQuery( {
      query,
      variables,
      context,
      fetchPolicy: 'network-only'
     }).valueChanges.pipe( map( ( result ) => result.data ) );
  }

  // tslint:disable-next-line: typedef
  protected mutation( mutation: DocumentNode, variables: object = {}, context: object = {} ) {
    return this.apollo.mutate( {
      mutation,
      variables,
      context,
    }).pipe( map( ( result ) => result.data ) );
  }

}
