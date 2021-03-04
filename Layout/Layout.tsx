import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import Header from './Header/Header';
import { useLocation } from 'react-router';
import Footer from './Footer2/Footer';
import LeftHeader from './Header/LeftHeader/LeftHeader';
interface IProps {}

const Layout: FC<IProps> = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Header
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 80,
          color: 'white',
        }}
      />
      <Box marginTop={location.pathname === '/' ? 0 : 12}>
        <LeftHeader />
        {children}
      </Box>
      <Footer />
    </>
  );
};
export default Layout;
