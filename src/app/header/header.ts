import { Component, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Contacts } from './contacts/contacts'

@Component({
  selector: 'pf-header',
  imports: [
    RouterLink,
    Contacts,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly mobileDropdownVisible = signal(false)
  readonly dropdownVisible = signal(false)
  readonly mobileContactsDropdownVisible = signal(false)

  toggleMobileDropdown() {
    this.mobileDropdownVisible.update((visible) => !visible)
  }

  toggleDropdown() {
    this.dropdownVisible.update((visible) => !visible)
  }

  toggleMobileContactsDropdown() {
    this.mobileContactsDropdownVisible.update((visible) => !visible)
  }
}
