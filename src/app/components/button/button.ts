import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
@Input() label: string = 'Button';
@Input() variant: 'primary' | 'secondary' | 'tertiary' | 'flow' = 'primary';
@Input() routerLink?: string;
@Input() type: 'button' | 'submit' | 'reset' = 'button';
@Input() disabled: boolean = false;
@Output() pressed = new EventEmitter<MouseEvent>();
}
