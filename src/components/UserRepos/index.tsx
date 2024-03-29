import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import CheckboxFilters from '../Checkbox';
import RepositoryFilters from '../RepositoryFilters';
import { DisplayList, DisplayGrid, CarouselDisplay } from '../Displays';

import { sx } from './styles';


const UserRepos = () => {
  const [searchParams] = useSearchParams();

  const display = searchParams.get('display') || 'grid';

  return (
    <Box sx={sx.wrapper}>

      <CheckboxFilters />

      <RepositoryFilters />

      {display === 'grid' && <DisplayGrid />}
      {display === 'list' && <DisplayList />}
      {display === 'carousel' && <CarouselDisplay />}

    </Box>
  );
};

export default UserRepos;
