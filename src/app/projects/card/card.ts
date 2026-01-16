import { Component, Input } from '@angular/core'

@Component({
  selector: 'pf-projects-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title!: string
  @Input() description!: string
  @Input() link!: string
}
