import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Link from '@/components/Link';

describe('Link', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders an anchor with the given href and children', () => {
    render(<Link href="/kubernetes">Kubernetes</Link>);
    const link = screen.getByRole('link', { name: 'Kubernetes' });
    expect(link).toHaveAttribute('href', '/kubernetes');
  });

  it('applies the base utility classes when no className is provided', () => {
    render(<Link href="/docker">Docker</Link>);
    const link = screen.getByRole('link', { name: 'Docker' });
    expect(link).toHaveClass('text-primary', 'underline', 'transition-colors');
    // Default className is "", so no trailing extra class.
    expect(link.className.trim().endsWith('transition-colors')).toBe(true);
  });

  it('appends a custom className to the base classes', () => {
    render(
      <Link href="/git" className="font-bold">
        Git
      </Link>,
    );
    const link = screen.getByRole('link', { name: 'Git' });
    expect(link).toHaveClass('text-primary', 'font-bold');
  });

  it('spreads additional props onto the anchor', () => {
    render(
      <Link href="https://example.com" aria-label="external link" data-testid="ext">
        External
      </Link>,
    );
    const link = screen.getByTestId('ext');
    expect(link).toHaveAttribute('aria-label', 'external link');
  });
});
