import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Add this for `routerLink`

// ✅ Import Ionic components correctly from `@ionic/angular/standalone`
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText  // ✅ Import `IonText`
} from '@ionic/angular/standalone';

import { BlogService, Blog } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.page.html',
  styleUrls: ['./blog-list.page.scss'],
  standalone: true,
  imports: [
    RouterModule, // ✅ Required for `routerLink`
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonText, // ✅ Required for `<ion-text>`
    CommonModule,
    FormsModule
  ]
})
export class BlogListPage implements OnInit {
  blogs: Blog[] = [];

  // ✅ Use Angular's inject() instead of constructor injection
  private blogService = inject(BlogService);

  ngOnInit() {
    this.fetchBlogs();
  }

  /** Fetch blogs from Firestore */
  fetchBlogs() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs.map(blog => ({
        ...blog,
        id: blog.id || 'new' // ✅ Ensure every blog has an `id`
      }));
    });
  }

  /** Delete a blog */
  deleteBlog(id: string | undefined) {
    if (id) {
      this.blogService.deleteBlog(id);
    }
  }
}
