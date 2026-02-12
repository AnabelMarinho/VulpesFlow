import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
@Input() icon: string = '';
@Input() title: string = '';
@Input() description: string = '';
@Input() border: string = '';
@Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

get theme() {
    const themes = {
      primary: {
        background: 'var(--primary)',
        title: 'var(--accent)',
        text: 'var(--secondary)',
        border: '1px solid var(--accent)',
        iconBg: 'var(--secondary)'
      },
      secondary: {
        background: 'var(--accent)',
        title: 'var(--primary)',
        text: 'var(--secondary)',
        border: '1px solid transparent',
        iconBg: 'var(--secondary)'
      },
      tertiary: {
        background: 'var(--secondary)',
        title: 'var(--accent)',
        text: 'var(--accent)',
        border: '1px solid var(--accent)',
        iconBg: 'var(--accent)'
      },
    };

    return themes[this.variant];
  }
}
