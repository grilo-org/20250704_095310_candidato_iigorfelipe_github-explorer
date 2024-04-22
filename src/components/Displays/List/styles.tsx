import { Theme } from '@mui/material';
import { borderColor } from '../../../themes';

export const sx = (theme: Theme, languageColor?: string) => ({
  wrapper: {
    mt: '8px',
  },

  listItem: {
    p: '24px 0px',
    display: 'flex',
    borderBottom: `1px solid ${borderColor}`,
  },

  listItemContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  listItemContent: {
    display: 'flex',
    alignItems: 'center',
  },

  repositoryName: {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  repositoryVisibility: {
    color: '#8b949e',
    border: `1px solid ${borderColor}`,
    fontSize: '12px',
    ml: '8px',
    p: '2px 7px',
    borderRadius: '2em',
    textTransform: 'capitalize',
  },

  descrition: {
    mt: '9px',
    fontSize: '14px',
    color: '#8b949e',
  },

  boxTopics: {
    p: '12px 0px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
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
      background: theme.palette.primary.main,
    },
  },

  boxDetails: {
    display: 'flex',
    alignItems: 'center',
    height: '18px',
    fontSize: '12px',
    color: '#8b949e',
    mt: '15px',
    gap: '15px',
  },

  circle: {
    width: '12px',
    height: '12px',
    border: `1px solid ${languageColor}`,
    borderRadius: '50%',
    backgroundColor: languageColor,
    mr: '5px',
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
