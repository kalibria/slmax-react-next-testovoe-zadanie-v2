class LikeListManager {
  likedPhotos: string[];

  constructor() {
    this.likedPhotos = []
  }

  setLikePhoto(photoId: string) {
    this.likedPhotos.push(photoId);
    if (localStorage.length > 0) {
      localStorage.removeItem("likePhotos");
      localStorage.setItem("likePhotos", this.likedPhotos.toString())
    } else {
      localStorage.setItem("likePhotos", photoId)
    }
  }

  removeLikedPhoto(photoId: string) {
    this.likedPhotos = this.likedPhotos.filter((photo)=>{
      return photo !== photoId
    })
    localStorage.setItem("likePhotos", this.likedPhotos.toString())
  }

}

export const likeListManager = new LikeListManager()

