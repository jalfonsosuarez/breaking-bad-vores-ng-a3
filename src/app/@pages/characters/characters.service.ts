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

  list( skip: boolean = false ): Observable<any> {
    return this.query(GET_CHARACTERS, { skip })
                .pipe(map((result: any) => result.characters ));
  }

  get( id: string ): Observable<any> {
    return this.query(GET_CHARACTER, { id, skip: false })
                .pipe(map((result: any) => result.character ));
  }

}
