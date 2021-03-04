import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InformationTitle from './InformationTitle/InformationTitle';
import useInfoStyles from '../../assets/styles/information.styles';
import InformationItem from './InformationItem/InformationItem';
import { Client } from '../../prismic-configuration';
import Prismic from '@prismicio/client';
const Informations = () => {
  const classes = useInfoStyles();
  const [infos, setInfosData] = React.useState<any>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.query(
          Prismic.Predicates.at('document.type', 'informations')
        );
        if (response) {
          setInfosData(response?.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Box marginTop={20}>
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <Box>
              <InformationTitle />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            {infos &&
              infos.map((i: any) => (
                <Box key={i?.uid} marginBottom={2}>
                  <InformationItem info={i} />
                </Box>
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Informations;
