import { Theme } from '@mui/material';

export const sx = (theme: Theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '15px',
    background: theme.palette.background.paper,
    borderBottom: '1px solid #25282e',
  },

  logo: {
    cursor: 'pointer'
  },

  inputBox: {
    display: 'flex',
    alignItems: 'center',
  },

  feedback: {
    ml: '10px',
    color: theme.palette.error.main,
  },

  btnSearch: {
    p: '5px',
    mr: '-5px',
  },
});
