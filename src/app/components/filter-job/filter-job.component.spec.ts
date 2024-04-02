import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterJobComponent } from './filter-job.component';

describe('FilterJobComponent', () => {
  let component: FilterJobComponent;
  let fixture: ComponentFixture<FilterJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
