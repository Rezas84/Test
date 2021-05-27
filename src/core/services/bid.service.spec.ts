import { Test, TestingModule } from '@nestjs/testing';
import { BidService } from './bid.service';

describe('BidService', () => {
  let service: BidService;
  const bidserviceMock = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BidService],
    })
      .overrideProvider(BidService)
      .useValue(bidserviceMock)
      .compile();

    service = module.get<BidService>(BidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
