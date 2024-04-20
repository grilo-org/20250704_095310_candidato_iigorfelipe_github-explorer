import { useContext } from 'react';
import {
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import { useGithub } from '../../contexts/github';
import { AppThemeContext } from '../../contexts/themeProvider';

import { sx } from './styles';

const UserInfos = () => {
  const { userInfos: { user } } = useGithub();
  const { oppositeTheme, smDown, mdDown } = useContext(AppThemeContext);

  const theme = useTheme();
  const styles = sx(theme, smDown, mdDown);

  return (
    <Box sx={styles.wrapper}>

      <Box sx={styles.boxName}>

        <Box sx={styles.avatar} component='img' src={user.avatar_url} alt="" />

        <Box>
          <Typography sx={styles.name}>{user.name}</Typography>
          <Typography sx={styles.login}>{user.login}</Typography>
        </Box>

      </Box>

      <Button
        sx={styles.btnFollow}
        onClick={() => window.open(`https://github.com/${user.login}`)}
      >
        Ver perfil completo
      </Button>

      <Typography sx={styles.bio}>{user.bio}</Typography>

      <Box sx={styles.containerFollowers}>

        <Box
          component='img'
          sx={styles.img}
          src={`./users-bold-${oppositeTheme}.svg`}
        />

        <Box
          sx={styles.boxFollowers}
          onClick={() =>
            window.open(`https://github.com/${user.login}?tab=followers`)
          }
        >
          <Typography sx={styles.numbers}>{user.followers}</Typography>
          <Typography sx={styles.followersText}>followers</Typography>
        </Box>

        <Typography sx={styles.dot}>&#8226;</Typography>

        <Box
          sx={styles.boxFollowing}
          onClick={() =>
            window.open(`https://github.com/${user.login}?tab=following`)
          }
        >
          <Typography sx={styles.numbers}>{user.following}</Typography>
          <Typography sx={styles.followingText}>following</Typography>
        </Box>
      </Box>

      <Box sx={styles.boxInfos}>
  
        {
          user.company && (
            <Box sx={styles.infoSection}>
              <Box
                component='img'
                sx={styles.img}
                src={`./building-${oppositeTheme}.svg`}
              />

              <Typography>{user.company}</Typography>
            </Box>
          )
        }

        {
          user.location && (
            <Box sx={styles.infoSection}>
              <Box
                component='img'
                sx={styles.img}
                src={`./map-pin-${oppositeTheme}.svg`}
              />

              <Typography>{user.location}</Typography>
            </Box>
          )
        }

        {
          user.email && (
            <Box sx={styles.infoSection}>
              <Box
                component='img'
                sx={styles.img}
                src={`./email-${oppositeTheme}.svg`}
              />

              <Typography sx={styles.links}>{user.email}</Typography>
            </Box>
          )
        }

        {
          user.blog && (
            <Box sx={styles.infoSection}>
              <Box
                component='img'
                sx={styles.img}
                src={`./link-${oppositeTheme}.svg`}
              />

              <Typography
                sx={styles.links}
                onClick={() => window.open(user.blog)}
              >
                {user.blog}
              </Typography>
            </Box>
          )
        }

        {
          user.twitter_username && (
            <Box sx={styles.infoSection}>
              <Box
                component='img'
                sx={styles.img}
                src={`./x-${oppositeTheme}.svg`}
              />

              <Typography
                sx={styles.links}
                onClick={() =>
                  window.open(`https://twitter.com/${user.twitter_username}`)
                }
              >
                {user.twitter_username}
              </Typography>
            </Box>
          )
        }
      </Box>

      <Divider sx={styles.line} />
    </Box>
  );
};

export default UserInfos;
