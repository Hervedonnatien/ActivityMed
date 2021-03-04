import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useEnterpriseMemberStyles from '../../assets/styles/enterpriseMember.style';
import EnterpriseMemberTitle from './EntrepriseMemberTitle/EnterpriseMemberTitle';
import EnterpriseCategories from './EnterpriseCategories/EnterpriseCategories';
import EnterpriseMemberItem from './EnterPriseMemberItem/EnterPriseMemberItem';
import { useParams, useRouteMatch } from 'react-router-dom';
const EnterpriseMembers = () => {
  const classes = useEnterpriseMemberStyles();
  const match = useRouteMatch();
  return (
    <Box>
      <Grid container justify="center" alignItems="center">
        <Grid item md={10}>
          <Box>
            <EnterpriseMemberTitle />
          </Box>
        </Grid>
        <Grid md={10} item>
          <EnterpriseCategories />
        </Grid>
        <Grid md={10} item>
          <Box className={classes.overflow}>
            <Grid container justify="center" alignItems="center">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                <Grid item md={3} sm={4} xs={6}>
                  <EnterpriseMemberItem key={i} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EnterpriseMembers;
