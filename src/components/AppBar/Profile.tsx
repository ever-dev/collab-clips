import {
  createStyles,
  makeStyles,
  Theme,
  Avatar,
  Badge,
} from "@material-ui/core";

export default function Profile() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <span className={classes.name}>
        Welcome back, <strong>Angela!</strong>
      </span>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        color="error"
        badgeContent={<span className={classes.badge}>3</span>}
      >
        <Avatar className={classes.avatar} />
      </Badge>
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      alignItems: "center",
    },
    name: {
      whiteSpace: "nowrap",
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),

      [theme.breakpoints.down("xs")]: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
    },

    badge: {
      padding: "0 2px",
    },
  });
