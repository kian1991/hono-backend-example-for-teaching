import { Worker, isMainThread, parentPort } from 'worker_threads';

const computeFibonacci = (num: number): number => {
  if (num <= 1) return num;
  return computeFibonacci(num - 1) + computeFibonacci(num - 2);
};

if (!isMainThread) {
  while (true) {
    computeFibonacci(42); // Hohe CPU-Last
  }
}

// Haupt-Thread: Startet Worker auf allen CPU-Kernen
export const maxOutCPU = () => {
  const numCPUs = require('os').cpus().length;
  console.log(`Starte ${numCPUs} Worker für maximale CPU-Last...`);

  for (let i = 0; i < numCPUs; i++) {
    new Worker(__filename);
  }
};
