import { Component } from '@angular/core';
// https://docs.angular.lat/guide/inputs-outputs
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild2';

  
  EnterName="John Doe";
  EnterAge="22";
  EnterStatus="Single";
  parentData1="";
  parentData2="";
  parentData3="";
  
  transferData(){
    this.parentData1=this.EnterName;
    this.parentData2=this.EnterAge;
    this.parentData3=this.EnterStatus
  }


  value="";
               //is passed by $event 
  sendData(value:string){
    this.value=value;
  }

}
