import { FunctionComponent, useCallback } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import classnames from "classnames";

interface SwitchStringOption {
  label: string;
  value: any;
}

interface SwitchIconOption {
  Icon: FunctionComponent;
  value: any;
}

type BaseProps =
  | {
      isMulti: false;
      value: any;
      onChange: (value: any) => any;
    }
  | {
      isMulti: true;
      value: Array<any>;
      onChange: (value: Array<any>) => any;
    };
type SwitchProps = BaseProps &
  (
    | {
        type: "default";
        options: Array<SwitchStringOption>;
      }
    | {
        type: "icon";
        options: Array<SwitchIconOption>;
      }
  );

type DefaultSwitchProps = {
  options: Array<SwitchStringOption>;
  isActive: (option: SwitchStringOption) => boolean;
  handleClick: (option: SwitchStringOption) => void;
};

type IconSwitchProps = {
  options: Array<SwitchIconOption>;
  isActive: (option: SwitchIconOption) => boolean;
  handleClick: (option: SwitchIconOption) => void;
};

export default function Switch(props: SwitchProps) {
  const isActive = useCallback(
    (option) => {
      if (props.isMulti) {
        return props.value.includes(option.value);
      } else {
        return props.value === option.value;
      }
    },
    [props.value, props.isMulti]
  );

  const handleClick = useCallback(
    (option) => {
      if (props.isMulti) {
        if (props.value.includes(option.value)) {
          props.onChange(
            props.value.filter((item: any) => item !== option.value)
          );
        } else {
          props.onChange([...props.value, option.value]);
        }
      } else {
        props.onChange(option.value);
      }
    },
    [props.value, props.isMulti]
  );

  return props.type === "default" ? (
    <DefaultSwitch
      options={props.options}
      isActive={isActive}
      handleClick={handleClick}
    />
  ) : (
    <IconSwitch
      options={props.options}
      isActive={isActive}
      handleClick={handleClick}
    />
  );
}

function DefaultSwitch({ options, isActive, handleClick }: DefaultSwitchProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classnames(classes.wrapper, classes.defaultWrapper)}>
      {options.map((option) => (
        <Button
          className={classnames(
            classes.option,
            isActive(option) && classes.activeOption
          )}
          key={option.value.toString()}
          onClick={() => handleClick(option)}
        >
          <Typography noWrap>{option.label}</Typography>
        </Button>
      ))}
    </div>
  );
}

function IconSwitch({ options, isActive, handleClick }: IconSwitchProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classnames(classes.wrapper, classes.iconWrapper)}>
      {options.map((option) => (
        <IconButton
          className={classnames(
            classes.option,
            classes.iconOption,
            isActive(option) && classes.activeOption
          )}
          key={option.value.toString()}
          onClick={() => handleClick(option)}
        >
          <option.Icon />
        </IconButton>
      ))}
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      alignItems: "center",
      height: 40,
    },
    defaultWrapper: {
      display: "flex",
      border: `2px solid ${theme.palette.border.main}`,
      borderRadius: 12,
    },
    iconWrapper: {
      marginLeft: -theme.spacing(0.5),
      marginRight: -theme.spacing(0.5),
    },

    option: {
      flex: 1,
      margin: theme.spacing(0.5),
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
      borderRadius: theme.spacing(1),
      textTransform: "none",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1,
      height: 32,
      minWidth: 0,
    },

    iconOption: {
      width: 40,
      height: 40,
      margin: `0 ${theme.spacing(0.5)}px`,
      border: `2px solid  ${theme.palette.border.main}`,
      padding: theme.spacing(0.5),
      fill: "black",
    },

    activeOption: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "& svg > path": {
        fill: "white",
      },

      "&:hover": {
        backgroundColor: "#777",
      },
    },
  });
