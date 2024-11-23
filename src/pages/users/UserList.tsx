import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, HStack } from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const UserList = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Usuários</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Função</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                <HStack spacing={2}>
                  <Button size="sm" leftIcon={<FiEdit2 />} colorScheme="blue">
                    Editar
                  </Button>
                  <Button size="sm" leftIcon={<FiTrash2 />} colorScheme="red">
                    Excluir
                  </Button>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserList;
