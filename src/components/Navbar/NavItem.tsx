import { createStyles, makeStyles, Theme, Grid } from "@material-ui/core";
import classnames from "classnames";

interface NavItemProps {
  section: {
    Icon: any;
    label: string;
    isActive?: boolean;
  };
}

export default function NavItem({ section }: NavItemProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container className={classes.section}>
      <Grid item>
        <section.Icon className={classes.icon} />
      </Grid>
      <Grid
        item
        xs
        className={classnames(
          classes.label,
          section.isActive && classes.selected
        )}
      >
        {section.label}
      </Grid>
    </Grid>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    section: {
      alignItems: "center",

      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    icon: {
      width: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      [theme.breakpoints.down("md")]: {
        width: 24,
        height: 24,
      },
    },
    label: {
      lineHeight: "48px",
      marginLeft: theme.spacing(2.5),
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
      },
    },
    selected: {
      fontWeight: "bold",
      textDecoration: "underline",
      textDecorationColor: "red",
      textDecorationThickness: "2px",
      textUnderlineOffset: "8px",
    },
  });
