import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
@Input() label: string = 'Button';
@Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
}
