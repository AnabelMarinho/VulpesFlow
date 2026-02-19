import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";

type HowStep = {
  number: string;
  title: string;
  description: string;
};

@Component({
  selector: "app-about-how",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./how.html",
  styleUrl: "./how.css",
})
export class AboutHow {
  readonly howSteps: HowStep[] = [
    {
      number: "1",
      title: "Analisamos seu processo",
      description:
        "Identificamos gargalos, tarefas repetitivas e onde a automação gera mais impacto.",
    },
    {
      number: "2",
      title: "Desenhamos a solução ideal",
      description:
        "Criamos fluxos personalizados alinhados à sua operação, ferramentas e objetivos.",
    },
    {
      number: "3",
      title: "Implementamos e integramos",
      description:
        "Conectamos ferramentas, configuramos automações e garantimos funcionamento estável.",
    },
    {
      number: "4",
      title: "Monitoramos e otimizamos",
      description:
        "Acompanhamos resultados e evoluímos a automação conforme seu negócio cresce.",
    },
  ];

  readonly howActiveIndex = signal(0);

  activateStep(index: number) {
    this.howActiveIndex.set(index);
  }
}

