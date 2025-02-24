import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Blog {
  id?: string;
  title: string;
  content: string;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogsCollection;

  constructor(private firestore: Firestore) {
    this.blogsCollection = collection(this.firestore, 'blogs'); // ✅ Firestore injected correctly
  }

  /** ✅ Fetch Blogs */
  getBlogs(): Observable<Blog[]> {
    return collectionData(this.blogsCollection, { idField: 'id' }) as Observable<Blog[]>;
  }

  /** ✅ Add Blog (With Error Handling) */
  async addBlog(blog: Blog): Promise<void> {
    try {
      blog.createdAt = Date.now();
      await addDoc(this.blogsCollection, blog);
      console.log("✅ Blog added successfully:", blog);
    } catch (error) {
      console.error("❌ Error adding blog:", error);
    }
  }

  /** ✅ Update Blog (With Error Handling) */
  async updateBlog(id: string, data: Partial<Blog>): Promise<void> {
    try {
      const blogDoc = doc(this.firestore, `blogs/${id}`);
      await updateDoc(blogDoc, data);
      console.log("✅ Blog updated successfully:", data);
    } catch (error) {
      console.error("❌ Error updating blog:", error);
    }
  }

  /** ✅ Delete Blog (With Error Handling) */
  async deleteBlog(id: string): Promise<void> {
    try {
      const blogDoc = doc(this.firestore, `blogs/${id}`);
      await deleteDoc(blogDoc);
      console.log("✅ Blog deleted successfully:", id);
    } catch (error) {
      console.error("❌ Error deleting blog:", error);
    }
  }
}
