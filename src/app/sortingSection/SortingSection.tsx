const SortingSection = () =>{
    return (
      <div>
        <div className={'flex justify-center mb-5'}>
          <label htmlFor='sorting-area' className={'font-bold'}>SORTING</label>
          <select name='sorting-area' id='sorting-area'>
            <option value='popular'>popular</option>
            <option value='oldest'>oldest</option>
            <option value='latest'>latest</option>
          </select>
        </div>
      </div>

    )
}

export default SortingSection;
