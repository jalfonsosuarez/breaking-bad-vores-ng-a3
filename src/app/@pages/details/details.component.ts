import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters/characters.service';
import { ICharacter } from '../../@interfaces/character.interface';
import { VotesService } from '../votes/votes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: ICharacter = {
    id: '',
    name: '',
    votes: 0
  };

  constructor( private activatedRoute: ActivatedRoute,
               private charaterService: CharactersService,
               private voteservice: VotesService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( params ) => {
      const id = params.id;
      this.charaterService.get( id )
            .subscribe( ( result ) => {
              this.character = result;
            });
      this.voteservice.changeVoteListener( id )
            .subscribe();
    });
  }

}
