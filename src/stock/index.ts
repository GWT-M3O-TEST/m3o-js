import * as m3o from "@m3o/m3o-node";

export class StockService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the historic open-close for a given day
  history(request: HistoryRequest): Promise<HistoryResponse> {
    return this.client.call(
      "stock",
      "History",
      request
    ) as Promise<HistoryResponse>;
  }
  // Get the historic order book and each trade by timestamp
  orderBook(request: OrderBookRequest): Promise<OrderBookResponse> {
    return this.client.call(
      "stock",
      "OrderBook",
      request
    ) as Promise<OrderBookResponse>;
  }
  // Get the last price for a given stock ticker
  price(request: PriceRequest): Promise<PriceResponse> {
    return this.client.call(
      "stock",
      "Price",
      request
    ) as Promise<PriceResponse>;
  }
  // Get the last quote for the stock
  quote(request: QuoteRequest): Promise<QuoteResponse> {
    return this.client.call(
      "stock",
      "Quote",
      request
    ) as Promise<QuoteResponse>;
  }
}

export interface HistoryRequest {
  // date to retrieve as YYYY-MM-DD
  date?: string;
  // the stock symbol e.g AAPL
  stock?: string;
}

export interface HistoryResponse {
  // the open price
  open?: number;
  // the stock symbol
  symbol?: string;
  // the volume
  volume?: number;
  // the close price
  close?: number;
  // the date
  date?: string;
  // the peak price
  high?: number;
  // the low price
  low?: number;
}

export interface Order {
  // the ask size
  ask_size?: number;
  // the bidding price
  bid_price?: number;
  // the bid size
  bid_size?: number;
  // the UTC timestamp of the quote
  timestamp?: string;
  // the asking price
  ask_price?: number;
}

export interface OrderBookRequest {
  // optional RFC3339Nano start time e.g 2006-01-02T15:04:05.999999999Z07:00
  start?: string;
  // stock to retrieve e.g AAPL
  stock?: string;
  // the date in format YYYY-MM-dd
  date?: string;
  // optional RFC3339Nano end time e.g 2006-01-02T15:04:05.999999999Z07:00
  end?: string;
  // limit number of prices
  limit?: number;
}

export interface OrderBookResponse {
  // list of orders
  orders?: Order[];
  // the stock symbol
  symbol?: string;
  // date of the request
  date?: string;
}

export interface PriceRequest {
  // stock symbol e.g AAPL
  symbol?: string;
}

export interface PriceResponse {
  // the stock symbol e.g AAPL
  symbol?: string;
  // the last price
  price?: number;
}

export interface QuoteRequest {
  // the stock symbol e.g AAPL
  symbol?: string;
}

export interface QuoteResponse {
  // the ask size
  ask_size?: number;
  // the bidding price
  bid_price?: number;
  // the bid size
  bid_size?: number;
  // the stock symbol
  symbol?: string;
  // the UTC timestamp of the quote
  timestamp?: string;
  // the asking price
  ask_price?: number;
}
