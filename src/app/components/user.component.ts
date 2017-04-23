import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
})
export class UserComponent  { 
  name: string;
  id :string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

    constructor(){
        this.id="im-2010-066";
        this.name="asiri";
        this.address={
          street: 'nikagolla',
          city: 'kumbikwewa',
          state: 'kurunegala'
        };
        this.hobbies=['abc','def','dfdf','sere','tytu'];
        this.showHobbies=false;
    }

    tgHobbies(){
      if(this.showHobbies==true){
        this.showHobbies=false;
      }else{
        this.showHobbies=true;
      }
      
    }

 }

 interface address{
   street: string;
   city: string;
   state: string;
 }
