import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})

export class HomePage {
  constructor(private navCtrl: NavController) {}

  /** Navigates to the Create Blog Page */
  goToCreateBlog() {
    this.navCtrl.navigateForward('/create-blog');
  }

  /** Navigates to the Blog List Page */
goToViewBlog() {
  this.navCtrl.navigateForward('/blog-list');
}

  /** Cancel Navigation (Goes Back) */
  cancel() {
    if (window.history.length > 1) {
      this.navCtrl.back(); // Goes back if possible
    } else {
      this.navCtrl.navigateRoot('/'); // Redirects to home if no history
    }
  }
}
