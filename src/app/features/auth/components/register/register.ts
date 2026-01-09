import {Component, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  visibility = signal({
    password: true,
    confirmPassword: true,
  });

  isLoading = signal(false);

  toggleVisibility(field: 'password' | 'confirmPassword', event: MouseEvent) {
    event.stopPropagation();
    this.visibility.update(v => ({
      ...v,
      [field]: !v[field],
    }));
  }

  createAccount() {

  }
}
