import { useContext } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { GithubContext } from '../../contexts/githubProvider';
import UserPage from '../UserPage';

import { sx } from './styles';

const Home = () => {

  const { userInfos } = useContext(GithubContext);
  

  return !userInfos.user.login ? (
    <Box sx={sx.wrapper}>

      <Typography sx={sx.homeText}>
        Veja todos os repositórios públicos de qualquer usuário do Github através
        de uma simples pesquisa.
      </Typography>

      <Link sx={sx.projectLink}  href="https://github.com/iigorfelipe/github-repos" target="_blank">
        Github do projeto
      </Link>

    </Box>
  ) : (
    <UserPage />
  );
};

export default Home;