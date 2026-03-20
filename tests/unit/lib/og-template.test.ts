import { describe, it, expect } from 'vitest';
import { buildTermOgImage, buildDefaultOgImage } from '@/lib/og-template';

describe('buildTermOgImage', () => {
  const term = {
    title: 'Kubernetes',
    abbreviation: 'K8s',
    description: 'An open-source container orchestration platform.',
    category: 'platform',
    tags: ['containers', 'orchestration', 'cloud-native'],
  };

  it('returns a node with correct dimensions', () => {
    const node = buildTermOgImage(term);
    expect(node.props.style.width).toBe('1200px');
    expect(node.props.style.height).toBe('630px');
  });

  it('includes branding text', () => {
    const node = buildTermOgImage(term);
    const topSection = node.props.children[0];
    const branding = topSection.props.children[0];
    expect(branding.props.children).toBe('DevOps Glossary');
  });

  it('includes title with abbreviation', () => {
    const node = buildTermOgImage(term);
    const topSection = node.props.children[0];
    const title = topSection.props.children[1];
    expect(title.props.children).toBe('Kubernetes (K8s)');
  });

  it('includes title without abbreviation when not provided', () => {
    const node = buildTermOgImage({ ...term, abbreviation: undefined });
    const topSection = node.props.children[0];
    const title = topSection.props.children[1];
    expect(title.props.children).toBe('Kubernetes');
  });

  it('includes description', () => {
    const node = buildTermOgImage(term);
    const topSection = node.props.children[0];
    const desc = topSection.props.children[2];
    expect(desc.props.children).toBe(term.description);
  });

  it('truncates long descriptions', () => {
    const longDesc = 'A'.repeat(160);
    const node = buildTermOgImage({ ...term, description: longDesc });
    const topSection = node.props.children[0];
    const desc = topSection.props.children[2];
    expect(desc.props.children).toHaveLength(140);
    expect(desc.props.children).toMatch(/\.\.\.$/);
  });

  it('includes category and up to 3 tag pills', () => {
    const node = buildTermOgImage(term);
    const bottomSection = node.props.children[1];
    const pillContainer = bottomSection.props.children[0];
    const pills = pillContainer.props.children;
    expect(pills).toHaveLength(4); // category + 3 tags
    expect(pills[0].props.children).toBe('platform');
    expect(pills[1].props.children).toBe('containers');
  });

  it('limits tags to 3', () => {
    const manyTags = { ...term, tags: ['a', 'b', 'c', 'd', 'e'] };
    const node = buildTermOgImage(manyTags);
    const bottomSection = node.props.children[1];
    const pillContainer = bottomSection.props.children[0];
    expect(pillContainer.props.children).toHaveLength(4); // category + 3
  });
});

describe('buildDefaultOgImage', () => {
  it('returns a node with correct dimensions', () => {
    const node = buildDefaultOgImage();
    expect(node.props.style.width).toBe('1200px');
    expect(node.props.style.height).toBe('630px');
  });

  it('includes branding heading', () => {
    const node = buildDefaultOgImage();
    const centerSection = node.props.children[0];
    const heading = centerSection.props.children[0];
    expect(heading.props.children).toBe('DevOps Glossary');
  });

  it('includes subtitle', () => {
    const node = buildDefaultOgImage();
    const centerSection = node.props.children[0];
    const subtitle = centerSection.props.children[1];
    expect(subtitle.props.children).toBe('The Urban Dictionary for DevOps');
  });

  it('includes site URL', () => {
    const node = buildDefaultOgImage();
    const bottomSection = node.props.children[1];
    const url = bottomSection.props.children[0];
    expect(url.props.children).toBe('devopsglossary.com');
  });
});
