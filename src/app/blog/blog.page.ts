import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import full IonicModule to avoid errors

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  imports: [
    CommonModule,  // Angular core utilities
    FormsModule,   // Required for form handling
    IonicModule    // Ensures all Ionic components are available
  ]
})
export class BlogPage {
  constructor() {}
}
