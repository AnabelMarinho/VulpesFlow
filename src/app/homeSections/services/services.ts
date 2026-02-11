import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { Button } from '../../components/button/button';
import { SectionHeader } from '../../components/section-header/section-header';

@Component({
  selector: 'app-services',
  imports: [Card, Button, SectionHeader],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
