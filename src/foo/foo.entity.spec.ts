import { Foo } from './foo.entity';

describe('Foo', () => {
  it('should be defined', () => {
    expect(new Foo()).toBeDefined();
  });
});
