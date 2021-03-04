import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../../LandingStyle.css';
import FbIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
const Body = () => {
  return (
    <div id="Groupe_410">
      <div id="NOTRE_OBJECTIFS">
        <FormattedMessage id="home.objectif.title" />
        <br />
        <svg className="Ligne_30" viewBox="0 0 86 5">
          <path id="Ligne_30" d="M 0 0 L 86 0"></path>
        </svg>
      </div>

      <Grid container justify="center">
        <Grid item md={4} sm={6} xs={10}>
          <Box display="flex">
            <div id="ID01" className="objectifID">
              <span>01.</span>
            </div>
            <div id="Lorem_Ipsum_Dolor_sit_amet" className="objectifSubTitle">
              <span>
                Lorem
                <br />
                Ipsum Dolor sit amet
              </span>
            </div>
          </Box>
          <Box
            id="Lorem_ipsum_dolor_sit_amet_con_cw"
            className="objectifContenu"
            p={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Box>
        </Grid>
        <Grid item md={4} sm={6} xs={10}>
          <Box display="flex">
            <div id="ID02" className="objectifID">
              <span>02.</span>
            </div>
            <div id="Lorem_Ipsum_Dolor_sit_amet" className="objectifSubTitle">
              <span>
                Lorem
                <br />
                Ipsum Dolor sit amet
              </span>
            </div>
          </Box>
          <Box
            id="Lorem_ipsum_dolor_sit_amet_con_cw"
            className="objectifContenu"
            p={2}
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </Box>
        </Grid>
        <Grid item md={4} sm={6} xs={10}>
          <Box display="flex">
            <div id="ID03" className="objectifID">
              <span>03.</span>
            </div>
            <div id="Lorem_Ipsum_Dolor_sit_amet" className="objectifSubTitle">
              <span>
                Lorem
                <br />
                Ipsum Dolor sit amet
              </span>
            </div>
          </Box>
          <Box
            id="Lorem_ipsum_dolor_sit_amet_con_cw"
            className="objectifContenu"
            p={2}
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </Box>
        </Grid>
      </Grid>
      {/* <Box
        style={{
          background: 'rgba(244, 249, 255, 1)',
          margin: 20,
        }}
        className="id6_root"
      >
        <Grid container justify="center">
          <Grid item md={6} xs={12}>
            <Box display="flex" position="relative" className="box_id6">
              <Box
                style={{
                  top: '40%',
                  left: '10%',
                  position: 'absolute',
                  color: '#FFF',
                }}
              >
                <Typography
                  style={{
                    overflow: 'visible',
                    lineHeight: 2,
                    //marginTop: -9.5,
                    // textAlign: 'center',
                    fontFamily: 'Bahnschrift',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 35,
                    color: '#FFF',
                    display: 'flex',
                  }}
                >
                  <FormattedMessage id="home.about.title" />
                  <svg
                    style={{
                      background: '#FFF',
                    }}
                    viewBox="0 0 200 3"
                  >
                    <path d="M 200 0 L 0 0"></path>
                  </svg> 
                </Typography>
                <span>
                  <FbIcon />
                </span>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <span>
                  <TwitterIcon />
                </span>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <span>
                  <LinkedInIcon />
                </span>
              </Box>
              <img
                id="ID6"
                src="ID6@2x.png"
                // srcSet="ID6.png 1x, ID6@2x.png 2x"
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box p={5}>
              <Box
                style={{
                  overflow: 'visible',
                  lineHeight: 2,
                  //marginTop: -9.5,
                  textAlign: 'left',
                  fontFamily: 'Bahnschrift',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 35,
                  color: 'rgba(26, 153, 1, 1)',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </Box>
              <Box
                className="objectifContenu"
                // id="Lorem_ipsum_dolor_sit_amet_con_cw"
                //textAlign="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </div>
  );
};

export default Body;
