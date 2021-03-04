import React from 'react';
import ButtonTextIcon from '../../../../common/ButtonTextIcon/ButtonTextIcon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FormattedMessage } from 'react-intl';
const InfoLikeBtn = () => {
  return (
    <ButtonTextIcon
      icon={<FavoriteIcon />}
      other={{ color: 'default', size: 'large' }}
    >
      <FormattedMessage id="info.item.like" /> <span> (22)</span>
    </ButtonTextIcon>
  );
};
export default InfoLikeBtn;
