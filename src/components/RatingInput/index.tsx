import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import classnames from "classnames";

import StarIcon from "~/assets/img/icons/icon_star.svg";
import StarEmptyIcon from "~/assets/img/icons/icon_star_empty.svg";

interface RatingInputProps {
  value: number;
  onChange: (rating: number) => any;
}
export default function RatingInput(props: RatingInputProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return isMobile ? (
    <RatingInputMobile {...props} />
  ) : isTablet ? (
    <RatingInputTablet {...props} />
  ) : (
    <RatingInputDesktop {...props} />
  );
}

function RatingInputDesktop({ value, onChange }: RatingInputProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.buttonGroup}>
        {Array.from(new Array(value)).map((_item, index) => (
          <IconButton
            key={index}
            className={classnames(classes.item, classes.activeItem)}
            onClick={() => onChange(index + 1)}
          >
            <StarIcon className={classnames(classes.star)} />
          </IconButton>
        ))}
      </Box>
      <Box className={classes.buttonGroup}>
        {Array.from(new Array(5 - value)).map((_item, index) => (
          <IconButton
            key={index}
            className={classnames(classes.item)}
            onClick={() => onChange(index + value + 1)}
          >
            <StarEmptyIcon className={classnames(classes.star)} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

function RatingInputTablet({ value, onChange }: RatingInputProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.valueWrapper}>
        <StarIcon className={classnames(classes.star)} />
        &nbsp;
        <strong>{value} +</strong>
      </Box>
    </Box>
  );
}

function RatingInputMobile({ value, onChange }: RatingInputProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box
        className={classnames(classes.indicator)}
        style={{ width: `${(value / 5) * 100}%` }}
      ></Box>
      <Box className={classnames(classes.valueWrapper, classes.dark)}>
        <StarIcon className={classnames(classes.star)} />
        &nbsp;
        <strong>{value} +</strong>
      </Box>
    </Box>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      height: 40,
      display: "flex",
      alignItems: "center",
      position: "relative",
      padding: theme.spacing(0.5),
      border: `2px solid  ${theme.palette.border.main}`,
      borderRadius: theme.spacing(1.5),
    },

    buttonGroup: {
      display: "flex",
    },

    item: {
      width: 48,
      height: 32,
      borderRadius: theme.spacing(1),
    },

    activeItem: {
      backgroundColor: theme.palette.primary.main,
      "& svg > path": {
        fill: "white",
      },
      "&:hover": {
        backgroundColor: "#777",
      },

      borderRadius: 0,
      "&:first-child": {
        borderTopLeftRadius: theme.spacing(1),
        borderBottomLeftRadius: theme.spacing(1),
      },
      "&:last-of-type": {
        borderTopRightRadius: theme.spacing(1),
        borderBottomRightRadius: theme.spacing(1),
      },
    },

    star: {
      width: 16,
      height: 16,
    },

    valueWrapper: {
      padding: theme.spacing(0.5),
      borderRadius: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      zIndex: 1,
      "& svg > path": {
        fill: "black",
      },

      [theme.breakpoints.down("xs")]: {
        minWidth: 180,
      },
    },

    dark: {
      color: "white",
      "& svg > path": {
        fill: "white",
      },
    },

    indicator: {
      position: "absolute",
      backgroundColor: theme.palette.primary.main,
      left: 0,
      top: 0,
      bottom: 0,
      margin: theme.spacing(0.5),
      borderRadius: theme.spacing(1),
    },
  });
