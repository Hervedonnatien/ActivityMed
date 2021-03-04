import React from 'react';
import { useLocation } from 'react-router';
import LeftHeaderCommon from '../../../../common/LeftHeaderCommon/LeftHeaderCommon';
import PageNumberX from './PageNumberX/PageNumberX';

const PageNumber = () => {
  const location = useLocation();
  let x = '';
  let top = 0;
  switch (location.pathname) {
    case '/':
      x = '01';
      top = 0;
      break;
    case '/company':
      x = '02';
      top = 78;
      break;
    case '/activity':
      x = '03';
      top = 157;
      break;
    case '/information':
      x = '04';
      top = 234;
      break;
    case '/blog':
      x = '05';
      top = 315;
      break;
    default:
      x = '';
      top = 0;
      break;
  }
  return (
    <LeftHeaderCommon>
      <PageNumberX top={top} x={x} />
    </LeftHeaderCommon>
  );
};
export default PageNumber;
