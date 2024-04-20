import { useContext } from 'react';
import { Box, List, ListItem, Typography, useTheme } from '@mui/material';
import languages from '../../../helpers/languageColors.json';
import { AppThemeContext } from '../../../contexts/themeProvider';
import { useGithub } from '../../../contexts/github';

import { sx } from './styles';

const languageColors: Record<string, string> = languages;

const DisplayGrid = () => {
  const { oppositeTheme } = useContext(AppThemeContext);
  const { reposFiltered, userInfos: { user } } = useGithub();

  const theme = useTheme();
  const styles = sx(theme);

  return (
    <List sx={styles.wrapper}>

      {
        reposFiltered.map((repo) => (
          <ListItem sx={styles.listItem} key={repo.id}>

            <Box sx={styles.listItemContentWrapper}>

              <Box sx={styles.listItemContent}>
                
                <Box
                  component='img'
                  sx={styles.iconRepositories}
                  src={`./repositories-${oppositeTheme}.svg`}
                />

                <Typography
                  sx={styles.repositoryName}
                  onClick={() => window.open(`https://github.com/${user.login}/${repo.name}`)}
                >
                  {repo.name}
                </Typography>

                <Typography sx={styles.repositoryVisibility}>
                  {repo.visibility}
                </Typography>

              </Box>

              {
                repo.description && (
                  <Box sx={styles.listItemContent}>
                    <Box sx={styles.descrition}>
                      {repo.description}
                    </Box>
                  </Box>
                )
              }

              <Box sx={styles.listItemContent}>
                <Box sx={styles.details}>
                  {
                    repo.language && (
                      <Box sx={styles.detail}>
                        <Box sx={sx(theme, languageColors[repo.language]).language} />
                        <Box sx={styles.spacingLeft}>
                          {repo.language}
                        </Box>
                      </Box>
                    )
                  }

                  {
                    repo.stargazers_count > 0 && (
                      <Box sx={styles.detailStar}>
                        <Box component='img' src={`./star-${oppositeTheme}.svg`} />
                        <Box sx={styles.spacingLeft}>
                          {repo.stargazers_count}
                        </Box>
                      </Box>
                    )
                  }

                  {
                    repo.forks >= 1 && (
                      <Box sx={styles.detailFork}>
                        <Box
                          component='img'
                          src={`./repo-forked-16-${oppositeTheme}.svg`}
                        />

                        <Box
                          sx={styles.spacingLeft}
                          onClick={() => window.open(`https://github.com/microsoft/${repo.name}/fork`)}
                        >
                          {repo.forks}
                        </Box>
                      </Box>
                    )
                  }
                </Box>
              </Box>
            </Box>
          </ListItem>
        ))
      }
    </List>
  );
};

export default DisplayGrid;
