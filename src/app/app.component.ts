import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, ToolbarComponent, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'Book-store';

  ngOnInit(): void {
    initFlowbite();
  }
}
