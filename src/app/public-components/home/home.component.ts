import { Component } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public counter_services: CounterService){ }

  public increase(): void{
    this.counter_services.incCounter();
  }
  public decrease(): void{
    this.counter_services.decCounter();
  }

}
