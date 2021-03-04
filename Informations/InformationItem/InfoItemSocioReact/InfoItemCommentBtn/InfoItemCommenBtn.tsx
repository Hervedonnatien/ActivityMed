import React from 'react';
import { FormattedMessage } from 'react-intl';
import ButtonTextIcon from '../../../../common/ButtonTextIcon/ButtonTextIcon';
import CommentIcon from '@material-ui/icons/Comment';
const InfoItemCommentBtn = () => {
  return (
    <ButtonTextIcon
      icon={<CommentIcon />}
      other={{ color: 'default', size: 'large' }}
    >
      <FormattedMessage id="info.item.comment" /> <span> (3)</span>
    </ButtonTextIcon>
  );
};
export default InfoItemCommentBtn;
