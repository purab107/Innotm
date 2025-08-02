import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chat } from './chat/chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, Chat],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Innotm';

  get isloggedin(): boolean {
    return sessionStorage.getItem('isloggedin') === 'true';
  }

  // If you no longer use manual emit via loginEvent, remove this:
  received(event: any) {
    // Optional: update manually if needed somewhere
  }
}
