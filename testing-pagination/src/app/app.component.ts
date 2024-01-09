import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'tst-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testing-pagination';
}
