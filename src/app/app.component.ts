import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ✅ Import Ionic standalone components correctly
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true, // ✅ Ensure standalone mode is enabled
  imports: [
    CommonModule,
    RouterModule, // ✅ Ensure Router is included
    IonApp, // ✅ Import correctly
    IonRouterOutlet // ✅ Import correctly
  ]
})
export class AppComponent {
  constructor() {}
}
