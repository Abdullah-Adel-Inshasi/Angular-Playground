import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent implements OnInit {
  powers: string[] = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ];

  model: Hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = { name: '', alterEgo: '', power: '', id: 4 };
  }

  constructor() {}

  ngOnInit(): void {}
}
