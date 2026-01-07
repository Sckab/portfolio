import { Component } from '@angular/core'
import { Link } from './link/link.component'

@Component({
  selector: 'pf-header',
  imports: [
    Link,
  ],
  templateUrl: './header.component.html',
})
export class Header {}
