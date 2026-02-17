import { Component, HostListener, signal } from "@angular/core";
import { Button } from "../button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [Button, RouterLink],
  templateUrl: "./header.html",
  styleUrl: "./header.css",
})
export class Header {
  readonly isScrolled = signal(false);
  readonly isHidden = signal(false);
  private lastScrollY = 0;

  @HostListener("window:scroll")
  onWindowScroll() {
    const currentY = window.scrollY;
    this.isScrolled.set(currentY > 8);

    const hero = document.querySelector(".hero") as HTMLElement | null;
    if (!hero) {
      this.isHidden.set(false);
      this.lastScrollY = currentY;
      return;
    }

    const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
    if (currentY < heroBottom - 12) {
      this.isHidden.set(false);
      this.lastScrollY = currentY;
      return;
    }

    const delta = currentY - this.lastScrollY;
    if (delta > 8) this.isHidden.set(true);
    if (delta < -8) this.isHidden.set(false);
    this.lastScrollY = currentY;
  }
}
