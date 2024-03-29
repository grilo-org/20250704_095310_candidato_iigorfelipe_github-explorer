import { useContext, useState } from 'react';
import { Box, IconButton, TextField, Typography, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import { GithubContext } from '../../contexts/githubProvider';
import { AppThemeContext } from '../../contexts/themeProvider';

import { sx } from './styles';

const feedbackMock = {
  show: true,
  results: 17,
  type: 'público',
  language: 'TypeScript',
  sort: 'ultima atualização'
}

const RepositoryFilters = () => {
  const [searchRepo, setSearchRepo] = useState('');
  const [filterFeedback, setFilterFeedback] = useState(feedbackMock);

  const { oppositeTheme, mdDown } = useContext(AppThemeContext)
  const { userInfos: { repos, stars } } = useContext(GithubContext);

  const theme = useTheme();
  const styles = sx(theme, mdDown);


  const handleFeedbackFilter = () => {
    setFilterFeedback({
      ...filterFeedback,
      show: !filterFeedback.show
    });
  };

  return (
    <Box sx={styles.wrapper}>

      <Box sx={styles.wrapperInputs}>

        <Box sx={styles.boxLenght}>

          <Box sx={styles.boxIcons}>

            <Box component='img' src={`./repositories-${oppositeTheme}.svg`} />

            <Typography sx={styles.lenght}>{repos.length}</Typography>

          </Box>

          <Box sx={styles.dot}>&#8226;</Box>

          <Box sx={styles.boxIcons}>

            <Box component='img' sx={styles.starIcon} src={`./star-${oppositeTheme}.svg`} />

            <Typography sx={styles.lenght}>{stars.length}</Typography>

          </Box>

        </Box>

        <TextField
          size='small'
          sx={styles.filterInput}
          placeholder="Encontre um repositório..."
          value={searchRepo}
          onChange={({ target: { value } }) => setSearchRepo(value)}
        />


      </Box>
      
      {
        filterFeedback.show && (
          <Box sx={styles.filterFeedbackBox}>

            <Box sx={styles.filterFeedback}>
              <Typography sx={styles.feedbackHighlight}>{filterFeedback.results}</Typography>resultados para repositórios
              <Typography sx={styles.feedbackHighlight}>{filterFeedback.type}</Typography> ordenados por
              <Typography sx={styles.feedbackHighlight}>{filterFeedback.sort}</Typography>
            </Box>

            <IconButton sx={styles.clearFilterBtn} onClick={handleFeedbackFilter}>
              <Close sx={styles.clearFilterIcon} />
              <Typography>Limpar filtro</Typography>
            </IconButton>

          </Box>
        )
      }
      

    </Box>
  );
};

export default RepositoryFilters;
