import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, HStack } from '@chakra-ui/react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Produto A', price: 99.99, stock: 50 },
    { id: 2, name: 'Produto B', price: 149.99, stock: 30 },
  ];

  return (
    <Box p={8}>
      <Heading mb={6}>Produtos</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Preço</Th>
            <Th>Estoque</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr key={product.id}>
              <Td>{product.name}</Td>
              <Td>R$ {product.price.toFixed(2)}</Td>
              <Td>{product.stock}</Td>
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

export default ProductList;
