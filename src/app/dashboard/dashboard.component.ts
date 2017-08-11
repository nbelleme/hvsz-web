import {Game} from "../game/game";
import {Component, OnInit} from "@angular/core";
import {GameService} from "../game/game.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  private games: Game[];


  constructor(private gameService : GameService) {
  }

  ngOnInit(): void {
    this.gameService.getAll().then(games => {
      this.games = games;
      console.log(this.games);
    });
  }


}
