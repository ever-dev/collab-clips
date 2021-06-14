import { createStyles, makeStyles, Theme, Grid, Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import classnames from "classnames";

import { Rating } from "../index";

export default function Product() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.product}>
      <Grid item xs={12}>
        <Skeleton
          className={classnames(classes.skeleton, classes.image)}
          animation={false}
          variant="rect"
        />
      </Grid>

      <Grid item container spacing={2}>
        <Grid item className={classes.avatar}>
          <Skeleton
            className={classnames(classes.skeleton)}
            animation={false}
            variant="circle"
            width={40}
            height={40}
          />
        </Grid>
        <Grid item xs>
          <Skeleton
            className={classnames(classes.skeleton)}
            animation={false}
          />
          <Skeleton
            className={classnames(classes.skeleton)}
            animation={false}
            width="60%"
          />
          <Box mt={2}>
            <Rating value={0} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    skeleton: {
      backgroundColor: theme.palette.border.main,
    },
    image: {
      borderRadius: theme.spacing(1.5),
      height: 144,
      [theme.breakpoints.down("xs")]: {
        height: 90,
      },
    },
    product: {
      paddingBottom: theme.spacing(4),
    },
    avatar: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  });
