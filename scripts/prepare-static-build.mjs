import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'portifolio-pablo');
const browserDir = path.join(distDir, 'browser');
const indexFile = path.join(browserDir, 'index.html');

if (!existsSync(indexFile)) {
  throw new Error(`Build estatico nao encontrado em: ${indexFile}`);
}

// O GitHub Pages entrega 404.html para URLs acessadas diretamente. Usar a
// mesma pagina da aplicacao permite que o Angular resolva a rota solicitada.
copyFileSync(indexFile, path.join(browserDir, '404.html'));

// Impede que o Jekyll remova arquivos gerados pelo Angular.
writeFileSync(path.join(browserDir, '.nojekyll'), '');
