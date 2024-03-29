import { Theme } from '@mui/material';

export const sx = (theme: Theme, languageColor?: string) => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  listItem: {
    minWidth: '456px',
    width: '50%',
    height: '125px',
    m: '0px 0px 16px 0px',
    p: '0px 8px',
  },
  
  listItemContentWrapper: {
    width: '100%',
    height: '100%',
    p: '16px',
    border: '1px solid #25282e',
    borderRadius: '5px',
  },
  
  listItemContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  
  iconRepositories: {
    pr: '6px',
  },
  
  repositoryName: {
    fontSize: '14px',
    fontWeight: '600',
    mr: '0px',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  
  repositoryVisibility: {
    border: '1px solid #25282e',
    fontSize: '10px',
    color: '#8b949e',
    ml: '8px',
    p: '2px 6px',
    borderRadius: '2em',
    textTransform: 'capitalize',
  },
  
  descrition: {
    height: '36px',
    m: '8px 0px 0px',
    fontSize: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  
  details: {
    width: '406px',
    height: '18px',
    m: '8px 0px 0px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  detail: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mr: '15px',
  },
  
  detailFork: {
    display: 'flex',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  
  detailStar: {
    display: 'flex',
    alignItems: 'center',
    mr: '10px',
  },
  
  language: {
    width: '12px',
    height: '12px',
    border: `1px solid ${languageColor}`,
    borderRadius: '50%',
    backgroundColor: languageColor,
  },
  
  spacingLeft: {
    ml: '5px',
  },
});
