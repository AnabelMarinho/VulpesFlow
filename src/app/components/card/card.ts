import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
@Input() image!: string;
@Input() title!: string;
@Input() description!: string;
/* adicione routerlink nos imports e no html do card: [routerLink]="link" */
/* @Input() link!: string; */
}
