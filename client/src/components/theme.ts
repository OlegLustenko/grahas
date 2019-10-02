import { createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';

export const theme = createMuiTheme({
  palette: {
    primary: { main: indigo[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: {
    fontSize: 17,
  },
});
