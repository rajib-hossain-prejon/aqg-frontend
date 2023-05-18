import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" " main"`,
        }}
      >
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>

        <GridItem area='main'>
          <Box
            bgGradient='linear(to-r, green.300, teal.300)'
            minH='100vh'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Box m={5} p={8} bg='white' borderRadius={8} maxW='1000px' w='100%'>
              <Outlet></Outlet>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
