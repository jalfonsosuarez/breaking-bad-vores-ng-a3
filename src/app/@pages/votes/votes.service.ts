import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from '../../@graphql/services/api.service';
import { ADD_VOTE } from '../../@graphql/operations/mutation';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { CHANGE_VOTE, CHANGE_VOTES } from '../../@graphql/operations/subscription';

@Injectable({
  providedIn: 'root'
})
export class VotesService extends ApiService {

  constructor( apollo: Apollo) {
    super(apollo);
  }

  add( id: string ): Observable<any> {
    return this.mutation( ADD_VOTE, { id, skip: true} )
            .pipe( map( ( result: any ) => {
              return result.addVote;
            }));
  }

  changeVoteListener( id: string ): Observable<any>  {
    return this.subscription( CHANGE_VOTE, { id, skip: true } )
            .pipe( map( (result: any) => result.changeVote ));
  }

  changeVotesListener(): Observable<any>  {
    return this.subscription( CHANGE_VOTES, { skip: true } )
            .pipe( map( (result: any) => result.changeVotes ));
  }

}
