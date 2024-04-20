import { Box, Typography, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { useAppTheme } from '../../../contexts/theme';
import { useGithub } from '../../../contexts/github';
import getDayAndMouth from '../../../helpers/convertDate';
import languages from '../../../helpers/languageColors.json';

import { sx } from './styles';

const languageColors: Record<string, string> = languages;

const CarouselDisplay = () => {
  const { oppositeTheme, smDown, mdDown } = useAppTheme();
  const { reposFiltered, userInfos: { user } } = useGithub();

  const theme = useTheme();
  const styles = sx(theme, mdDown, smDown);

  return (
    <Carousel
      sx={styles.wrapper}
      autoPlay={false}
      navButtonsAlwaysVisible
      animation='slide'
      duration={600}
    >
      {
        reposFiltered.map((repo) => (
          <Box sx={styles.listItem} key={repo.id}>

            <Box sx={styles.boxTitle}>

              <Typography sx={styles.repositoryName}
                onClick={() => window.open(`https://github.com/${user.login}/${repo.name}`)}
              >
                {repo.name}
              </Typography>

              <Typography sx={styles.repositoryVisibility}>{repo.visibility}</Typography>

            </Box>

            {
              repo.description && (
                <Typography sx={styles.descrition}>
                  {repo.description}
                </Typography>
              )
            }

            {
              repo.language && (
                <Box sx={styles.boxLanguage}>

                  <Box sx={sx(theme, mdDown, smDown, languageColors[repo.language]).circle} />

                  <Typography>{repo.language}</Typography>

                </Box>
              )
            }

            <Box sx={styles.boxTopics}>

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

            </Box>

            <Box
              sx={repo.stargazers_count || repo.forks || repo.license ? styles.boxDetails : {}}
            >

              {
                repo.stargazers_count > 0 && (
                  <Box sx={styles.detail}>
                    <Box component='img' sx={styles.image} src={`./star-${oppositeTheme}.svg`} />
                    <Typography>{repo.stargazers_count}</Typography>
                  </Box>
                )
              }

              {
                repo.forks > 0 && (
                  <Box sx={styles.detailFork}>
                    <Box component='img' sx={styles.image} src={`./repo-forked-16-${oppositeTheme}.svg`} />
                    <Typography onClick={() => window.open(`https://github.com/microsoft/${repo.name}/fork`)}>
                      {repo.forks}
                    </Typography>
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

            </Box>

            <Box
              sx={repo.created_at || repo.updated_at ? styles.boxDetails : {}}
            >

              {
                repo.created_at && (
                  <Box sx={styles.detail}>
                    <Typography>Created on {getDayAndMouth(repo.created_at)}</Typography>
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
        ))
      }
    </Carousel>
  );
};

export default CarouselDisplay;
