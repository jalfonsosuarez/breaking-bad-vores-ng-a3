import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from '../../@graphql/services/api.service';
import { ADD_VOTE } from '../../@graphql/operations/mutation';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

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

}
