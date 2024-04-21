import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CheckboxFilters from '../Checkbox';
import { useGithub } from '../../contexts/github';
import RepositoryFilters from '../RepositoryFilters';
import { DisplayList, DisplayGrid, CarouselDisplay } from '../Displays';

import { sx } from './styles';


const UserRepos = () => {
  const [searchParams] = useSearchParams();
  const { reposFiltered, userInfos: { user: { login } }, filters: { show } } = useGithub();

  const display = searchParams.get('display') || 'grid';

  return (
    <Box sx={sx.wrapper}>

      <CheckboxFilters />

      <RepositoryFilters />

      {
        show && reposFiltered.length === 0 ? (
          <Box sx={sx.noResultsBox}>
            <Typography sx={sx.noResultsText}>
              {login} não possui nenhum repositório que corresponda.
            </Typography>
          </Box>
        ) : (
          <>
            {display === 'grid' && <DisplayGrid />}
            {display === 'list' && <DisplayList />}
            {display === 'carousel' && <CarouselDisplay />}
          </>
        )
      }

    </Box>
  );
};

export default UserRepos;
