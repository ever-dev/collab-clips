import {
  createStyles,
  makeStyles,
  Theme,
  Button,
  Typography,
} from "@material-ui/core";

import NavItem from "./NavItem";
import HomeIcon from "~/assets/img/icons/icon_home.svg";
import LocationIcon from "~/assets/img/icons/icon_location.svg";
import PhotoIcon from "~/assets/img/icons/icon_photo.svg";
import PlayIcon from "~/assets/img/icons/icon_play.svg";
import RefreshIcon from "~/assets/img/icons/icon_refresh.svg";
import ClockIcon from "~/assets/img/icons/icon_clock.svg";
import ThumbIcon from "~/assets/img/icons/icon_thumb.svg";
import StarIcon from "~/assets/img/icons/icon_star.svg";
import PauseIcon from "~/assets/img/icons/icon_pause.svg";
import HeartIcon from "~/assets/img/icons/icon_heart.svg";
import EllipseHIcon from "~/assets/img/icons/icon_ellipse_h.svg";

export default function Navbar() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainSection}>
        <div className={classes.sectionGroup}>
          {mainNavSections.map((section, index) => (
            <NavItem section={section} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.navSection}>
        <hr className={classes.separator} />
        <h5>NAV SECTION</h5>
        <div className={classes.sectionGroup}>
          {otherNavSections.map((section, index) => (
            <NavItem section={section} key={index} />
          ))}
        </div>
      </div>
      <Button className={classes.overflowBtn}>
        <div className={classes.overflow}>
          <EllipseHIcon />
          <Typography className={classes.label}>Overflow</Typography>
        </div>
      </Button>
    </div>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      width: 148,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
        width: 108,
      },
    },

    sectionGroup: {
      padding: 0,
    },

    mainSection: {},

    separator: {
      margin: "30px 0 40px",
    },

    navSection: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    overflowBtn: {
      display: "none",
      borderRadius: theme.spacing(1.5),
      border: `2px solid ${theme.palette.border.main}`,

      [theme.breakpoints.down("md")]: {
        display: "block",
      },
    },

    overflow: {
      height: 64,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },

    label: {
      textTransform: "none",
      marginTop: theme.spacing(1.5),
    },
  });

const mainNavSections = [
  {
    Icon: HomeIcon,
    label: "Section Label",
    isActive: true,
  },
  {
    Icon: LocationIcon,
    label: "Section Label",
  },
  {
    Icon: PhotoIcon,
    label: "Section Label",
  },
  {
    Icon: PlayIcon,
    label: "Section Label",
  },
  {
    Icon: RefreshIcon,
    label: "Section Label",
  },
];

const otherNavSections = [
  {
    Icon: ClockIcon,
    label: "Section Label",
  },
  {
    Icon: ThumbIcon,
    label: "Section Label",
  },
  {
    Icon: StarIcon,
    label: "Section Label",
  },
  {
    Icon: PauseIcon,
    label: "Section Label",
  },
  {
    Icon: HeartIcon,
    label: "Section Label",
  },
];
