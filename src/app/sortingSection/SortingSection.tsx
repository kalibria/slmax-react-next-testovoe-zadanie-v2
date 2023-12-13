import getSortedPhoto from "@/app/sortingSection/getSortedPhoto";

const SortingSection = ({setPhotos}) =>{
  const handleChange = async (event) =>{
    const res = await getSortedPhoto(event.target.value);

    setPhotos(res)

  }
    return (
      <div>
        <form  onChange={handleChange}>
          <label className={'flex justify-center mb-5 '}>
            <p className={'font-bold mr-3'}>SORTING</p>
            <select name='sorting-area' id='sorting-area'>
              <option value='popular'>popular</option>
              <option value='oldest'>oldest</option>
              <option value='latest'>latest</option>
            </select>
          </label>
        </form>
      </div>

    )
}

export default SortingSection;
