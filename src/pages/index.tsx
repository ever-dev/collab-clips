import { useState, useCallback, Fragment } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { Switch, RatingInput, Product, Tabs } from "~/components";

import TiktokIcon from "~/assets/img/icons/icon_tiktok.svg";
import InstagramIcon from "~/assets/img/icons/icon_instagram.svg";
import YoutubeIcon from "~/assets/img/icons/icon_youtube.svg";

function Home() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const [category, setCategory] = useState("Popular");
  const [platform, setPlatform] = useState(["instagram"]);
  const [quality, setQuality] = useState(3);

  const [products, setProducts] = useState(Array.from(new Array(12)));

  const loadMoreProducts = useCallback(() => {
    setProducts((oldProducts) => [
      ...oldProducts,
      ...Array.from(new Array(12)),
    ]);
  }, []);

  return (
    <Box className={classes.container}>
      <Filter
        category={category}
        setCategory={setCategory}
        platform={platform}
        setPlatform={setPlatform}
        quality={quality}
        setQuality={setQuality}
      />
      <Box className={classes.clips} mt={4}>
        <Box className={classes.tabs}>
          <Tabs
            options={categoryOptions}
            value={category}
            onChange={setCategory}
          />
        </Box>
        <Clips products={products} loadMoreProducts={loadMoreProducts} />
      </Box>
    </Box>
  );
}

function Filter({
  category,
  setCategory,
  platform,
  setPlatform,
  quality,
  setQuality,
}: {
  category: string;
  setCategory: (v: string) => any;
  platform: Array<string>;
  setPlatform: (v: Array<string>) => any;
  quality: number;
  setQuality: (v: number) => any;
}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container className={classes.filter} spacing={2}>
      <Grid item className={classes.category} xs={12} sm={6} md={8} lg={6}>
        <Typography className={classes.label}>Categories</Typography>
        <Switch
          type="default"
          isMulti={false}
          onChange={setCategory}
          value={category}
          options={categoryOptions}
        />
      </Grid>

      <Grid item>
        <Typography className={classes.label}>Platforms</Typography>
        <Switch
          type="icon"
          isMulti={true}
          onChange={setPlatform}
          value={platform}
          options={platformOptions}
        />
      </Grid>
      <Grid item>
        <Typography className={classes.label}>Quality</Typography>
        <RatingInput value={quality} onChange={setQuality} />
      </Grid>
    </Grid>
  );
}

interface ClipProps {
  products: Array<any>;
  loadMoreProducts: () => any;
}

function Clips({ products, loadMoreProducts }: ClipProps) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Fragment>
      <Typography className={classes.totalCount}>
        <strong>32,235</strong> clips found. Stupendous!
      </Typography>
      <PerfectScrollbar
        className={classes.scrollable}
        onYReachEnd={loadMoreProducts}
      >
        <Grid container className={classes.clipsContainer} spacing={2}>
          {products.map((_product, index) => (
            <Grid item key={index} xs={6} md={4} lg={3}>
              <Product />
            </Grid>
          ))}
        </Grid>
      </PerfectScrollbar>
    </Fragment>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    filter: {
      alignItems: "center",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexWrap: "nowrap",
      },
    },
    label: {
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: theme.spacing(1.5),
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
    },
    clips: {
      flexGrow: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    totalCount: {
      fontSize: "1.5rem",
      margin: 0,
      lineHeight: "3rem",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    clipsContainer: {
      flexGrow: 1,
    },
    scrollable: {
      overflow: "auto",
      flex: "1 1 0",
      padding: theme.spacing(2),
      margin: -theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    category: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    tabs: {
      width: "100%",
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
  });

const categoryOptions = [
  "Popular",
  "Trending",
  "Movers",
  "Last 48h",
  "Last 24h",
].map((item) => ({ label: item, value: item }));

const platformOptions = [
  {
    Icon: InstagramIcon,
    value: "instagram",
  },
  {
    Icon: TiktokIcon,
    value: "tiktok",
  },
  {
    Icon: YoutubeIcon,
    value: "youtube",
  },
];

export default Home;
