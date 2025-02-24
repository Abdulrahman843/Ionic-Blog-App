import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Inject ActivatedRoute and Router

import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonList
} from '@ionic/angular/standalone';

import { BlogService, Blog } from '../../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.page.html',
  styleUrls: ['./edit-blog.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton,
    CommonModule, FormsModule, IonList
  ]
})
export class EditBlogPage implements OnInit {
  blogId: string = ''; // Holds the blog ID
  blog: Blog = { title: '', content: '', createdAt: Date.now() }; // Holds blog data

  // Use Angular's inject() instead of constructor injection
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private router = inject(Router);

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get('id') || ''; // Get blog ID from URL
    if (this.blogId) {
      this.fetchBlog();
    }
  }

  /** Fetch Blog by ID */
  fetchBlog() {
    this.blogService.getBlogs().subscribe(blogs => {
      const foundBlog = blogs.find(blog => blog.id === this.blogId);
      if (foundBlog) {
        this.blog = { ...foundBlog };
      }
    });
  }

  /** Update Blog in Firestore */
  async updateBlog() {
    if (this.blogId && this.blog.title.trim() && this.blog.content.trim()) {
      await this.blogService.updateBlog(this.blogId, {
        title: this.blog.title,
        content: this.blog.content
      }).then(() => {
        this.router.navigate(['/blog-list']); // Redirect after update
      });
    }
  }
}
