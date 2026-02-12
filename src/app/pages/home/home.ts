import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Services } from '../../homeSections/services/services';
import { Equipe } from '../../homeSections/equipe/equipe';
import { About } from '../../homeSections/about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button, Footer, Header, About, Services, Equipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
