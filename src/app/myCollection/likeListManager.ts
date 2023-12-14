'use client'

class LikeListManager {
  likedPhotos: string[];

  constructor() {
    this.likedPhotos = []
  }

  setLikePhoto(photoId: string) {
    this.likedPhotos.push(photoId);

    localStorage.removeItem("likePhotos");
    localStorage.setItem("likePhotos", JSON.stringify(this.likedPhotos))
    }


  removeLikedPhoto(photoId: string) {
    this.likedPhotos = this.likedPhotos.filter((photo)=>{
      return photo !== photoId
    })
    localStorage.setItem("likePhotos", JSON.stringify(this.likedPhotos))
  }

  getCurrentLikedList(){
    this.likedPhotos = JSON.parse(localStorage.getItem('likePhotos'))

    return this.likedPhotos
  }

}

export const likeListManager = new LikeListManager()

