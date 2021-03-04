import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import './Blog.css';
import PlusIcon from '@material-ui/icons/Add';
import FbIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InIcon from '@material-ui/icons/LinkedIn';
import FlecheIcon from '@material-ui/icons/DoubleArrow';
import { Client } from '../../prismic-configuration';
import Prismic from 'prismic-javascript';
import { FormattedMessage } from 'react-intl';
import { RichText } from 'prismic-reactjs';
const Blog = () => {
  const [blogs, setBlogsData] = React.useState<any>([]);
  const [latestBlog, setLatestBlog] = React.useState<any>({});
  const [secondBlog, setSecondBlog] = React.useState<any>({});
  React.useEffect(() => {
    console.log('atoa ');
    const fetchData = async () => {
      try {
        console.log('atoa be ');

        const response = await Client.query(
          Prismic.Predicates.at('document.type', 'blogs')
        );
        console.log('res', response);
        console.log('atoa be be ');

        if (response) {
          console.log('atoa be  reponse');

          setBlogsData(response.results);
          setLatestBlog(response.results[0]);
          setSecondBlog(response.results[1]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log('data', blogs);
  console.log('latest', latestBlog);

  return (
    <>
      <div id="blog">
        <br />
        <br />

        <Grid container justify="flex-end">
          <Grid item md={8} sm={11} xs={11}>
            <div id="addButtonDiv">
              {/* <Button
                className="iconButton"
                color="secondary"
                variant="contained"
              >
                <PlusIcon />
              </Button> */}
              <span id="addButtonLabel">
                <FormattedMessage id="blog.pub" />
              </span>
            </div>

            <Divider
              style={{
                padding: 4,
                background: 'red',
                marginBottom: 16,
                marginLeft: 8,
              }}
            />
            <Grid container justify="flex-start">
              <Grid item md={7} sm={12} xs={12}>
                <div className="div">
                  <img
                    className="postIMG"
                    alt={latestBlog?.data?.image.alt}
                    src={latestBlog?.data?.image.url}
                  />
                </div>
              </Grid>

              <Grid item md={4} sm={12} xs={12}>
                <div className="div">
                  <div className="postTitle">
                    <FormattedMessage id="blog.description" />
                  </div>
                  <br />

                  <div className="postText">
                    <span>
                      {RichText.asText(latestBlog?.data?.description)}
                    </span>
                  </div>

                  <div id="postMoreButton">
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<FlecheIcon />}
                    >
                      <FormattedMessage id="blog.know.more" />
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item md={7} sm={12} xs={12}>
                <div className="div">
                  <img
                    className="postIMG"
                    alt={secondBlog?.data?.image.alt}
                    src={secondBlog?.data?.image.url}
                  />
                </div>
              </Grid>

              <Grid item md={4} sm={12} xs={12}>
                <div className="div">
                  <div className="postTitle">
                    <FormattedMessage id="blog.description" />
                  </div>
                  <br />

                  <div className="postText">
                    <span>
                      {RichText.asText(secondBlog?.data?.description)}
                    </span>
                  </div>

                  <div id="postMoreButton">
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={<FlecheIcon />}
                    >
                      <FormattedMessage id="blog.know.more" />
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                {/* <div className="comments">
                  <span>Commentaires</span>
                </div>
                <div className="div">
                  <List /*className={classes.root}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Lorem ispum"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Lorem ispum"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Cindy Baker"
                          src="/static/images/avatar/3.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Lorem ispum"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </div> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} sm={11} xs={11}>
            <div className="div">
              <Box marginBottom={2} padding="0px 8px 8px 8px">
                {/* <span>Thème</span>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  // value={currency}
                  // onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  fullWidth
                >
                  <option value="">None</option>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </TextField> */}
              </Box>
              <div id="recentPosts">
                <span>
                  <FormattedMessage id="blog.recent.posts" />
                </span>
              </div>

              <List /*className={classes.root}*/>
                {blogs &&
                  blogs.map((blog: any) => (
                    <>
                      <ListItem key={blog.uid} alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt={blog.data.avatar.alt}
                            src={blog.data.avatar.url}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={blog.data.title[0].text}
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                // className={classes.inline}
                                color="textPrimary"
                              >
                                {blog.data.name[0].text}
                              </Typography>
                              <span
                                style={{
                                  marginLeft: 4,
                                  lineHeight: '1.5em',
                                  height: '3em',
                                  overflow: 'hidden',
                                }}
                              >
                                {blog.data.shortdescription[0].text}
                              </span>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </>
                  ))}
              </List>
            </div>
            <div id="recentPosts">
              <span>SUIVEZ-NOUS SUR</span>
            </div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FbIcon />
                </ListItemIcon>
                <ListItemText primary="Facebook" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InIcon />
                </ListItemIcon>
                <ListItemText primary="Linkedin" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemText primary="Twitter" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Blog;
