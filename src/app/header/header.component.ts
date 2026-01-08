import { Component } from '@angular/core'
import { Link } from './link/link.component'

@Component({
  selector: 'pf-header',
  imports: [
    Link,
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
