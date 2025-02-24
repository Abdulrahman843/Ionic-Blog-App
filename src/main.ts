import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { addIcons } from 'ionicons';
import { addCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { createOutline, listOutline } from 'ionicons/icons';

// ✅ Register Ionicons to avoid missing icon warnings
addIcons({
  'add-circle-outline': addCircleOutline,
  'close-circle-outline': closeCircleOutline,
  'create-outline': createOutline,
  'list-outline': listOutline
});

// ✅ Bootstrap Angular with necessary providers
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), // ✅ Ensures Router is available
    provideFirebaseApp(() => initializeApp(environment.firebase)), // ✅ Initialize Firebase in Angular DI
    provideFirestore(() => getFirestore()), // ✅ Firestore Integration
    provideAuth(() => getAuth()) // ✅ Authentication Integration (even if not used now)
  ]
}).catch(err => console.error('Error bootstrapping app:', err));
