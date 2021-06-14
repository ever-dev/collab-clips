import { createStyles, makeStyles, Theme, Grid } from "@material-ui/core";
import classnames from "classnames";

import StarIcon from "~/assets/img/icons/icon_star.svg";

interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container className={classes.wrapper} justify="flex-start">
      {Array.from(new Array(5)).map((_item, index) => (
        <Grid item key={index} className={classnames(classes.item)}>
          <StarIcon
            className={classnames(
              classes.star,
              index < value && classes.active
            )}
          />
        </Grid>
      ))}
    </Grid>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      height: 16,
      display: "flex",
      alignItems: "center",
    },

    item: {
      width: 16,
      height: 16,
      marginRight: theme.spacing(0.5)
    },

    star: {
      width: 16,
      height: 16,

      "& > path": {
        fill: theme.palette.border.main,
      },
    },

    active: {
      "& > path": {
        fill: theme.palette.primary.main,
      },
    },
  });
