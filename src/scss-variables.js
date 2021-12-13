import { createTheme } from '@mui/material/styles';


const musiciamTheme = createTheme({
    palette: {
      primary: {
          main: '#713987',
      },
      secondary: {
          main: '#ffd730',
      },
    },
});

export const variables = {
    colors: {
        musiciamYellow: `#ffd730ff`,
        musiciamYellowWashed: `#fcdc58`,
        musiciamPurple: `#713987`,
        musiciamCyan: `#16e999ff`,
    },
    fonts: {
        headerFont: `Lobster`,
        mainFont: `Poppins`
    },
    shadows: {
        boxShadow: `0px 0px 10px 2px rgba(0, 0, 0, 0.6)`,
        sectionShadow: `0px -3px 14px 7px rgba(0, 0, 0, 0.8)`
    },
    colorTheme: musiciamTheme 
};
