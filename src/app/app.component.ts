import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public apiUrl: string = 'http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json';
  // title = 'osrsitemchecker';
  public dados;
  constructor(public http: Http) { }

  getItems() {
    // this.apiUrl += 4151;
    console.log(this.apiUrl);
    let options = new RequestOptions({
      url: this.apiUrl,
      method: 'GET',
      search:{
        'item':'4151'
    },
    headers: new Headers(
      {
        // 'Api-User-Agent': 'Example/1.0',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Origin': 'http://localhost:4200',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      }
    ),
    withCredentials: true
    });
    return new Promise(resolve => {
      this.http.get(this.apiUrl, options).subscribe(data => {
        console.log(data);
        document.getElementById('json').innerHTML = JSON.stringify(JSON.parse(data.text()), null, 2);
      }, error => {
        console.log('requestToApi(ERROR)', error);
      });
    });
  }
  searchItem() {
    let itemID = document.getElementById('itemId').innerHTML;
    if (itemID != undefined && itemID.length == 4) {
      this.getItems();
    } else {
      console.log('ERROR');
    }
  }


}
