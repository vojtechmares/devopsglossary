import * as readline from 'node:readline';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TERMS_DIR = path.resolve(__dirname, '../src/data/terms');

const VALID_CATEGORIES = [
  'methodology',
  'tool',
  'platform',
  'concept',
  'operating-system',
  'practice',
  'observability',
] as const;

type Category = (typeof VALID_CATEGORIES)[number];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function slugExists(slug: string): boolean {
  return fs.existsSync(path.join(TERMS_DIR, `${slug}.md`));
}

function getExistingSlugs(): string[] {
  return fs
    .readdirSync(TERMS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

async function main() {
  console.log('\n📝 Create a new glossary term\n');

  // Title
  const title = await ask('Title (e.g. "Kubernetes"): ');
  if (!title) {
    console.error('Title is required.');
    process.exit(1);
  }

  // Slug
  const defaultSlug = toSlug(title);
  const slugInput = await ask(`Slug [${defaultSlug}]: `);
  const slug = slugInput || defaultSlug;

  if (slugExists(slug)) {
    console.error(`Error: src/data/terms/${slug}.md already exists.`);
    process.exit(1);
  }

  // Description
  const description = await ask('Description (max 160 chars): ');
  if (!description) {
    console.error('Description is required.');
    process.exit(1);
  }
  if (description.length > 160) {
    console.error(
      `Description is ${description.length} characters (max 160).`,
    );
    process.exit(1);
  }

  // Category
  console.log('\nCategories:');
  VALID_CATEGORIES.forEach((cat, i) => {
    console.log(`  ${i + 1}. ${cat}`);
  });
  const catInput = await ask('Category (number): ');
  const catIndex = parseInt(catInput, 10) - 1;
  if (isNaN(catIndex) || catIndex < 0 || catIndex >= VALID_CATEGORIES.length) {
    console.error('Invalid category selection.');
    process.exit(1);
  }
  const category: Category = VALID_CATEGORIES[catIndex];

  // Optional: abbreviation
  const abbreviation = await ask('Abbreviation (optional, e.g. "K8s"): ');

  // Optional: related terms
  const relatedInput = await ask(
    'Related terms (optional, comma-separated slugs): ',
  );
  let relatedTerms: string[] = [];
  if (relatedInput) {
    const existingSlugs = getExistingSlugs();
    relatedTerms = relatedInput.split(',').map((s) => s.trim()).filter(Boolean);
    const invalid = relatedTerms.filter((s) => !existingSlugs.includes(s));
    if (invalid.length > 0) {
      console.error(
        `Unknown related terms: ${invalid.join(', ')}. Must match existing term slugs.`,
      );
      process.exit(1);
    }
  }

  // Optional: tags
  const tagsInput = await ask('Tags (optional, comma-separated): ');
  const tags = tagsInput
    ? tagsInput.split(',').map((s) => s.trim()).filter(Boolean)
    : [];

  // Build frontmatter
  const dateAdded = todayISO();
  let frontmatter = `---\ntitle: "${title}"\nslug: ${slug}\n`;
  if (abbreviation) {
    frontmatter += `abbreviation: "${abbreviation}"\n`;
  }
  frontmatter += `description: "${description}"\n`;
  if (relatedTerms.length > 0) {
    frontmatter += `relatedTerms:\n`;
    relatedTerms.forEach((t) => {
      frontmatter += `  - ${t}\n`;
    });
  }
  if (tags.length > 0) {
    frontmatter += `tags:\n`;
    tags.forEach((t) => {
      frontmatter += `  - ${t}\n`;
    });
  }
  frontmatter += `category: ${category}\ndateAdded: ${dateAdded}\n---\n`;

  const body = `\nWrite your explanation of ${title} here.\n`;
  const content = frontmatter + body;

  const filePath = path.join(TERMS_DIR, `${slug}.md`);
  fs.writeFileSync(filePath, content, 'utf-8');

  console.log(`\n✅ Created: src/data/terms/${slug}.md\n`);
  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});
