import { useContext } from 'react';
import { Box } from '@mui/material';
import UserInfos from '../../components/UserInfos';
import UserRepos from '../../components/UserRepos';
import { AppThemeContext } from '../../contexts/themeProvider';

import { sx } from './styles';

const UserPage = () => {
  const { mdDown } = useContext(AppThemeContext);
  const styles = sx(mdDown);
  
  return (
    <Box sx={styles.wrapper}>
      <UserInfos />
      <UserRepos />
    </Box>
  );
};

export default UserPage;
