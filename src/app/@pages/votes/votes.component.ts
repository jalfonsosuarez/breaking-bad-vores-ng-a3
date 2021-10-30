import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../@interfaces/character.interface';
import { CharactersService } from '../characters/characters.service';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  charactersList: Array<ICharacter> = [];

  constructor( private characterService: CharactersService,
              private votesService: VotesService ) { }

  ngOnInit(): void {
    this.characterService.list( false )
        .subscribe( ( result: ICharacter[] ) => {
          this.charactersList = result;
        } );
  }

  addVote( id: string ): void  {
    this.votesService.add( id )
          .subscribe( ( result: ICharacter ) => {
            console.log(result);
          });
  }

}
