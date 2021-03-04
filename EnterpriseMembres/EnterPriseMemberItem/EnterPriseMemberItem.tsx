import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import ImageCompany from '../../../assets/images/asavygasy.png';
import ContactIcon from '@material-ui/icons/Phone';
import LoactionIcon from '@material-ui/icons/LocationCity';
import useEnterpriseMemberStyles from '../../../assets/styles/enterpriseMember.style';
import { useHistory, useRouteMatch } from 'react-router-dom';
const EnterpriseMemberItem = () => {
  const classes = useEnterpriseMemberStyles();
  const history = useHistory();
  const match = useRouteMatch();

  const goToCompanyDetail = () => {
    history.push(`/company/detail`);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={goToCompanyDetail}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Asa vy Gasy"
          image={ImageCompany}
          title="Asa vy Gasy"
        />
        <CardContent className={classes.content}>
          <Box marginBottom={1}>
            <Typography className={classes.name}>Asa vy Gasy</Typography>
            <Typography className={classes.text}>
              <ContactIcon fontSize="small" className={classes.icon} /> 034 80
              637 24
            </Typography>
            <Typography className={classes.text}>
              <LoactionIcon fontSize="small" className={classes.icon} /> Itaosy
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default EnterpriseMemberItem;
