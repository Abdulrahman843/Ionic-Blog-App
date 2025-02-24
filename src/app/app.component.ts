import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Correctly import IonicModule and standalone Ionic components
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true, // Standalone mode enabled
  imports: [
    CommonModule, // Required for Angular directives
    IonicModule,  // Ensures all Ionic components work
  ]
})
export class AppComponent {
  constructor() {}
}
