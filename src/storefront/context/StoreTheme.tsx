'use client'

import { createTheme } from "@mui/material/styles";
import { grey } from '@mui/material/colors';

const primaryMain = grey[900];
const primaryLight = grey[800];

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
      light: grey[800],
      main: grey[900],
      contrastText: '#000000',

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
            backgroundColor: grey[600],

            "&.MuiButton-contained:hover": {
              backgroundColor: grey[900],
            },

          }
        },
      },
    },

    MuiListItemButton : {
      styleOverrides: {
        root:{
          "&:hover": {
            backgroundColor: grey[900],
            color : 'black'
        }
      }
    },
  },

    MuiContainer: {
      variants: [
        {
          props: { color: 'filled' },
          style: {
            backgroundColor: grey[800],
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
            backgroundColor: grey[800],

          }
        }
      ]
    },

    //

    MuiToggleButton: {
      styleOverrides: {
        root: {
          outlineColor: grey[50],
           outlineWidth: '0.1rem',
           outlineStyle: 'solid',
          "&:hover":{
            backgroundColor: grey[50],
            color : 'black'
          },

          "&.Mui-selected": {
            color: primaryMain,
            backgroundColor: '#fefefe',
            "&:hover": {
              backgroundColor: '#fefefe',
            }
          },

        }
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: "white"

          }
        }
      ]
    }
  },
},
);


export {
  theme
}