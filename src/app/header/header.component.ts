import { Component, signal } from '@angular/core'
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
  readonly mobileDropdownVisible = signal(false)
  readonly dropdownVisible = signal(false)

  toggleMobileDropdown() {
    this.mobileDropdownVisible.update((visible) => !visible)
  }

  toggleDropdown() {
    this.dropdownVisible.update((visible) => !visible)
  }
}
