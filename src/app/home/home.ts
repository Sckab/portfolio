import { Component, signal } from '@angular/core'
import { Icon } from './icon/icon'

@Component({
  selector: 'pf-home',
  imports: [
    Icon,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly emailLabel = signal('Send An Email')

  email: string = 'giuliano@scsdc-co.org'

  handleEmailClick() {
    navigator.clipboard.writeText(this.email)

    this.emailLabel.set('Email Copied!')

    setTimeout(() => {
      this.emailLabel.set('Send An Email')
    }, 1500)
  }
}
