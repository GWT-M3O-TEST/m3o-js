import * as m3o from "@m3o/m3o-node";

export class TimeService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Get the current time
  now(request: NowRequest): Promise<NowResponse> {
    return this.client.call("time", "Now", request) as Promise<NowResponse>;
  }
  // Get the timezone info for a specific location
  zone(request: ZoneRequest): Promise<ZoneResponse> {
    return this.client.call("time", "Zone", request) as Promise<ZoneResponse>;
  }
}

export interface NowRequest {
  // optional location, otherwise returns UTC
  location?: string;
}

export interface NowResponse {
  // the timezone as BST
  timezone?: string;
  // the unix timestamp
  unix?: number;
  // the current time as HH:MM:SS
  localtime?: string;
  // the location as Europe/London
  location?: string;
  // timestamp as 2006-01-02T15:04:05.999999999Z07:00
  timestamp?: string;
}

export interface ZoneRequest {
  // location to lookup e.g postcode, city, ip address
  location?: string;
}

export interface ZoneResponse {
  // country of the timezone
  country?: string;
  // the local time
  localtime?: string;
  // e.g -0.37
  longitude?: number;
  // UTC offset in hours
  offset?: number;
  // the abbreviated code e.g BST
  abbreviation?: string;
  // e.g 51.42
  latitude?: number;
  // location requested
  location?: string;
  // region of timezone
  region?: string;
  // the timezone e.g Europe/London
  timezone?: string;
  // is daylight savings
  dst?: boolean;
}
