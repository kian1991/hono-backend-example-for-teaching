import { Hono } from 'hono';
import { maxOutCPU } from '../utilities/stress';

export const stress = new Hono();

stress.get('/', (c) => {
  maxOutCPU();
  return c.text('Stress test started!');
});
