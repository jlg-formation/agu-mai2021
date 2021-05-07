import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('test with undefined', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform(undefined);
    expect(result).toEqual('');
  });
  it('test with small string', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('toto');
    expect(result).toEqual('toto');
  });
  it('test with long string', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('toto', 2);
    expect(result).toEqual('to...');
  });
});
