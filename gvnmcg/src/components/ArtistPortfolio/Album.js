import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import Header from "./Header";
import ArtCard from "./ArtCard";

import campaignImg from "./myart/campaign.jpg";
import dndImg from "./myart/dnd.jpg";
import streetImg from "./myart/street flesh.jpg";

// const myart = [campaignImg, dndImg, streetImg];

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  // icon: {
  //   marginRight: theme.spacing(2),
  // },
  headerContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  // heroButtons: {
  //   marginTop: theme.spacing(4),
  // },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sections = [
  { title: "Protraits", url: "/portraits" },
  { title: "Paintings", url: "/paintings" },
  { title: "Murals", url: "/murals" },
];

const sectionIx = {
  painting: 1,
  portrait: 2,
  mural: 3,
};

const works = [
  {
    title: "D&D Campaign",
    url: "campaign",
    image: campaignImg,
    section: "paintings",
  },
  { 
    title: "Dice Roll", 
    url: "dnd", 
    image: dndImg, 
    section: "portrait" 
  },
  {
    title: "Street Flesh",
    url: "street flesh",
    image: streetImg,
    section: "mural",
  },
];

const Album = () => {
  const classes = useStyles();

  console.log(works.length);
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.headerContent}>
          <Container maxWidth="sm">
            <Header title="Art Portfolio" sections={sections} />
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Switch>
              {works.map((work) => (
                <Grid item key={work} xs={12} sm={6} md={4}>
                  <ArtCard work={work} />
                </Grid>
              ))}
            </Switch>
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Album;
