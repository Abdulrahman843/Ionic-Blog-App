import { Component } from '@angular/core';

// ✅ Import Ionic standalone components correctly
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, // ✅ Import correctly
    IonRouterOutlet // ✅ Import correctly
  ]
})
export class AppComponent {
  constructor() {}
}
