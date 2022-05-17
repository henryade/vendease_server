import { ICharacter } from "./character";
import { IComment } from "./comment";

export interface IEpisode {
  name: string;
  release_date: string;
  episode_code: string;
  characters?: ICharacter[];
  episode_comments?: IComment[];
}
