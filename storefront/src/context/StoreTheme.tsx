'use client'

import { createTheme } from "@mui/material";
import { brown } from '@mui/material/colors';

const theme = createTheme({
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