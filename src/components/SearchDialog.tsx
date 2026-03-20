import {useState, useEffect, useCallback, useRef} from "react";
import {search, type SearchItem, type SearchResult} from "../lib/search";

declare global {
  interface Window {
    __SEARCH_INDEX__?: SearchItem[];
  }
}

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const getIndex = useCallback((): SearchItem[] => {
    return window.__SEARCH_INDEX__ ?? [];
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const index = getIndex();
        setResults(search(index, value));
      }, 300);
    },
    [getIndex],
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-1.5 text-sm text-muted-foreground border border-border rounded-md hover:border-primary hover:text-foreground transition-colors"
        aria-label="Search terms"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-muted rounded">
          <span>⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Search glossary terms"
        >
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-lg mx-4 bg-background border border-border rounded-lg shadow-lg">
            <div className="flex items-center border-b border-border px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground shrink-0"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search DevOps terms..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="flex-1 py-3 px-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {query && results.length === 0 && (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  No terms found for "{query}"
                </p>
              )}
              {results.map((result) => (
                <a
                  key={result.slug}
                  href={`/glossary/${result.slug}`}
                  className="flex flex-col gap-1 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">
                    {result.title}
                    {result.abbreviation && (
                      <span className="text-muted-foreground font-normal ml-1">
                        ({result.abbreviation})
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {result.description}
                  </span>
                </a>
              ))}
              {!query && (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  Start typing to search...
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
