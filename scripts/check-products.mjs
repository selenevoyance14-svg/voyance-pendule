// Read-only by default. --apply disables products explicitly reported unavailable.
import { readFile, writeFile } from 'node:fs/promises';
const file = new URL('../src/data/products.json', import.meta.url);
const products = JSON.parse(await readFile(file, 'utf8'));
const report = [];
for (const product of products) {
  try {
    const response = await fetch(`https://bonsplansmania.fr/api/amazon/${product.asin}`, { signal: AbortSignal.timeout(20000) });
    if (!response.ok) { report.push({ asin: product.asin, status: 'unverified', http: response.status }); continue; }
    const item = await response.json();
    if (item.asin !== product.asin || !item.title || typeof item.inStock !== 'boolean') { report.push({ asin: product.asin, status: 'unverified' }); continue; }
    report.push({ asin: product.asin, status: item.inStock ? 'available' : 'unavailable' });
    if (process.argv.includes('--apply')) { product.active = item.inStock; product.checkedAt = new Date().toISOString().slice(0, 10); }
  } catch { report.push({ asin: product.asin, status: 'unverified' }); }
}
if (process.argv.includes('--apply')) await writeFile(file, JSON.stringify(products, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
// A network error, rate limit or access denial never deletes a reference.
if (report.some(item => item.status === 'unverified')) process.exitCode = 1;
