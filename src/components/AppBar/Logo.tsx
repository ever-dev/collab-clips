import { createStyles, makeStyles, Theme } from "@material-ui/core";
const LogoImg = require("~/assets/img/logo.png");

export default function Logo() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img className={classes.logo} src={LogoImg} />
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    logoContainer: {
      width: 148,
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: 108,
      },
      [theme.breakpoints.down("xs")]: {
        width: 90,
      },
    },

    logo: {
      height: 32,
      [theme.breakpoints.down("xs")]: {
        width: 90,
        height: "auto",
      },
    },
  });
