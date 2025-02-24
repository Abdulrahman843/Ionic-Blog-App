import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Inject Router for navigation
import { Location } from '@angular/common'; // Allows going back

import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea,
  IonButton, IonList, IonIcon, IonCard, IonCardHeader, IonCardContent, IonCardTitle
} from '@ionic/angular/standalone';

import { BlogService, Blog } from '../../services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.page.html',
  styleUrls: ['./create-blog.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton,
    CommonModule, FormsModule, IonList, IonIcon, IonCard, IonCardHeader, IonCardContent, IonCardTitle
  ]
})
export class CreateBlogPage {
  title = ''; // Holds blog title input
  content = ''; // Holds blog content input

  // Use Angular's inject() instead of constructor injection
  private blogService = inject(BlogService);
  private router = inject(Router);
  private location = inject(Location); // Enables back navigation

  /** Create Blog and Save to Firestore */
  createBlog() {
    if (this.title.trim() && this.content.trim()) {
      const newBlog: Blog = {
        title: this.title,
        content: this.content,
        createdAt: Date.now()
      };

      this.blogService.addBlog(newBlog).then(() => {
        this.router.navigate(['/blog-list']); // Redirect to Blog List after adding
      });
    }
  }

  /** Cancel and Go Back */
cancel() {
  if (window.history.length > 1) {
    this.location.back(); // Go back if possible
  } else {
    this.router.navigate(['/']); // Redirect to home if no history
  }
}
}

