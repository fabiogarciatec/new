import { Box, Heading, Button, VStack, Text, Container, Grid, Stat, StatLabel, StatNumber, StatHelpText, Icon } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdPeople, MdShoppingCart, MdAttachMoney, MdTrendingUp } from 'react-icons/md';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="lg">Dashboard</Heading>
          <Button onClick={handleLogout} colorScheme="red" size="sm">
            Sair
          </Button>
        </Box>

        <Text fontSize="md" color="gray.600">
          Bem-vindo, {user?.email}
        </Text>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
          <Stat p={4} bg="white" borderRadius="lg" shadow="sm" border="1px" borderColor="gray.100">
            <StatLabel display="flex" alignItems="center">
              <Icon as={MdPeople} mr={2} /> Clientes
            </StatLabel>
            <StatNumber>1,200</StatNumber>
            <StatHelpText>↗︎ 12% desde o último mês</StatHelpText>
          </Stat>

          <Stat p={4} bg="white" borderRadius="lg" shadow="sm" border="1px" borderColor="gray.100">
            <StatLabel display="flex" alignItems="center">
              <Icon as={MdShoppingCart} mr={2} /> Vendas
            </StatLabel>
            <StatNumber>150</StatNumber>
            <StatHelpText>↗︎ 8% desde o último mês</StatHelpText>
          </Stat>

          <Stat p={4} bg="white" borderRadius="lg" shadow="sm" border="1px" borderColor="gray.100">
            <StatLabel display="flex" alignItems="center">
              <Icon as={MdAttachMoney} mr={2} /> Receita
            </StatLabel>
            <StatNumber>R$ 45.000</StatNumber>
            <StatHelpText>↗︎ 15% desde o último mês</StatHelpText>
          </Stat>

          <Stat p={4} bg="white" borderRadius="lg" shadow="sm" border="1px" borderColor="gray.100">
            <StatLabel display="flex" alignItems="center">
              <Icon as={MdTrendingUp} mr={2} /> Crescimento
            </StatLabel>
            <StatNumber>23%</StatNumber>
            <StatHelpText>↗︎ 5% desde o último mês</StatHelpText>
          </Stat>
        </Grid>
      </VStack>
    </Container>
  );
};
