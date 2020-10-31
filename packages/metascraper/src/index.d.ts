declare module 'metascraper' {
  export default function MetaParser(rules: Rule[]): Scraper;

  type Scraper = (options: ScrapeOptions) => Promise<Metadata>;
  interface ScrapeOptions {
    url: string;
    html?: string;
    rules?: Rule[];
  }
  interface Metadata {
    [index: string]: string
  }
  type RuleSet = {
    [C in keyof Metadata]?: Array<Check>;
  };
  type Check = (options: CheckOptions) => string | null | undefined;
  interface CheckOptions {
    htmlDom: typeof import('cheerio');
    url: string
  }
  type Rule = () => RuleSet;
}

declare module 'metascraper-*' {
  export default function rules(): import('metascraper').Rule;
}
