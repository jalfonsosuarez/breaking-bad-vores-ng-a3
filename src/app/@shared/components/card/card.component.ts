import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../../@interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character: ICharacter = {
    id: '',
    name: '',
    votes: 0,
  };

  ngOnInit(): void {
  }

}
