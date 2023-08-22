'use client'

import { createTheme } from "@mui/material/styles";
import { brown } from '@mui/material/colors';

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
      light: brown[300],
      main: brown[500],
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
            backgroundColor: brown[300],

            "&.MuiButton-contained:hover": {
              backgroundColor: brown[500],
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
            backgroundColor: brown[300],
          },
        },
      ],
    },
    // Paper

    MuiPaper: {
      variants: [
        {
          props: { color: 'primary' },
          style: {
          backgroundColor: brown[300],

        }
      }
      ]
    }

    //
  },
},
);


export {
  theme
}