import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBlogPage } from './create-blog.page';

describe('CreateBlogPage', () => {
  let component: CreateBlogPage;
  let fixture: ComponentFixture<CreateBlogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
