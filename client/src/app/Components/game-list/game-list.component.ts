import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../Services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  games: any = [];
  constructor(private gameServide: GamesService) { }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    this.gameServide.getGames().subscribe(
      res => {
        this.games = res;
        // console.log(res);
      },
      err => console.log(err));
  }

  deleteGame(id: string) {
    console.log(id);
    this.gameServide.deleteGame(id).subscribe(res => {
      console.log(res);
      this.getGame();
    },
      err => {
        console.warn(err);
      });
  }

}
