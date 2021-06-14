import { PropsWithChildren } from "react";
import { createStyles, makeStyles, Theme, Box } from "@material-ui/core";

import { AppBar, Navbar } from "~/components";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  // styles
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar />
      <Box className={classes.main} mt={4}>
        <Box className={classes.navbar}>
          <Navbar />
        </Box>
        <Box className={classes.content}>{children}</Box>
      </Box>
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      padding: "3.75rem 5rem",
      display: "flex",
      flexDirection: "column",

      backgroundImage: `url(${require("~/assets/img/burst-behind.png")})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      [theme.breakpoints.down("md")]: {
        padding: "1.25rem 2rem",
      },

      [theme.breakpoints.down("xs")]: {
        padding: "2rem 1rem",
        background: "none",
      },
    },

    navbar: {
      marginRight: theme.spacing(7.5),
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    content: {
      flexGrow: 1,
      maxWidth: "100%",
    },

    main: {
      flexGrow: 1,
      display: "flex",
    },
  });
