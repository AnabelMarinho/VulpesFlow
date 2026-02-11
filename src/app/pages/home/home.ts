import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Services } from '../../homeSections/services/services';
import { Equipe } from '../../homeSections/equipe/equipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button, Card, Footer, Header, Services, Equipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
