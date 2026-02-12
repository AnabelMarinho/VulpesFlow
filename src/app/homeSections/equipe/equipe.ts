import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';
import { TeamCard } from '../../components/team-card/team-card';

@Component({
  selector: 'app-equipe',
  imports: [SectionHeader, TeamCard],
  templateUrl: './equipe.html',
  styleUrl: './equipe.css',
})
export class Equipe {

}
