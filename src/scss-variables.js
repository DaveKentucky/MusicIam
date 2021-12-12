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
    colorTheme: musiciamTheme 
};
