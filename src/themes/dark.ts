import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1366,
      xl: 1500,
    }
  },

  palette: {
    mode: 'dark',

    primary: {
      main: '#4078c0',
    },

    background: {
      default: '#0B0F14',
      paper: '#0d1117',
    },

    error: {
      main: '#bd2c00',
    },   
  },


  typography: {
    fontFamily: 'Inter',
    fontSize: 13
  },

  shape: {
    borderRadius: 8
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          background: '#333',
          color: '#EAEAEA',
          height: '32px',
          padding: '5px 16px',
          borderRadius: '5px',
          border: '1px solid #474747',
          '&:hover': {
            background: '#3B3E42',
            color: '#EAEAEA',
            border: '1px solid #7E7E7E'
          }
        },
      },
    },
  },
});

export default DarkTheme;

// const Dark = {
//   title: 'dark',

//   background: {
//     primary: '#0d1117',
//     secundary: '#151a22',
//     tertiary: '#21262D',
//     link: 'rgb(56 139 253 / 15%)',
//     linkHover: '#1158c7',
//   },

//   colors: {
//     primary: '#c9d1d9',
//     secundary: '#8b949e',
//     tertiary: 'rgba(139, 148, 158, 0.288)',
//     link: '#58a6ff',
//   },
// };
