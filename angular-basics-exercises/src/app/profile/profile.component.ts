import { Component } from '@angular/core'

@Component({
  selector:'app-profile',
  template:`{{name}}
  {{age}}  `
})

export class ProfileComponent{
  name:string="mie"
  age:number=23

}
