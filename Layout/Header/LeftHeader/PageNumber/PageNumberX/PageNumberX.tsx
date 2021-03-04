import { createStyles, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: ({ top }: any) => ({
      position: 'absolute',
      width: '45.5px',
      height: '78.895px',
      left: 0,
      top: top,
      overflow: 'visible',
    }),
    Trac_67: {
      overflow: 'visible',
      position: 'absolute',
      width: 2,
      height: '78.895px',
      left: 45.5,
      top: 0,
      transform: ' matrix(1,0,0,1,0,0)',
    },
    Trac_6: {
      fill: 'rgba(89, 83, 83, 0)',
      stroke: '#FFF',
      strokeWidth: 2,
      strokeLinejoin: 'miter',
      strokeLinecap: 'butt',
      strokeMiterlimit: 4,
      shapeRendering: 'auto',
    },
    ID02: {
      left: 0,
      top: 17.5,
      position: 'absolute',
      overflow: 'visible',
      width: 35,
      whiteSpace: 'nowrap',
      fontWeight: 'lighter',
      fontSize: 32,
      color: theme.palette.background.paper,
    },
  })
);
interface IProps {
  x: string;
  top: number;
}
const PageNumberX: FC<IProps> = ({ x, top }) => {
  const classes = useStyles({ top });
  if (x === '') {
    return null;
  }
  return (
    <div className={classes.root}>
      <svg className={classes.Trac_67} viewBox="0 0 2 78.895">
        <path className={classes.Trac_6} d="M 0 0 L 0 78.8953857421875"></path>
      </svg>
      <div className={classes.ID02}>
        <span>{x}</span>
      </div>
    </div>
  );
};
export default PageNumberX;
