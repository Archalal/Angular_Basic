import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  Welcomemessage:string="Welcome to angular"
  image:string="https://static.vecteezy.com/system/resources/previews/026/775/615/non_2x/group-of-joyful-diversity-young-people-in-cheerful-action-flat-style-cartoon-illustration-friendship-concept-free-png.png"

}
