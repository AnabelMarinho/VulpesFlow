import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, Button],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
