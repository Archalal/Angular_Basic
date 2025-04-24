import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string=""
  password:string=""

  login(){
    if(this.email &&this.password){
      alert(" login sucessfull")
    }else{
      alert("unsucessfull")
    }
  }

}
