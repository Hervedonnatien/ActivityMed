import { ButtonProps } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router';

interface IProps {
  link: string;
  other?: ButtonProps;
}

const ButtonLink: FC<IProps> = ({ link, children, other }) => {
  const location = useLocation();
  const history = useHistory();
  const handlePush = () => {
    history.push(link);
  };
  return (
    <Button
      onClick={handlePush}
      color="primary"
      variant={location.pathname === link ? 'contained' : 'text'}
      {...other}
      size="large"
    >
      {children}
    </Button>
  );
};
export default ButtonLink;
