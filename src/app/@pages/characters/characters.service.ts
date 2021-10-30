import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from '../../@graphql/services/api.service';
import { GET_CHARACTER, GET_CHARACTERS } from '../../@graphql/operations/query';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends ApiService {

  constructor( apollo: Apollo ) {
    super( apollo );
  }

  list(): Observable<any> {
    return this.query(GET_CHARACTERS)
                .pipe(map((result: any) => result.characters ));
  }

  get( id: string ): Observable<any> {
    return this.query(GET_CHARACTER, { id })
                .pipe(map((result: any) => result.character ));
  }

}
