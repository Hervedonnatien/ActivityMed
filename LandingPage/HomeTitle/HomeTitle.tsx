import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../../../assets/styles/css/homeTitle.css';
import ButtonLink from '../../common/ButtonLink/ButtonLink';
const HomeTitle = () => {
  return (
    <div id="Club_des_Entrepreneurs_de_MED_">
      <span>Club des </span>
      <span style={{ color: 'rgba(190, 18, 12, 1)' }}>Entrepreneurs</span>
      <br />
      <span>de </span>
      <span style={{ color: 'rgba(190, 18, 12,1)' }}>MED</span>
      <span>
        (Madagascar <br />
        Entreprises Développement)
      </span>
      <br />
      <ButtonLink
        other={{
          variant: 'contained',
          size: 'large',
        }}
        link="/information"
      >
        <FormattedMessage id="home.know.more" />
      </ButtonLink>
    </div>
  );
};
export default HomeTitle;
