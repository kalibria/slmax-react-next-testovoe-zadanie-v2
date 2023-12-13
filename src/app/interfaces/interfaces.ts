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

export interface ResponseFromGetPhotos {
  photos: IImage[],
  totalPhotos: number,
  perPage:number
}

export interface ResponseFromCategorySection {
  total: number,
  total_pages: number,
  results:ResultForCategory[]
}

export interface ResultForCategory {
  id:number,
  created_at: string,
  description: string,
  urls: IUrls
}





