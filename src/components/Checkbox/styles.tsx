export const sx = (mdDown: boolean) => ({
  
  wrapper: {
    display: 'flex',
    flexDirection: mdDown ? 'column' : 'row',
    justifyContent: 'end',
    alignItems: mdDown ? 'start' : 'center',
    p: '10px 0',
    gap: '10px',
  },

  boxPopovers: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
});