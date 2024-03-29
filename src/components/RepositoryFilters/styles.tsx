import { Theme } from '@mui/material';

export const sx = (theme: Theme, mdDown: boolean) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    mt: mdDown ? '10px' : '0px',
  },

  wrapperInputs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '38px',
    width: '100%',
  },

  filterFeedbackBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: `1px solid #25282e`,
    borderBottom: `1px solid #25282e`,
    m: '10px 0px',
    p: '15px 0px'
  },

  filterFeedback: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  feedbackHighlight: {
    fontWeight: 700,
    p: '0px 4px',
  },

  boxLenght: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2em',
    height: '38px',
    minWidth: '100px',
    border: `1px solid #25282e`,
  },

  boxIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      pr: '2px',
      width: '20px',
      height: '20px',
    },
  },

  dot: {
    fontSize: '5px',
    m: '0px 5px',
    pt: '2px'
  },

  lenght: {
    pt: '3px'
  },

  starIcon: {
    pt: '-1px',
  },

  filterInput: {
    width: '100%',
    borderRadius: '5px',
    ml: '14px',
  },

  clearFilterBtn: {
    p: '0px',
    '&:hover': {
      background: 'transparent',
      color: theme.palette.primary.main,
    },
  },

  clearFilterIcon: {
    height: '22px',
    width: '22px',
    mr: '8px',
    p: '2px',
    border: `1px solid #25282e`,
    borderRadius: '8px',
    background: theme.palette.background.default,
    '&:hover': {
      color: '#fff',
      background: theme.palette.primary.main,
    },
  },
});
