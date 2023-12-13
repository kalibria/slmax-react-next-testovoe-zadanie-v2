import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({setPage,totalPhotos, perPage}) {
  const pageCount = Math.ceil(totalPhotos / perPage);

  const handleChange = (event, page) =>{
    setPage(page)
  }

  return (
    <div className={'mt-0 mx-auto w-auto'}>
      <Stack spacing={2} >
        <Pagination count={pageCount} variant="outlined" color="primary" sx={{
          '&.MuiPagination-root': {
            margin: '1rem auto'
          }
        }} onChange={handleChange}/>
      </Stack>
    </div>

  );
}
