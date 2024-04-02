import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfJobsComponent } from './list-of-jobs.component';

describe('ListOfJobsComponent', () => {
  let component: ListOfJobsComponent;
  let fixture: ComponentFixture<ListOfJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
