import createTheme from 'styled-components-theme';
import variables from '../../resources/styles/variables';
 
const theme = createTheme(...Object.keys(variables));

export default theme;