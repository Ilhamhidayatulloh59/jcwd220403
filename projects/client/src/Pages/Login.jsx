import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Button,
  Heading,
  Divider,
  Text,
  HStack,
} from '@chakra-ui/react';

import { useState, useContext } from 'react';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import AuthContext from '../context/AuthProvider';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../Components/TextField';

export default function LoginCard() {
  const { setAuth } = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleRedirect() {
    setInterval(() => {
      setLoginSuccess(true);
    }, 3000);
  }

  const handleSubmit = async (data) => {
    try {
      const res = axios.post('/login', data, {
        withCredentials: true,
        headers: { 'content-Type': 'application/json' },
      });

      const toastify = await toast.promise(
        res,
        {
          pending: 'Login on progress...',
          success: {
            render({ data }) {
              return `Login success, welcome ${data.data.userName}`;
            },
          },
          error: {
            render({ data }) {
              return `${data.response.data.message}`;
            },
          },
        },
        { position: toast.POSITION.TOP_CENTER }
      );

      const { userToken, userEmail } = toastify.data;
      setAuth({ userToken, userEmail });
      handleRedirect();
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return loginSuccess ? (
    <Navigate to='/' />
  ) : (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required('Password required')
          .min(8, 'Password is too short'),
        email: Yup.string().email('invalid email').required('email required'),
      })}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <section>
          <ToastContainer />
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={
              'url(https://source.unsplash.com/random/1920x1080/?house) center/cover no-repeat'
            }
          >
            <Stack
              as='form'
              spacing={8}
              mx={'auto'}
              maxW={'xl'}
              py={5}
              px={6}
              onSubmit={formik.handleSubmit}
            >
              <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
                <Stack align={'center'} marginBottom={10}>
                  <Heading fontSize={'4xl'}>Login</Heading>
                </Stack>
                <Stack spacing={4}>
                  <TextField
                    require={true}
                    label='Email'
                    name='email'
                    placeholder='enter email'
                    type='email'
                  />

                  <TextField
                    require={true}
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='enter password'
                  />
                  <Stack spacing={5}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}
                      gap={10}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Text color={'blue.400'}>
                        <RouterLink to='/forgotPassword'>
                          Forgot password?
                        </RouterLink>
                      </Text>
                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type='submit'
                      variant='outline'
                      colorScheme='teal'
                    >
                      Login
                    </Button>
                    <Divider />
                    <HStack>
                      <Button colorScheme='red' leftIcon={<FaGoogle />}>
                        Google
                      </Button>
                      <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                        Facebook
                      </Button>
                      <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                        Twitter
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </section>
      )}
    </Formik>
  );

  //   <Navigate to='/' />
  // ) : (
  //   <section>
  //     <ToastContainer />
  //     <Flex
  //       minH={'100vh'}
  //       align={'center'}
  //       justify={'center'}
  //       bg={
  //         'url(https://source.unsplash.com/random/1920x1080/?house) center/cover no-repeat'
  //       }
  //     >
  //       <Stack
  //         spacing={8}
  //         mx={'auto'}
  //         maxW={'xl'}
  //         py={5}
  //         px={6}
  //         // backdropFilter='auto'
  //         // backdropBlur='20px'
  //         // rounded='xl'
  //       >
  //         <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
  //           <Stack align={'center'} marginBottom={10}>
  //             <Heading fontSize={'4xl'}>Login</Heading>
  //           </Stack>
  //           <Stack spacing={4}>
  //             <FormControl id='email' isRequired>
  //               <FormLabel>Email address</FormLabel>
  //               <Input type='email' name='email' onChange={handleChange} />
  //             </FormControl>
  //             <FormControl id='password' isRequired>
  //               <FormLabel>Password</FormLabel>
  //               <Input
  //                 type='password'
  //                 name='password'
  //                 onChange={handleChange}
  //               />
  //             </FormControl>
  //             <Stack spacing={10}>
  //               <Stack
  //                 direction={{ base: 'column', sm: 'row' }}
  //                 align={'start'}
  //                 justify={'space-between'}
  //                 gap={10}
  //               >
  //                 <Checkbox>Remember me</Checkbox>
  //                 <Text color={'blue.400'}>
  //                   <RouterLink to='/forgotPassword'>
  //                     Forgot password?
  //                   </RouterLink>
  //                 </Text>
  //               </Stack>
  //               <Button
  //                 bg={'blue.400'}
  //                 color={'white'}
  //                 _hover={{
  //                   bg: 'blue.500',
  //                 }}
  //                 onClick={handleSubmit}
  //               >
  //                 Login
  //               </Button>
  //             </Stack>
  //             <Divider />
  //             <HStack>
  //               <Button colorScheme='red' leftIcon={<FaGoogle />}>
  //                 Google
  //               </Button>
  //               <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
  //                 Facebook
  //               </Button>
  //               <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
  //                 Twitter
  //               </Button>
  //             </HStack>
  //           </Stack>
  //         </Box>
  //       </Stack>
  //     </Flex>
  //   </section>
  // );
}
