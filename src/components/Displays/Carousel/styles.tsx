import { Theme } from '@mui/material';
import { borderColor } from '../../../themes';

export const sx = (theme: Theme, mdDown?: boolean, smDown?: boolean, languageColor?: string) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    mt: '20px',
  },

  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    m: smDown ? '0px' : '0px 50px',
    p: smDown ? '0px' : '0px 10px',
    gap: '20px',
  },

  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: mdDown ? 'column' : 'row',
  },

  repositoryName: {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    mr: smDown ? '0px' : '10px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  repositoryVisibility: {
    color: '#8b949e',
    fontSize: '12px',
    p: '2px 7px',
    borderRadius: '2em',
    textTransform: 'capitalize',
    border: `1px solid ${borderColor}`,
  },

  descrition: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#8b949e',
  },

  boxLanguage: {
    display: 'flex',
    alignItems: 'center',
  },

  circle: {
    width: '12px',
    height: '12px',
    border: `1px solid ${languageColor}`,
    borderRadius: '50%',
    backgroundColor: languageColor,
    mr: '5px',
  },

  boxTopics: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },

  topics: {
    fontSize: '12px',
    p: '4px 8px',
    borderRadius: '2em',
    border: '1px solid transparent',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    background: 'rgb(56 139 253 / 15%)',
    '&:hover': {
      color: '#fff',
      background: '#1158c7',
    },
  },

  boxDetails: {
    display: 'flex',
    alignItems: 'center',
    color: '#8b949e',
    height: mdDown ? '100%' : '18px',
    gap: '15px',
    flexDirection: smDown ? 'column' : 'row',
  },

  detail: {
    display: 'flex',
    alignItems: 'center',
  },

  detailFork: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  image: {
    mr: '5px',
  },
});
