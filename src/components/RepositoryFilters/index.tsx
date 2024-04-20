import { useContext } from 'react';
import { Box, IconButton, TextField, Typography, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import { GithubContext } from '../../contexts/githubProvider';
import { AppThemeContext } from '../../contexts/themeProvider';

import { sx } from './styles';

const RepositoryFilters = () => {

  const { oppositeTheme, mdDown } = useContext(AppThemeContext)
  const {
    userInfos: { repos, stars },
    filterFeedback,
    handleClearFilter,
    searchRepo,
    handleSearchInput,
  } = useContext(GithubContext);

  const theme = useTheme();
  const styles = sx(theme, mdDown);

  const renderRepo = () => {
    if (searchRepo) {
      return (
        <>
          {' '}que correspondem a <Typography sx={styles.feedbackHighlight}>{filterFeedback.repo}</Typography>
        </>
      );
    }
    return null;
  };

  const renderType = () => {
    if (filterFeedback.type) {
      return (
        <>
          {searchRepo ? ' ' : ''}<Typography sx={styles.feedbackHighlight}>{filterFeedback.type}</Typography>
        </>
      );
    }
    return null;
  };

  const renderLanguage = () => {
    if (filterFeedback.language) {
      return (
        <>
          {' '}escritos em <Typography sx={styles.feedbackHighlight}>{filterFeedback.language}</Typography>
        </>
      );
    }
    return null;
  };

  const renderSort = () => {
    if (filterFeedback.sort) {
      return (
        <>
        {' '}classificados por <Typography sx={styles.feedbackHighlight}>{filterFeedback.sort}</Typography>
        </>
      )
    }
  }

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
          onChange={({ target: { value } }) => handleSearchInput(value)}
        />

      </Box>
      
      {
        filterFeedback.show && (
          <Box sx={styles.filterFeedbackBox}>

            <Box sx={styles.filterFeedback}>
              <Typography sx={styles.feedbackHighlight}>{filterFeedback.results}</Typography> resultados para repositórios
              {renderType()}
              {renderRepo()}
              {renderLanguage()}
              {renderSort()}
            </Box>

            <IconButton sx={styles.clearFilterBtn} onClick={handleClearFilter}>
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
