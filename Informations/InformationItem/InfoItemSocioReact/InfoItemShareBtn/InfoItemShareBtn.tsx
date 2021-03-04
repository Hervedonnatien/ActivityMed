import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ButtonTextIcon from '../../../../common/ButtonTextIcon/ButtonTextIcon';
import { FormattedMessage } from 'react-intl';
const InfoItemShareBtn = () => {
  return (
    <ButtonTextIcon
      icon={<ShareIcon />}
      other={{ color: 'default', size: 'large' }}
    >
      <FormattedMessage id="info.item.share" />
    </ButtonTextIcon>
  );
};
export default InfoItemShareBtn;
