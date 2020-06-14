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
