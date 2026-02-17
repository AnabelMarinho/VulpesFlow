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
        background: 'var(--bg-surface)',
        title: 'var(--accent)',
        text: 'rgba(243, 243, 243, 0.82)',
        border: '1px solid rgba(255, 107, 53, 0.35)',
        iconBg: 'rgba(255, 107, 53, 0.14)'
      },
      secondary: {
        background: 'var(--bg-surface)',
        title: 'var(--accent)',
        text: 'rgba(243, 243, 243, 0.82)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        iconBg: 'rgba(255, 255, 255, 0.08)'
      },
      tertiary: {
        background: 'var(--bg-surface)',
        title: 'var(--accent)',
        text: 'rgba(243, 243, 243, 0.82)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        iconBg: 'rgba(255, 255, 255, 0.08)'
      },
    };

    return themes[this.variant];
  }
}
