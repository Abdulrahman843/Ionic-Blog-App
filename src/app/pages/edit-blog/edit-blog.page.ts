import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonList
} from '@ionic/angular/standalone';
import { BlogService, Blog } from '../../services/blog.service'; // Import Firestore Service

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

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

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
  updateBlog() {
    if (this.blogId && this.blog.title.trim() && this.blog.content.trim()) {
      this.blogService.updateBlog(this.blogId, {
        title: this.blog.title,
        content: this.blog.content
      }).then(() => {
        this.router.navigate(['/blog-list']); // Redirect after update
      });
    }
  }
}
