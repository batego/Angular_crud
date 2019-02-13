import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/Models/game';
import { GamesService } from 'src/app/Services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  game: Game = {
    ID: 0,
    TITLE: '',
    DESCRIPTION: '',
    IMAGE: '',
    CREATED_AT: new Date()
  };

  constructor(private gameService: GamesService, private route: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRouter.snapshot.params;
    if (params.id) {

      this.gameService.getGame(params.id).subscribe(
        res => {
          console.log(res);
          this.game = res;
        },
        err => {
          console.log(err);
        });
    }
  }
  saveNweGame() {

    delete this.game.CREATED_AT;
    delete this.game.ID;
    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/games']);
      },
      err => {
        console.log(err);
      });
  }

}
