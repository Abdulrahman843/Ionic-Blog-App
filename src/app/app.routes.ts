import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog-list', // ✅ Default route to blog list
    pathMatch: 'full',
  },
  {
    path: 'blog-list',
    loadComponent: () => import('./pages/blog-list/blog-list.page').then(m => m.BlogListPage),
  },
  {
    path: 'create-blog',
    loadComponent: () => import('./pages/create-blog/create-blog.page').then(m => m.CreateBlogPage),
  },
  {
    path: 'edit-blog/:id',
    loadComponent: () => import('./pages/edit-blog/edit-blog.page').then(m => m.EditBlogPage),
  },
];
