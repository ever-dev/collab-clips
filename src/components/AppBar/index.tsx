import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  IconButton,
} from "@material-ui/core";

import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";

import MenuIcon from "~/assets/img/icons/icon_menu.svg";

export default function AppBar() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container className={classes.headerContainer} spacing={2}>
      <Grid item className={classes.logo}>
        <Logo />
      </Grid>
      <Grid item xs={12} sm className={classes.search}>
        <Search />
      </Grid>
      <Grid item className={classes.profile}>
        <Profile />
        <IconButton className={classes.menuButton}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    logo: {
      marginRight: theme.spacing(5.5),
      padding: 0,
      order: 1,
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(5),
      },
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    menuButton: {
      marginLeft: theme.spacing(2),
    },
    menuIcon: {
      width: theme.spacing(2),
    },

    profile: {
      display: "flex",
      marginLeft: theme.spacing(6),
      order: 3,
      [theme.breakpoints.down("xs")]: {
        order: 2,
      },
    },

    search: {
      order: 2,
      [theme.breakpoints.down("xs")]: {
        order: 3,
      },
    },
  });
