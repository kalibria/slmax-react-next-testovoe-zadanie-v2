export interface IImage {
  id: string,
  likes:number,
  liked_by_user: boolean,
  description: string,
  urls: IUrls
}


export interface IUrls {
  raw: string,
  full: string,
  regular:string,
  small:string,
  thumb: string
}



