import { Component, Input } from '@angular/core'

@Component({
  selector: 'pf-stack-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  @Input() tooltip!: string
}
