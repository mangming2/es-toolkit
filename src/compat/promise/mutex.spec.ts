import { describe, expect, it } from 'vitest';
import { toolkit } from '../toolkit.ts';

describe('Mutex in compat layer', () => {
  it('should work correctly', async () => {
    const mutex = new toolkit.Mutex();
    let counter = 0;

    const increment = async () => {
      await mutex.acquire();
      try {
        counter++;
      } finally {
        mutex.release();
      }
    };

    // Run multiple increments concurrently
    await Promise.all([increment(), increment(), increment()]);

    expect(counter).toBe(3);
  });
});
