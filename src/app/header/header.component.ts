import { Component } from '@angular/core'
import { Link } from './link/link.component'

@Component({
  selector: 'pt-header',
  imports: [
    Link,
  ],
  templateUrl: './header.component.html',
})
export class Header {}
