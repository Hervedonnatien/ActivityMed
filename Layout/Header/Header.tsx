import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import useHeaderStyles from '../../../assets/styles/header.styles';
import clsx from 'clsx';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ButtonLink from '../../common/ButtonLink/ButtonLink';
import IntlButton from './IntlButton/IntlButton';
import RightHeader from './RightHeader/RightHeader';
import { useMediaQuery, useTheme } from '@material-ui/core';

interface IProps {
  color: string;
  fixed: boolean;
  absolute?: boolean;
  changeColorOnScroll: {
    height: number;
    color: string;
  };
  rightLinks?: ReactNode;
  leftLinks?: ReactNode;
}
const Header: FC<IProps> = ({
  color,
  changeColorOnScroll,
  children,
  absolute,
  fixed,
  rightLinks,
  leftLinks,
}) => {
  const location = useLocation();
  const [isOpac, setIsOpac] = useState(false);
  const classes = useHeaderStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  React.useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    if (isSm) {
      setMobileOpen(!mobileOpen);
    }
  };
  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      setIsOpac(true);
    } else {
      setIsOpac(false);
    }
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.appBarOpac]: isOpac,
    [classes.appBarTransparent]: !isOpac,
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {/* <Hidden smUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden> */}

        {/* <Box display="flex" alignItems="center" justifyContent="space-around"> */}
        <img
          className={classes.MEDLog}
          src="/MEDLog.png"
          srcSet="/MEDLog.png 1x, /MEDLog@2x.png 2x"
          onClick={handleDrawerToggle}
        />
        {/* <div id="Club_des_Entrepreneurs_de_MED__b">
            <span>
              Club des Entrepreneurs
              <br />
              de MED
            </span>
          </div> */}
        <Box className={classes.leftLink}>
          <RightHeader />
        </Box>
        <Box className={classes.flex} />
        <Box p={2}>
          <Box>
            <ButtonLink
              link="/signup"
              other={{
                className: classes.btnLink,
                style: {
                  justifyContent: 'flex-end',
                },
              }}
            >
              <FormattedMessage id="header.signup.link" />
            </ButtonLink>
            {/* <ButtonLink
              link="/singin"
              other={{
                className: clsx(classes.btnLink, {
                  //    [classes.primaryColor]: location.pathname !== '/signin',
                }),
              }}
            >
              <FormattedMessage id="header.signin.link" />
            </ButtonLink> */}
          </Box>
          <Box marginTop={1} display="flex" justifyContent="flex-end">
            <IntlButton />
          </Box>
        </Box>
        {/* </Box> */}

        <Hidden smDown implementation="css">
          {children}
        </Hidden>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <div className={classes.appResponsive}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <div className={classes.drawerlocale}>
            {leftLinks}
            {rightLinks}
          </div>
          <div className={classes.drawerSocial}>
            <FacebookIcon />
            <LinkedinIcon />
            <MailIcon />
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
};
export default Header;
