import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Game} from "./game";

@Injectable()
export class GameService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  get(id:string): Promise<Game> {
    return this.http
               .get('http://localhost:8080/api/game/get/'+id)
               .toPromise()
               .then(function (response) {
                 return response.json() as Game
               })
               .catch(this.handleError);
  }

  getAll(): Promise<Game[]> {
    return this.http
      .get("http://localhost:8080/api/game/get/all")
      .toPromise()
      .then(function(response){
        return response.json() as Game[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
