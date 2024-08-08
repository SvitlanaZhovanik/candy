const variablesStyles = '@import "./src/scss/common/_vars.scss"';
const breakpointsStyles = '@import "./src/scss/common/_breakpoints.scss"';
const fontsStyles = '@import "./src/scss/common/_fonts.scss"';
const mixinsStyles = '@import "./src/scss/common/_mixins.scss"';
const resetStyles = '@import "./src/scss/common/_reset.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  fontsStyles,
  mixinsStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
