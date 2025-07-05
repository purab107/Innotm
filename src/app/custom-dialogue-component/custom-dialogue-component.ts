import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-dialogue-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-dialogue-component.html',
  styleUrl: './custom-dialogue-component.css'
})
export class CustomDialogueComponent {
   @Input() title: string = 'Success Title';
  @Input() message: string = 'Success Message';
  @Input() type: 'success' | 'error' = 'success';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
