import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, HStack } from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const CompanyList = () => {
  const companies = [
    { id: 1, name: 'Tech Corp', cnpj: '12.345.678/0001-90', status: 'Ativo' },
    { id: 2, name: 'Digital Solutions', cnpj: '98.765.432/0001-10', status: 'Ativo' },
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Empresas</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>CNPJ</Th>
            <Th>Status</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {companies.map((company) => (
            <Tr key={company.id}>
              <Td>{company.name}</Td>
              <Td>{company.cnpj}</Td>
              <Td>{company.status}</Td>
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

export default CompanyList;
