import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <div className={'mt-1 mx-auto w-auto'}>
      <Stack spacing={2} >
        <Pagination count={10} variant="outlined" color="primary" sx={{
          '&.MuiPagination-root': {
            margin: '1rem auto'
          }
        }} />
      </Stack>
    </div>

  );
}
