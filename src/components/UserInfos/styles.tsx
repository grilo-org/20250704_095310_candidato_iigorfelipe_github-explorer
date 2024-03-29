import { Theme } from '@mui/material';

export const sx = (theme: Theme, smDown: boolean, mdDown: boolean) => {

  let avatarSize = '296px';
  let userNameSize = '24px'

  if (mdDown) {
    avatarSize = '100px';
    userNameSize = '16px';
  }

  if (smDown) {
    avatarSize = '50px';
    userNameSize = '12px';
  }

  return (
    {
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: mdDown ? '90%' : '296px',
        fontSize: '14px',
        p: mdDown ? '0px' : '25px 0px',
        m: mdDown ? '5px 0px 0px 5px' : '0px 30px 0px 0px',
      },
    
      boxName: {
        display: 'flex',
        flexDirection: mdDown ? 'flex' : 'column',
        alignItems: mdDown && 'center',
      },

      avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: '50%',
        border: 'none',
      },
    
      name: {
        fontSize: userNameSize,
        fontWeight: '600',
        mt:  !mdDown && '14px',
        pl: '10px'
      },
    
      login: {
        fontSize: userNameSize,
        fontWeight: '300',
        lineHeight: '24px',
        pl: '10px'
      },
    
      btnFollow: {
        mt: '15px',
      },
    
      bio: {
        mt: '15px',
      },
    
      containerFollowers: {
        display: 'flex',
        alignItems: 'center',
        height: '12px',
        m: '20px 0px 16px 0px',
      },
    
      boxFollowers: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
          color: theme.palette.primary.main,
        },
      },
    
      boxFollowing: {
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          cursor: 'pointer',
          color: theme.palette.primary.main,
        },
      },
    
      followersText: {},
    
      followingText: {},
    
      numbers: {
        fontSize: '13px',
        fontWeight: 600,
        mr: '5px',
      },
    
      dot: {
        m: '0px 5px',
        fontSize: '5px',
      },
    
      boxInfos: {
        mt: '7px',
      },
    
      infoSection: {
        display: 'flex',
        alignItems: 'center',
      },
    
      img: {
        pr: '5px',
      },
    
      links: {
        '&:hover': {
          textDecoration: 'underline',
          color: theme.palette.primary.main,
          cursor: 'pointer',
        },
      },
    
      line: {
        mt: '12px',
      },
    }
  )
};
