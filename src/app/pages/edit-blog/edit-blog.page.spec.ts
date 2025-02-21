import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBlogPage } from './edit-blog.page';

describe('EditBlogPage', () => {
  let component: EditBlogPage;
  let fixture: ComponentFixture<EditBlogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
