import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonList
} from '@ionic/angular/standalone';
import { BlogService, Blog } from '../../services/blog.service'; // Import Firestore Service

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.page.html',
  styleUrls: ['./create-blog.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton,
    CommonModule, FormsModule, IonList
  ]
})
export class CreateBlogPage {
  title = ''; // Holds blog title input
  content = ''; // Holds blog content input

  constructor(private blogService: BlogService, private router: Router) {} // Inject Firestore Service and Router

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
}
