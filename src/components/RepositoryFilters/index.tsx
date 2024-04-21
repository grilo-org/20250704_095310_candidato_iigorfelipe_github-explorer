import { Box, IconButton, TextField, Typography, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useGithub } from '../../contexts/github';
import { useAppTheme } from '../../contexts/theme';

import { sx } from './styles';

const RepositoryFilters = () => {

  const { oppositeTheme, mdDown } = useAppTheme();
  const {
    userInfos: { repos, stars },
    filters,
    reposFiltered,
    handleClearFilter,
    searchRepo,
    handleSearchInput,
  } = useGithub();

  const theme = useTheme();
  const styles = sx(theme, mdDown);

  const renderRepo = () => {
    if (searchRepo) {
      return (
        <>
          {' '}que correspondem a <Typography sx={styles.feedbackHighlight}>{filters.repo}</Typography>
        </>
      );
    }
    return null;
  };

  const renderType = () => {
    if (filters.type[1].trim().length > 0) {
      return (
        <>
          {searchRepo ? ' ' : ''}<Typography sx={styles.feedbackHighlight}>{filters.type[1]}</Typography>
        </>
      );
    }
    return null;
  };

  const renderLanguage = () => {
    if (filters.language[1].trim().length > 0) {
      return (
        <>
          {' '}escritos em <Typography sx={styles.feedbackHighlight}>{filters.language[1]}</Typography>
        </>
      );
    }
    return null;
  };

  const renderSort = () => {
    if (filters.sort[1].trim().length > 0) {
      return (
        <>
        {' '}classificados por <Typography sx={styles.feedbackHighlight}>{filters.sort[1]}</Typography>
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
        filters.show && (
          <Box sx={styles.filterFeedbackBox}>

            <Box sx={styles.filterFeedback}>
              <Typography sx={styles.feedbackHighlight}>{reposFiltered.length}</Typography> resultados para repositórios
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
