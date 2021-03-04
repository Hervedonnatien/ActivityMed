import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonLink from '../../common/ButtonLink/ButtonLink';
import { FormattedMessage } from 'react-intl';
import ButtonTextIcon from '../../common/ButtonTextIcon/ButtonTextIcon';
import CategoryIcon from '@material-ui/icons/Category';
import { Grid } from '@material-ui/core';
const EnterpriseCategories = () => {
  return (
    <Box display="flex" alignItems="center">
      <Grid container>
        <Grid item>
          <ButtonLink
            link=""
            other={{
              variant: 'contained',
              style: { borderRadius: 0, margin: 'auto' },
            }}
          >
            <FormattedMessage id="enterprise.members.all" />
            (107)
          </ButtonLink>
        </Grid>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <Grid key={i} item>
            <ButtonTextIcon
              key={i}
              //link=""
              other={{
                variant: 'contained',
                style: { borderRadius: 0, margin: '8px auto' },
                color: 'default',
              }}
              icon={<CategoryIcon />}
            >
              Categorie {i + 1} ({(14 * Math.random()).toFixed(0)})
            </ButtonTextIcon>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default EnterpriseCategories;
