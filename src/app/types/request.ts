export interface Description {
  text: string;
}

export interface Sample {
  id: string;
  name: string;
}

export interface Players {
  max: number;
  online: number;
  sample: Sample[];
}

export interface Version {
  name: string;
  protocol: number;
}

export interface ServerResponse {
  description: Description;
  players: Players;
  version: Version;
}

export interface MCData {
  id: string;
  name: string;
  address: string;
  port: string;
  banner_url: string;
  location: string;
  is_online: string;
  is_private?: any;
  theme: string;
  players: string;
  maxplayers: string;
  version: string;
  uptime: string;
  score: string;
  rank: string;
  votes: string;
  favorited: string;
  comments: string;
  url: string;
  last_check: string;
  last_online: string;
  registration_date: string;
  update_date: string;
}
