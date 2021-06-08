import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import {featuredPosts, mainFeaturedPost, posts} from './blogposts';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Travel', url: '#' },
  { title: 'Music', url: '#' },
  { title: 'Guitar', url: '#' },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const Blog = () => {

    const classes = useStyles();
    
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header 
            title="Blog" 
            sections={sections} 
        />

        <main>
          <MainFeaturedPost 
            post={mainFeaturedPost} 
          />
          <Grid 
            container 
            spacing={4}
          >
            {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid 
            container 
            spacing={5} 
            className={classes.mainGrid}
            >
            <Main 
                title="From the firehose" 
                posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              />
          </Grid>
        </main>

      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
export default Blog;