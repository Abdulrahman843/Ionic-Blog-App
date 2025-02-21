import { Injectable, Inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Blog {
  id?: string;
  title: string;
  content: string;
  createdAt: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogsCollection = collection(this.firestore, 'blogs'); // Firestore Collection

  constructor(@Inject(Firestore) private firestore: Firestore) {} // Use Inject decorator

  /** Fetch all blogs */
  getBlogs(): Observable<Blog[]> {
    return collectionData(this.blogsCollection, { idField: 'id' }) as Observable<Blog[]>;
  }

  /** Create a new blog */
  addBlog(blog: Blog) {
    blog.createdAt = Date.now();
    return addDoc(this.blogsCollection, blog);
  }

  /** Update an existing blog */
  updateBlog(id: string, data: Partial<Blog>) {
    const blogRef = doc(this.firestore, `blogs/${id}`);
    return updateDoc(blogRef, data);
  }

  /** Delete a blog */
  deleteBlog(id: string) {
    const blogRef = doc(this.firestore, `blogs/${id}`);
    return deleteDoc(blogRef);
  }
}
