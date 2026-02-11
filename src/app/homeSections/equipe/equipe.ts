import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';
import { Button } from '../../components/button/button';
import { TeamCard } from '../../components/team-card/team-card';

@Component({
  selector: 'app-equipe',
  imports: [SectionHeader, Button, TeamCard],
  templateUrl: './equipe.html',
  styleUrl: './equipe.css',
})
export class Equipe {

}
