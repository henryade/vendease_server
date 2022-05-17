import { IEpisode } from "./episode";

export interface ICharacter {
  first_name: string;
  last_name: string;
  status: Status;
  state_of_origin?: string;
  gender: Gender;
  location?: string;
  episodes: IEpisode[];
}

export enum Status {
  ACTIVE = "active",
  DEAD = "dead",
  UNKNOWN = "unknown",
}
export enum Gender {
  MALE = "male",
  FEMALE = "female",
}
