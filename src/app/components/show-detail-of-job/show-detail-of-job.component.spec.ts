import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailOfJobComponent } from './show-detail-of-job.component';

describe('ShowDetailOfJobComponent', () => {
  let component: ShowDetailOfJobComponent;
  let fixture: ComponentFixture<ShowDetailOfJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailOfJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDetailOfJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
