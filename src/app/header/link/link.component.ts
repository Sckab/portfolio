import { Component, computed, input } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'pf-link',
  imports: [
    RouterLink,
  ],
  template: `
    @if (!isExternal()) {
      <a
        class="font-ui font-bold text-neutral-700 text-2xl hover:text-frosted-blue-300 transition select-none active:text-frosted-blue-300"
        [routerLink]="link()"
      >
        <ng-content></ng-content>
      </a>
    } @else if (isExternal()) {
      <a
        class="font-ui font-bold text-neutral-700 text-2xl hover:text-frosted-blue-300 transition select-none active:text-frosted-blue-300"
        href="{{link()}}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ng-content></ng-content>
      </a>
    }
  `,
})
export class Link {
  link = input.required<string>()
  isExternal = computed(() => this.link().startsWith('http'))
}
