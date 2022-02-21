import * as m3o from "@m3o/m3o-node";

export class TwitterService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for tweets with a simple query
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "twitter",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
  // Get the timeline for a given user
  timeline(request: TimelineRequest): Promise<TimelineResponse> {
    return this.client.call(
      "twitter",
      "Timeline",
      request
    ) as Promise<TimelineResponse>;
  }
  // Get the current global trending topics
  trends(request: TrendsRequest): Promise<TrendsResponse> {
    return this.client.call(
      "twitter",
      "Trends",
      request
    ) as Promise<TrendsResponse>;
  }
  // Get a user's twitter profile
  user(request: UserRequest): Promise<UserResponse> {
    return this.client.call(
      "twitter",
      "User",
      request
    ) as Promise<UserResponse>;
  }
}

export interface Profile {
  // the user's location
  location?: string;
  // display name of the user
  name?: string;
  // the account creation date
  created_at?: string;
  // the user id
  id?: number;
  // The user's profile picture
  image_url?: string;
  // if the account is private
  private?: boolean;
  // the username
  username?: string;
  // if the account is verified
  verified?: boolean;
  // the user description
  description?: string;
  // the follower count
  followers?: number;
}

export interface SearchRequest {
  // number of tweets to return. default: 20
  limit?: number;
  // the query to search for
  query?: string;
}

export interface SearchResponse {
  // the related tweets for the search
  tweets?: Tweet[];
}

export interface TimelineRequest {
  // number of tweets to return. default: 20
  limit?: number;
  // the username to request the timeline for
  username?: string;
}

export interface TimelineResponse {
  // The recent tweets for the user
  tweets?: Tweet[];
}

export interface Trend {
  // name of the trend
  name?: string;
  // the volume of tweets in last 24 hours
  tweet_volume?: number;
  // the twitter url
  url?: string;
}

export interface TrendsRequest {}

export interface TrendsResponse {
  // a list of trending topics
  trends?: Trend[];
}

export interface Tweet {
  // number of times retweeted
  retweeted_count?: number;
  // text of the tweet
  text?: string;
  // username of the person who tweeted
  username?: string;
  // time of tweet
  created_at?: string;
  // number of times favourited
  favourited_count?: number;
  // id of the tweet
  id?: number;
}

export interface UserRequest {
  // the username to lookup
  username?: string;
}

export interface UserResponse {
  // The requested user profile
  profile?: Profile;
  // the current user status
  status?: Tweet;
}
