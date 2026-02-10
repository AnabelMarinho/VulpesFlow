import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button, Card, Footer, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
