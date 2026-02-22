import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AboutAudience } from "./audience/audience";
import { AboutBenefits } from "./benefits/benefits";
import { AboutHow } from "./how/how";

@Component({
  selector: "app-about",
  imports: [CommonModule, AboutAudience, AboutBenefits, AboutHow],
  templateUrl: "./about.html",
  styleUrl: "./about.css",
})
export class About {
}
