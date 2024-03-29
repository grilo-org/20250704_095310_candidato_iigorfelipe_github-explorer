export const sx = {
  wrapperContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    maxHeight: '480px',
    border: '1px solid #3B3E42',
    borderRadius: '8px',
  },

  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '0px 10px',
    height: '35px'
  },

  headerIcon: {
    height: '17px',
    width: '17px',
    cursor: 'pointer',
    color: '#BEBEBE',
    '&:hover': {
      color: '#fff',
    }
  },

  wrapperOptionContent: {
    display: 'flex',
    flexDirection: 'column',
  },

  optionContent: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '0px 10px',
    height: '35px',
    borderTop: '1px solid #3B3E42',
    '&:hover': {
      background: '#3B3E42',
      borderTop: '1px solid #3B3E42',
    }
  },

  checkContent: {
    margin: '0px 10px',
    width: '16px',
    height: '16px',
  },

  checkIcon: {
    width: '100%',
    height: '100%'
  }
};
