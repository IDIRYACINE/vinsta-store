'use client'

import { createTheme } from "@mui/material/styles";

import { grey } from '@mui/material/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      light: grey[900],
      main: grey[800],
      contrastText: '#ffffff',

    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            backgroundColor: grey[900],

            "&.MuiButton-contained:hover": {
              backgroundColor: "#fefefe",
            },


          }
        },
      },
    },
    MuiContainer: {
      variants: [
        {
          props: { color: 'filled' },
          style: {
            backgroundColor: grey[900],
          },
        },
      ],
    }
  },
},
);

export {theme}