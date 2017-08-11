import {Component, OnInit} from "@angular/core";
import {GameService} from "./game.service";
import {Game} from "./game";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private game: Game;
  private paramId: string;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.paramId = params['id']);
    this.gameService.get(this.paramId)
        .then(game => this.game = game);
  }
}
