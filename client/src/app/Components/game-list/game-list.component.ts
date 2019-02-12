import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../Services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: any = [];
  constructor( private gameServide: GamesService) { }

  ngOnInit() {
    this.gameServide.getGames().subscribe(res => {
      this.games = res;
      // console.log(res);
    },
     err => console.log(err));
  }

}
