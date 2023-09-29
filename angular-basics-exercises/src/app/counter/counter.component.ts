import { Component } from '@angular/core'

@Component({
  selector:'app-counter',
  templateUrl: './counter.component.html'
})


export class CounterComponent{
  log=[]
 counter=0


increase(){

  this.counter=this.counter+1
  this.log.push(this.counter)
}

decrease(){

  this.counter=this.counter-1
  this.log.push(this.counter)
}


}
