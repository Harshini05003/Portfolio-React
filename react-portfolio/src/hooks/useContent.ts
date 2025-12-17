import { content } from "../utils/content";
import type { Content } from "../utils/content.interface";

export const useContent=(props:keyof Content)=>{
  return content[props]
}