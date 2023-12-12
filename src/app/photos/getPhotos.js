const getPhotos = async () =>{
  const res = await fetch('https://api.unsplash.com/photos?page=1&orientation=squarish',{
    headers: {Authorization: `Client-ID ${process.env.UNSPLASH_CLIENT_ID}`}
  })


  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return  res.json()

}

export default getPhotos;
