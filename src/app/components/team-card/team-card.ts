import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
@Input() name: string = '';
@Input() image: string = '';
@Input() role: string = '';
@Input() description: string = '';
@Input() linkedinUrl: string = '';
}
