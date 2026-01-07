import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'pt-link',
  imports: [
    RouterLink,
  ],
  template: `
    <a
      class="font-ui font-bold text-neutral-700 text-2xl hover:text-frosted-blue-300 transition"
      routerLink="{{link}}"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class Link {
  @Input() link!: string
}
