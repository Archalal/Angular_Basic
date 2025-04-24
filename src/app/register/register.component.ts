import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //properties
  firstName:string=""
  LastName:string=""

  register(){
    alert("signIn successful")
  }
  firstNameChange(firstName:any){
    console.log(firstName.target.value);
    this.firstName=firstName.target.value
    
  }
  getLastName(getLastName:any){
    alert(getLastName.value)
    this.LastName=getLastName.value
  }

}
