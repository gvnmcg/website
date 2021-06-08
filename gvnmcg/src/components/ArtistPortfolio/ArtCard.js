import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

// import campaignImg from './myart/campaign.jpg'
// import dndImg from './myart/dnd.jpg'
// import streetImg from './myart/street flesh.jpg'

// const myart = [campaignImg, dndImg, streetImg]

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const useStyles = makeStyles((theme) => ({
    // icon: {
    //   marginRight: theme.spacing(2),
    // },

    // heroContent: {
    //   backgroundColor: theme.palette.background.paper,
    //   padding: theme.spacing(8, 0, 6),
    // },
    // heroButtons: {
    //   marginTop: theme.spacing(4),
    // },

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },

    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  

const ArtCard = (work) => {

    const classes = useStyles();
    const {title, url, image, section} = work;
    let imgFile = undefined;
    if (url){
       imgFile = require("./myart/" + url + ".jpg");
    } else {
       imgFile = require("./myart/dnd.jpg");
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={imgFile}
                title={title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                  {title}
              </Typography>

              <Typography>
                  describe the content.
              </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
}

export default ArtCard;