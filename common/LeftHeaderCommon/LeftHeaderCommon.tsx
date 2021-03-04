import { createStyles, makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'absolute',
      width: '45.5px',
      height: '393.774px',
      left: '20px',
      top: '190px',
      overflow: 'visible',
    },
    div: {
      position: 'absolute',
      width: '45.5px',
      height: '393.774px',
      left: '0px',
      top: '0px',
      overflow: 'visible',
    },
    Trac_39: {
      opacity: 0.5,
      fill: 'rgba(89, 83, 83, 0)',
      stroke: '#FFF',
      strokeWidth: '1px',
      strokeLinejoin: 'miter',
      strokeLinecap: 'butt',
      strokeMiterlimit: 4,
      shapeRendering: 'auto',
    },
    Trac_39_svg: {
      overflow: 'visible',
      position: 'absolute',
      width: '1px',
      height: '393.774px',
      left: '45.5px',
      top: '0px',
      transform: 'matrix(1,0,0,1,0,0)',
    },
  })
);
interface IProps {
  children: ReactNode;
}
const LeftHeaderCommon = ({ children }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.div}>
        <svg className={classes.Trac_39_svg} viewBox="0 0 1 393.774">
          <path
            className={classes.Trac_39}
            d="M 0 0 L 0 393.7737121582031"
          ></path>
        </svg>
        {children}
      </div>
    </div>
  );
};
export default LeftHeaderCommon;
