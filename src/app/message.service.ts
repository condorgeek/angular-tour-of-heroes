import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor(private matSnackBar: MatSnackBar) {}

  add(message: string) {
    this.messages.push(message);
    this.snackBar(message);
  }

  clear() {
    this.messages = [];
  }

  snackBar(message: string, action: string = 'Close') {
    this.matSnackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
    });
  }
}
