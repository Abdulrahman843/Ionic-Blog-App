import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';  // ✅ Import Subscription for cleanup

// ✅ Import Ionic components correctly
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText
} from '@ionic/angular/standalone';

import { BlogService, Blog } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.page.html',
  styleUrls: ['./blog-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonText
  ]
})
export class BlogListPage implements OnInit, OnDestroy {
  blogs: Blog[] = [];
  private blogSubscription?: Subscription;  // ✅ Store subscription for cleanup

  private blogService = inject(BlogService);
  private router = inject(Router);

  ngOnInit() {
    this.fetchBlogs();
  }

  /** Fetch blogs from Firestore */
  fetchBlogs() {
    this.blogSubscription = this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs.map(blog => ({
        ...blog,
        id: blog.id || 'new'  // ✅ Ensure every blog has an `id`
      }));
    });
  }

  /** Navigate to Edit Blog */
  editBlog(id: string | undefined) {
    if (id) {
      this.router.navigate(['/edit-blog', id]);
    }
  }

  /** Delete a blog */
  async deleteBlog(id: string | undefined) {
    if (id) {
      await this.blogService.deleteBlog(id);
    }
  }

  /** Navigate to Create Blog */
  createBlog() {
    this.router.navigate(['/create-blog']);
  }

  /** ✅ Cleanup subscription on destroy */
  ngOnDestroy() {
    if (this.blogSubscription) {
      this.blogSubscription.unsubscribe();
    }
  }
}
