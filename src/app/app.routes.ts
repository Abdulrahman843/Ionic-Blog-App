import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'blog-list',
    loadComponent: () => import('./pages/blog-list/blog-list.page').then(m => m.BlogListPage)
  },
  {
    path: 'create-blog',
    loadComponent: () => import('./pages/create-blog/create-blog.page').then(m => m.CreateBlogPage)
  },
  {
    path: 'edit-blog/:id',
    loadComponent: () => import('./pages/edit-blog/edit-blog.page').then(m => m.EditBlogPage)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
