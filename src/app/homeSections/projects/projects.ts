import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, Button, Card],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
