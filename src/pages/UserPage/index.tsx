import { Box } from '@mui/material';
import UserInfos from '../../components/UserInfos';
import UserRepos from '../../components/UserRepos';
import { useAppTheme } from '../../contexts/theme';

import { sx } from './styles';

const UserPage = () => {
  const { mdDown } = useAppTheme();
  const styles = sx(mdDown);
  
  return (
    <Box sx={styles.wrapper}>
      <UserInfos />
      <UserRepos />
    </Box>
  );
};

export default UserPage;
