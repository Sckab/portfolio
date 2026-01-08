import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Link } from './link/link.directive'

@Component({
  selector: 'pf-header',
  imports: [
    Link,
    RouterLink,
  ],
  templateUrl: './header.component.html',
})
export class Header {
  toggleDropdown() {
    let dropdown = document.getElementById('dropdown')

    dropdown?.classList.toggle('hidden')
    dropdown?.classList.toggle('flex')
  }
}
