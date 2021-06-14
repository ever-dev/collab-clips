import {
  createStyles,
  makeStyles,
  Theme,
  Button,
  Typography,
} from "@material-ui/core";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

type TabProps = {
  options: Array<{
    label: string;
    value: any;
  }>;
  value: any;
  onChange: (value: any) => void;
};

export default function Tab({ options, value, onChange }: TabProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classnames(classes.wrapper)}>
      <PerfectScrollbar>
        <div className={classnames(classes.options)}>
          {options.map((option) => (
            <Button
              className={classnames(
                classes.option,
                option.value === value && classes.activeOption
              )}
              key={option.value.toString()}
              onClick={() => onChange(option.value)}
            >
              <Typography noWrap>{option.label}</Typography>
            </Button>
          ))}
        </div>
      </PerfectScrollbar>
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      position: "relative",

      "&::before": {
        content: "''",
        display: "inline-block",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        width: 16,
        background: "linear-gradient(to right, #fff, #ffffff07)",
      },

      "&::after": {
        content: "''",
        display: "inline-block",
        position: "absolute",
        zIndex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        width: 16,
        background: "linear-gradient(to left, #fff, #ffffff07)",
      },
    },
    options: {
      width: "100%",
      display: "flex",
    },
    option: {
      textTransform: "none",
      minWidth: 96,
      borderBottom: "2px solid transparent",
      borderRadius: 0,
    },
    activeOption: {
      borderBottom: "2px solid red",
      fontWeight: "bold",
    },
  });
