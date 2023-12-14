class LikeListManager {
  likedPhotos: string[];

  constructor() {
    if(localStorage.getItem('likePhotos')){
       this.likedPhotos = JSON.parse(localStorage.getItem('likePhotos'))
    }else{
      this.likedPhotos = []
    }

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

  isLiked(id:string){
    const likedPhotos = JSON.parse(localStorage.getItem('likePhotos'));
    return likedPhotos.includes(id)
  }

}

export const likeListManager = new LikeListManager()

