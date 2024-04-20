import { Box, List, ListItem, Typography, useTheme } from '@mui/material';
import { useAppTheme } from '../../../contexts/theme';
import { useGithub } from '../../../contexts/github';
import getDayAndMouth from '../../../helpers/convertDate';
import languages from '../../../helpers/languageColors.json';

import { sx } from './styles';

const languageColors: Record<string, string> = languages;

const DisplayList = () => {
  const { oppositeTheme } = useAppTheme();
  const { reposFiltered, userInfos: { user } } = useGithub();

  const theme = useTheme();
  const styles = sx(theme);

  return (
    <List sx={styles.wrapper}>
      {
        reposFiltered.map((repo) => (
          <ListItem key={repo.id} sx={styles.listItem}>

            <Box sx={styles.listItemContentWrapper}>

              <Box sx={styles.listItemContent}>

                <Typography sx={styles.repositoryName}
                  onClick={() => window.open(`https://github.com/${user.login}/${repo.name}`)}
                >
                  {repo.name}
                </Typography>

                <Typography sx={styles.repositoryVisibility}>{repo.visibility}</Typography>

              </Box>

              <Box sx={styles.listItemContent}>
                {
                  repo.description && (
                    <Typography sx={styles.descrition}>
                      {repo.description}
                    </Typography>
                  )
                }
              </Box>

              {
                repo.topics && repo.topics?.length > 0 && (
                  <Box sx={styles.boxTopics}>
                    {          
                      repo.topics?.map((topic) => (
                        <Box sx={styles.topics}
                          key={topic}
                          onClick={() => window.open(`https://github.com/topics/${topic}`)}
                        >
                          {topic}
                        </Box>
                      ))
                    }
                  </Box>
                )
              }

              <Box sx={styles.listItemContent}>
                
                <Box sx={styles.boxDetails}>
                  {
                    repo.language && (
                      <Box sx={styles.detail}>

                        <Box sx={sx(theme, languageColors[repo.language]).circle} />

                        <Typography>{repo.language}</Typography>

                      </Box>
                    )
                  }

                  {
                    repo.forks >= 1 && (
                      <Box
                        sx={styles.detailFork}
                        onClick={() => window.open(`https://github.com/microsoft/${repo.name}/fork`)}
                      >
                        <Box component='img' sx={styles.image} src={`./repo-forked-16-${oppositeTheme}.svg`} />
                        <Typography>{repo.forks}</Typography>
                      </Box>
                    )
                  }

                  {
                    repo.stargazers_count > 0 && (
                      <Box sx={styles.detail}>
                        <Box component='img' sx={styles.image} src={`./star-${oppositeTheme}.svg`} />
                        <Typography>{repo.stargazers_count}</Typography>
                      </Box>
                    )
                  }

                  {
                    repo.license && (
                      <Box sx={styles.detail}>
                        <Box component='img' sx={styles.image} src={`./balance-scale-${oppositeTheme}.svg`} />
                        <Typography>{repo.license.name}</Typography>
                      </Box>
                    )
                  }

                  {
                    repo.updated_at && (
                      <Box sx={styles.detail}>
                        <Typography>Updated on {getDayAndMouth(repo.updated_at)}</Typography>
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

export default DisplayList;
