import { TestBed } from '@angular/core/testing';

import { EventBusRenderService } from './event-bus-render.service';

describe('EventBusRenderService', () => {
  let service: EventBusRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventBusRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
