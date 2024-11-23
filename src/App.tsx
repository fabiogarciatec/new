import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import '@fontsource/inter';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Container maxW="container.xl" p={0}>
          <Box minH="100vh" bg="gray.50">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
        </Container>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
