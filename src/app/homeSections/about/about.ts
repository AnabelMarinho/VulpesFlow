import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { Button } from "../../components/button/button";

type ProfileTone = "orange" | "blue" | "violet" | "graphite";

type Profile = {
  id: string;
  tone: ProfileTone;
  label: string;
  listDescription: string;
  panelText: string;
  bullets: string[];
  highlight: string;
  ctaLabel: string;
};

type HowStep = {
  number: string;
  title: string;
  description: string;
};

@Component({
  selector: "app-about",
  imports: [CommonModule, Button],
  templateUrl: "./about.html",
  styleUrl: "./about.css",
})
export class About {
  readonly profiles: Profile[] = [
    {
      id: "sme",
      tone: "orange",
      label: "Pequenas e médias empresas",
      listDescription: "Organize processos e ganhe eficiência operacional.",
      panelText:
        "Se sua empresa ainda depende de planilhas e mensagens manuais, a automação organiza a operação e reduz retrabalho.",
      bullets: [
        "Atendimento e rotinas internas automatizados",
        "Integrações entre as principais ferramentas",
        "Organização e centralização de dados críticos",
      ],
      highlight:
        "Resultado: menos retrabalho, mais controle e mais crescimento.",
      ctaLabel: "Quero automatizar minha operação",
    },
    {
      id: "digital",
      tone: "blue",
      label: "Negócios digitais",
      listDescription: "Automatize atendimento e fluxos internos sem fricção.",
      panelText:
        "Se você vende online, precisa de processos leves e previsíveis para manter o negócio rodando sem travar.",
      bullets: [
        "Atendimento rápido em canais como WhatsApp e chat",
        "Follow-ups e notificações disparados automaticamente",
        "Integração entre checkout, CRM e planilhas",
      ],
      highlight: "Resultado: mais conversões com menos esforço operacional.",
      ctaLabel: "Quero automatizar meu negócio",
    },
    {
      id: "sales",
      tone: "violet",
      label: "Times comerciais",
      listDescription:
        "Leads, follow-ups e respostas rápidas para vender mais.",
      panelText:
        "Se o seu time depende de velocidade, a automação garante respostas rápidas sem perder leads no caminho.",
      bullets: [
        "Distribuição e qualificação automática de leads",
        "Follow-ups no tempo certo, sem esquecer ninguém",
        "Registro das interações direto no CRM",
      ],
      highlight: "Resultado: mais deals com menos perda de oportunidades.",
      ctaLabel: "Quero acelerar minhas vendas",
    },
    {
      id: "ops",
      tone: "graphite",
      label: "Operações com WhatsApp, planilhas e CRMs",
      listDescription: "Menos caos manual, mais integração entre sistemas.",
      panelText:
        "Se sua operação já usa ferramentas digitais mas roda “no braço”, dá para conectar tudo sem trocar de sistema.",
      bullets: [
        "Sincronização entre planilhas, CRM e outros sistemas",
        "Padronização de processos e etapas mais críticas",
        "Relatórios e dashboards atualizados automaticamente",
      ],
      highlight:
        "Resultado: processos mais confiáveis e equipe mais produtiva.",
      ctaLabel: "Quero integrar minha operação",
    },
    {
      id: "you",
      tone: "orange",
      label: "Pode ser você",
      listDescription: "Se tem tarefa repetitiva, dá pra automatizar.",
      panelText:
        "Se sua rotina tem tarefas repetitivas e processos manuais, provavelmente existe uma automação pronta para te ajudar.",
      bullets: [
        "Mapeamento rápido do seu processo atual",
        "Automação sob medida para o seu fluxo",
        "Integrações simples com as ferramentas que você já usa",
      ],
      highlight: "Resultado: mais tempo para o que realmente importa.",
      ctaLabel: "Quero entender meu caso",
    },
  ];

  readonly activeIndex = signal(0);
  readonly activeProfile = computed<Profile>(
    () => this.profiles[this.activeIndex()]
  );
  readonly panelAnimate = signal(true);

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

  selectProfile(index: number) {
    if (index === this.activeIndex()) return;
    this.activeIndex.set(index);
    this.panelAnimate.set(false);
    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      window.requestAnimationFrame(() => this.panelAnimate.set(true));
    } else {
      setTimeout(() => this.panelAnimate.set(true));
    }
  }

  activateStep(index: number) {
    this.howActiveIndex.set(index);
  }
}
