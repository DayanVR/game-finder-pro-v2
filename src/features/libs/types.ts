export interface IGDBBase {
  id: number;
  name?: string;
}

export interface IGDBImage {
  id: number;
  url: string;
}

export interface IGDBVideo {
  id: number;
  video_id: string;
}

export interface IGDBNamedEntity extends IGDBBase {
  name: string;
}

export interface IGDBPlatformFamily {
  id: number;
  name?: string;
  slug?: string;
  checksum?: string;
}

export interface IGDBPlatform {
  id: number;
  name: string;
  category?: number;
  platform_family?: IGDBPlatformFamily;
}

export interface IGDBCompany {
  id: number;
  name?: string;
}

export interface IGDBInvolvedCompany {
  id: number;
  company: IGDBCompany;
  developer?: boolean;
  publisher?: boolean;
}

export interface IGDBGame {
  id: number;
  slug: string;
  name: string;

  summary?: string;
  storyline?: string;

  rating?: number;
  rating_count?: number;

  first_release_date?: number;
  version_title?: string;

  cover?: IGDBImage;
  screenshots?: IGDBImage[];
  videos?: IGDBVideo[];

  genres?: IGDBNamedEntity[];
  themes?: IGDBNamedEntity[];
  game_modes?: IGDBNamedEntity[];
  player_perspectives?: IGDBNamedEntity[];

  platforms?: IGDBPlatform[];
  involved_companies?: IGDBInvolvedCompany[];
}

export interface IGDBGameListItem {
  id: number;
  slug: string;
  name: string;

  rating?: number;
  rating_count?: number;

  first_release_date?: number;
  version_title?: string;

  cover?: IGDBImage;

  genres?: IGDBNamedEntity[];
  platforms?: IGDBPlatform[];
}
