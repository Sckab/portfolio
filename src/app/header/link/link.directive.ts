import { Directive } from '@angular/core'

@Directive({
  selector: 'a[pfLink]',
  host: {
    class:
      'font-ui font-bold text-neutral-700 text-2xl hover:text-frosted-blue-300 transition select-none active:text-frosted-blue-300',
  },
})
export class Link {}
