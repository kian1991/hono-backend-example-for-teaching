import { Hono } from 'hono';
import { stress } from './routes/stress';
import { crash } from './routes/crash';
import { cart } from './routes/cart';
import * as os from 'os';
import { calculator } from './routes/calculator';

const app = new Hono();

app.route('/stress', stress);
app.route('/crash', crash);
app.route('/cart', cart);
app.route('/calculator', calculator);

app.get('/', (c) => {
  return c.text(`Hello from ${os.hostname()}!`);
});

export default app;
