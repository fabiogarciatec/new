import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserList from './pages/users/UserList';
import CompanyList from './pages/companies/CompanyList';
import ProductList from './pages/products/ProductList';

const App = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <Flex>
                    <Sidebar />
                    <Box ml="60" w="calc(100% - 15rem)" minH="100vh" bg="gray.50">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/companies" element={<CompanyList />} />
                        <Route path="/products" element={<ProductList />} />
                      </Routes>
                    </Box>
                  </Flex>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
