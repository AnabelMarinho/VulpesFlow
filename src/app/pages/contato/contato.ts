import { CommonModule } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { finalize } from "rxjs";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import {
  PropostaPayload,
  PropostaService,
} from "../../services/proposta.service";

@Component({
  selector: "app-contato",
  imports: [CommonModule, ReactiveFormsModule, Header, Footer, Button],
  templateUrl: "./contato.html",
  styleUrl: "./contato.css",
})
export class Contato {
  private readonly fb = inject(FormBuilder);
  private readonly propostaService = inject(PropostaService);
  private readonly router = inject(Router);
  private redirectTimeout?: number;

  readonly isLoading = signal(false);
  readonly modalKind = signal<"success" | "error" | "rate" | null>(null);
  readonly modalTitle = computed(() => {
    switch (this.modalKind()) {
      case "success":
        return "Proposta enviada!";
      case "rate":
        return "Envio bloqueado temporariamente";
      case "error":
        return "Não foi possível enviar";
      default:
        return "";
    }
  });
  readonly modalMessage = computed(() => {
    switch (this.modalKind()) {
      case "success":
        return "Recebemos sua proposta e já vamos analisar. Redirecionando para a home.";
      case "rate":
        return "Você atingiu o limite de envios. Aguarde 1 minuto e tente novamente.";
      case "error":
        return "Ocorreu um erro ao enviar sua proposta. Tente novamente.";
      default:
        return "";
    }
  });

  readonly interestTopics = [
    "Automação de WhatsApp",
    "Automação de E-mail",
    "Integração entre sistemas",
    "Dashboards e relatórios",
    "Otimização de processos internos",
    "Sistema ou aplicação sob medida",
    "Não sei exatamente, preciso de ajuda",
  ];

  readonly budgetOptions = ["1k-5k", "6k-10k", "10k-20k", "20k-40k"];

  readonly form = this.fb.nonNullable.group({
    interests: this.fb.nonNullable.control<string[]>([]),
    name: this.fb.nonNullable.control("", {
      validators: [Validators.required],
    }),
    email: this.fb.nonNullable.control("", {
      validators: [Validators.required, Validators.email],
    }),
    description: this.fb.nonNullable.control("", {
      validators: [Validators.required],
    }),
    budget: this.fb.control<string | null>(null),
    attachment: this.fb.control<File | null>(null),
  });

  isInterestSelected(topic: string) {
    return this.form.controls.interests.value.includes(topic);
  }

  toggleInterest(topic: string) {
    const current = this.form.controls.interests.value;
    const next = current.includes(topic)
      ? current.filter((t) => t !== topic)
      : [...current, topic];
    this.form.controls.interests.setValue(next);
  }

  isBudgetSelected(option: string) {
    return this.form.controls.budget.value === option;
  }

  selectBudget(option: string) {
    this.form.controls.budget.setValue(option);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.form.controls.attachment.setValue(file);
  }

  onSubmit() {
    if (this.form.invalid || this.isLoading()) return;
    this.modalKind.set(null);
    this.isLoading.set(true);

    const payload: PropostaPayload = {
      interesses: this.form.controls.interests.value,
      nome: this.form.controls.name.value,
      email: this.form.controls.email.value,
      descricao: this.form.controls.description.value,
      orcamento: this.form.controls.budget.value ?? "",
      anexo: this.form.controls.attachment.value ?? undefined,
    };

    this.propostaService
      .enviarProposta(payload)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.modalKind.set("success");
          this.scheduleRedirect();
        },
        error: (error: unknown) => {
          if (error instanceof HttpErrorResponse) {
            const retryAfter =
              error.headers?.get("Retry-After") ??
              error.headers?.get("Retry-Afte");
            if (error.status === 429 && retryAfter) {
              this.modalKind.set("rate");
              this.scheduleRedirect();
              return;
            }
          }
          this.modalKind.set("error");
        },
      });
  }

  closeModal() {
    this.modalKind.set(null);
  }

  private scheduleRedirect() {
    if (this.redirectTimeout) {
      clearTimeout(this.redirectTimeout);
    }
    this.redirectTimeout = window.setTimeout(() => {
      this.router.navigateByUrl("/");
    }, 3000);
  }
}
