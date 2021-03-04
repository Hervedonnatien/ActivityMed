import React, { FC, ReactNode } from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
interface IProps {
  icon: ReactNode;
  other: ButtonProps;
}
const ButtonTextIcon: FC<IProps> = ({ icon, children, other }) => {
  return (
    <Button {...other} startIcon={icon} variant="text">
      <Hidden xsDown>{children}</Hidden>
    </Button>
  );
};
export default ButtonTextIcon;
