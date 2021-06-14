import {
  Box,
  InputBase,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

import SearchIcon from "~/assets/img/icons/icon_search.svg";

export default function Search() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Box className={classes.wrapper} bgcolor="lightgrey.main">
      <InputBase
        className={classes.input}
        placeholder="Search our library..."
      />
      <IconButton className={classes.searchButton}>
        <SearchIcon className={classes.searchIcon} />
      </IconButton>
    </Box>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      padding: "4px 4px 4px 20px",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
    },

    input: {
      padding: 0,
      fontSize: "1rem",
      lineHeight: "2rem",
      flexGrow: 1,
    },

    searchButton: {
      borderRadius: 8,
      width: theme.spacing(6),
      height: theme.spacing(4),
      background: "white",
    },

    searchIcon: {
      height: 16,
    },
  });
