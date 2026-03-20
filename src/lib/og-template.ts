const PRIMARY = '#2563eb';
const FOREGROUND = '#0f172a';
const MUTED = '#64748b';
const PILL_BG = '#e2e8f0';
const FONT_MONO = 'JetBrains Mono';

interface TermData {
  title: string;
  abbreviation?: string;
  description: string;
  category: string;
  tags: string[];
}

export function buildTermOgImage(term: TermData) {
  const pills = [term.category, ...term.tags.slice(0, 3)];
  const description =
    term.description.length > 140
      ? term.description.slice(0, 137) + '...'
      : term.description;

  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '1200px',
        height: '630px',
        backgroundColor: '#ffffff',
        padding: '60px',
        fontFamily: 'Inter',
      },
      children: [
        // Top section
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column' },
            children: [
              // Branding
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: FONT_MONO,
                    color: PRIMARY,
                    marginBottom: '32px',
                  },
                  children: 'DevOps Glossary',
                },
              },
              // Title
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '56px',
                    fontWeight: 700,
                    color: FOREGROUND,
                    lineHeight: 1.1,
                    marginBottom: '20px',
                  },
                  children: term.abbreviation
                    ? `${term.title} (${term.abbreviation})`
                    : term.title,
                },
              },
              // Description
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '24px',
                    color: MUTED,
                    lineHeight: 1.4,
                  },
                  children: description,
                },
              },
            ],
          },
        },
        // Bottom section
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            children: [
              // Pills
              {
                type: 'div',
                props: {
                  style: { display: 'flex', gap: '10px' },
                  children: pills.map((pill) => ({
                    type: 'div',
                    props: {
                      style: {
                        fontSize: '16px',
                        color: FOREGROUND,
                        backgroundColor: PILL_BG,
                        padding: '6px 16px',
                        borderRadius: '9999px',
                      },
                      children: pill,
                    },
                  })),
                },
              },
              // URL
              {
                type: 'div',
                props: {
                  style: { fontSize: '18px', color: MUTED },
                  children: 'devopsglossary.com',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

export function buildDefaultOgImage() {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1200px',
        height: '630px',
        backgroundColor: '#ffffff',
        padding: '60px',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '64px',
                    fontWeight: 700,
                    fontFamily: FONT_MONO,
                    color: PRIMARY,
                    marginBottom: '16px',
                  },
                  children: 'DevOps Glossary',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '28px',
                    color: MUTED,
                  },
                  children: 'The Urban Dictionary for DevOps',
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { fontSize: '18px', color: MUTED },
                  children: 'devopsglossary.com',
                },
              },
            ],
          },
        },
      ],
    },
  };
}
