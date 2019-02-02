import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import blue from '@material-ui/core/colors/blue'

export default createMuiTheme ({
    palette: {
        primary: deepOrange,
        secondary: blue
    },
    typography: {
        useNextVariants: true,
      }
})