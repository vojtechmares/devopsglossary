export interface DefinedTermData {
  name: string;
  description: string;
  url: string;
}

export interface WebSiteData {
  name: string;
  url: string;
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface DefinedTermSetData {
  name: string;
  description: string;
  terms: Array<{ name: string; description: string; url: string }>;
}

export function generateDefinedTermSchema(data: DefinedTermData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: data.name,
    description: data.description,
    url: data.url,
  };
}

export function generateWebSiteSchema(data: WebSiteData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${data.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateDefinedTermSetSchema(data: DefinedTermSetData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: data.name,
    description: data.description,
    hasDefinedTerm: data.terms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.name,
      description: term.description,
      url: term.url,
    })),
  };
}

export function wrapInGraph(schemas: object | object[]): object {
  if (!Array.isArray(schemas)) {
    return schemas;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemas.map((schema) => {
      const { '@context': _, ...rest } = schema as Record<string, unknown>;
      return rest;
    }),
  };
}
