import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonLink from '../../../common/ButtonLink/ButtonLink';
import Hidden from '@material-ui/core/Hidden';
import { FormattedMessage } from 'react-intl';
import useHeaderStyle from '../../../../assets/styles/header.styles';
const RightHeader = () => {
  const classes = useHeaderStyle();
  return (
    <Hidden smDown implementation="css">
      <ButtonLink
        link="/"
        other={{
          className: classes.btnLink,
        }}
      >
        <FormattedMessage id="home.title" />
      </ButtonLink>
      <ButtonLink
        link="/company"
        other={{
          className: classes.btnLink,
        }}
      >
        <FormattedMessage id="header.enterprise.link" />
      </ButtonLink>
      <ButtonLink
        link="/activity"
        other={{
          className: classes.btnLink,
        }}
      >
        <FormattedMessage id="header.activity.link" />
      </ButtonLink>
      <ButtonLink
        link="/information"
        other={{
          className: classes.btnLink,
        }}
      >
        <FormattedMessage id="header.informations.link" />
      </ButtonLink>
      <ButtonLink
        link="/blog"
        other={{
          className: classes.btnLink,
        }}
      >
        <FormattedMessage id="header.blog.link" />
      </ButtonLink>
    </Hidden>
  );
};
export default RightHeader;
