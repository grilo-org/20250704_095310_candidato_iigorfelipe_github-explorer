export const sx = (mdDown: boolean) => ({
  wrapper: {
    display: 'flex',
    flexDirection: mdDown ? 'column' : 'flex',
    justifyContent: 'center',
    width: '100%',
  },
});
