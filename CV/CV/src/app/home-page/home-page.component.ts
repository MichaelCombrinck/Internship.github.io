import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ContactInfoComponent } from '../contact-info/contact-info.component';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, ContactInfoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  // const skills = [
  //   { name: 'Angular', level: 'Advanced' },
  //   { name: 'React', level: 'Beginner' },
  //   { name: 'Java', level: 'Advanced' },
  //   { name: 'C# Asp.Net Core', level: 'Intermediate' },
  //   { name: 'Python', level: 'Advanced' },
  //   { name: 'JavaScript', level: 'Advanced' },
  //   { name: 'TypeScript', level: 'Advanced' },
  //   { name: 'MVC', level: 'Intermediate' },
  //   { name: 'C# WPF', level: 'Beginner' }
  // ];
}
