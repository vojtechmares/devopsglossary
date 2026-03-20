import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import SearchDialog from '@/components/SearchDialog';

const mockIndex = [
  {
    title: 'Kubernetes',
    slug: 'kubernetes',
    abbreviation: 'K8s',
    description: 'Container orchestration platform.',
    tags: ['containers'],
    category: 'platform',
  },
  {
    title: 'Docker',
    slug: 'docker',
    description: 'Container runtime.',
    tags: ['containers'],
    category: 'tool',
  },
];

describe('SearchDialog', () => {
  beforeEach(() => {
    window.__SEARCH_INDEX__ = mockIndex;
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it('renders search button', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it('opens dialog when button is clicked', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('shows placeholder text when open with no query', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByText('Start typing to search...')).toBeInTheDocument();
  });

  it('shows results after typing', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);

    const input = screen.getByPlaceholderText('Search DevOps terms...');
    fireEvent.change(input, { target: { value: 'docker' } });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('shows empty state when no results found', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);

    const input = screen.getByPlaceholderText('Search DevOps terms...');
    fireEvent.change(input, { target: { value: 'zzzznotfound' } });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText(/no terms found/i)).toBeInTheDocument();
  });

  it('opens dialog with Cmd+K', () => {
    render(<SearchDialog />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'k', metaKey: true });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes dialog when backdrop is clicked', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // The backdrop is the first child div inside the dialog
    const dialog = screen.getByRole('dialog');
    const backdrop = dialog.querySelector('[class*="bg-black"]');
    expect(backdrop).not.toBeNull();
    fireEvent.click(backdrop!);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('works when __SEARCH_INDEX__ is undefined', () => {
    window.__SEARCH_INDEX__ = undefined;
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);

    const input = screen.getByPlaceholderText('Search DevOps terms...');
    fireEvent.change(input, { target: { value: 'docker' } });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText(/no terms found/i)).toBeInTheDocument();
  });

  it('closes dialog on Escape key', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('debounces search and cancels previous timeout', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);

    const input = screen.getByPlaceholderText('Search DevOps terms...');
    // Type first query (creates a timeout)
    fireEvent.change(input, { target: { value: 'kub' } });
    // Type second query before debounce fires (should cancel first timeout)
    fireEvent.change(input, { target: { value: 'docker' } });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Should show Docker results (second query), not Kubernetes (first query)
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('displays abbreviation in results', () => {
    render(<SearchDialog />);
    const buttons = screen.getAllByRole('button', { name: /search terms/i });
    fireEvent.click(buttons[0]);

    const input = screen.getByPlaceholderText('Search DevOps terms...');
    fireEvent.change(input, { target: { value: 'kubernetes' } });

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(screen.getByText('(K8s)')).toBeInTheDocument();
  });
});
