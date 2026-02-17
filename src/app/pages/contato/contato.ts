import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

@Component({
  selector: "app-contato",
  imports: [CommonModule, ReactiveFormsModule, Header, Footer, Button],
  templateUrl: "./contato.html",
  styleUrl: "./contato.css",
})
export class Contato {
  private readonly fb = inject(FormBuilder);
  readonly sent = signal(false);

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
    this.sent.set(false);
    if (this.form.invalid) return;
    this.sent.set(true);
  }
}
