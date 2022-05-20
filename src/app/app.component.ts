import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  numList = [];
  ngOnInit(){
    for(let i=1;i<=2000;i++){
      this.numList.push(i);
    }
  }
}
