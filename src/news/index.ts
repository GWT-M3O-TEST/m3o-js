import * as m3o from "@m3o/m3o-node";

export class NewsService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the latest news headlines
  headlines(request: HeadlinesRequest): Promise<HeadlinesResponse> {
    return this.client.call(
      "news",
      "Headlines",
      request
    ) as Promise<HeadlinesResponse>;
  }
}

export interface Article {
  // categories
  categories?: string[];
  // article description
  description?: string;
  // article id
  id?: string;
  // the locale
  locale?: string;
  // article title
  title?: string;
  // url of the article
  url?: string;
  // image url
  image_url?: string;
  // related keywords
  keywords?: string;
  // the article language
  language?: string;
  // time it was published
  published_at?: string;
  // first 60 characters of article body
  snippet?: string;
  // source of news
  source?: string;
}

export interface HeadlinesRequest {
  // date published on in YYYY-MM-DD format
  date?: string;
  // comma separated list of languages to retrieve in e.g en,es
  language?: string;
  // comma separated list of countries to include e.g us,ca
  locale?: string;
}

export interface HeadlinesResponse {
  articles?: Article[];
}
