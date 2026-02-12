import { Component } from '@angular/core';
import { SectionHeader } from '../../components/section-header/section-header';
import { InfoCard } from '../../components/info-card/info-card';

@Component({
  selector: 'app-about',
  imports: [SectionHeader, InfoCard],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
