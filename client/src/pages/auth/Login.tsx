import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { useLoginUserMutation } from "../../redux/api/authAPI";
import { setUser } from "../../redux/reducers/userSlice";
import { RootState } from "../../redux/store";

//GoogleLogin
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

// Chakra UI
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
  AbsoluteCenter,
  useToast,
  Text,
} from "@chakra-ui/react";

// Custom Components
import CustomButton from "../../common/components/CustomButton";

//Misc Imports
import { BsGoogle, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = () => {
  //Check if user is already logged in
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginUserMutation();

  const handleLogin = async () => {
    toast({
      position: "top",
      status: "info",
      title: "Logging you in...",
      duration: 800,
    });
    if (!password) {
      toast({
        position: "top",
        status: "error",
        title: "Password Missing",
        description: "Please enter a password.",
        duration: 3000,
        isClosable: true,
      });
    } else {
      try {
        const response = await login({ username, password }).unwrap();
        console.log(response);
        toast({
          position: "top",
          status: "success",
          title: "Login Successful",
          description: "You have been logged in successfully. Redirecting...",
          duration: 1500,
          isClosable: true,
        });
        setTimeout(() => {
          dispatch(setUser(response));
          navigate("/");
        }, 1500);
      } catch (error: any) {
        toast({
          position: "top",
          status: "error",
          title: "Login Failed",
          description: `${error.error}`,
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const backendURL = process.env.REACT_APP_BACKEND_URL!;

  const handleGoogleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      axios({
        method: "POST",
        url: `${backendURL}/users/google/`,
        data: {
          code: codeResponse.code,
        },
      })
        .then((response) => {
          toast({
            position: "top",
            status: "success",
            title: "Login Successful",
            description: "You have been logged in successfully. Redirecting...",
            duration: 1500,
          });
          setTimeout(() => {
            dispatch(setUser(response.data));
            navigate("/");
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Text fontSize="3xl" lineHeight="50px" fontWeight="semibold">
          Welcome Back!
        </Text>
        <Text fontSize="md" fontWeight="normal" mt={-1}>
          We are happy to see you
        </Text>
        <Box
          bgColor="white"
          rounded="lg"
          border="2px solid grey"
          p={6}
          mt={8}
          boxShadow="base"
          maxHeight="700px"
          maxWidth="600px"
          width="400px"
        >
          <FormControl id="username" mb={3}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              bgColor="white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb={3}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Link to="/auth/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
          <Flex justifyContent="center">
            <CustomButton
              text="Login"
              onClick={handleLogin}
              isLoading={isLoading}
              colorScheme="primary"
              variant="border"
              width="100%"
              mt={4}
              py={4}
            />
          </Flex>
          <Box position="relative" padding="8" px={0}>
            <Divider colorScheme="black" opacity={1} />
            <AbsoluteCenter bg="white" px="4">
              OR
            </AbsoluteCenter>
          </Box>
          <CustomButton
            icon={<BsGoogle />}
            width="100%"
            variant="border-icon"
            colorScheme="primary"
            text="Login with Google"
            onClick={() => {
              toast({
                position: "top",
                status: "info",
                title: "Redirecting to Google..",
                duration: 1500,
              });
              handleGoogleLogin();
            }}
          />
          <Flex justify="center" mt={4}>
            <Link to="/auth/signup">Sign up for a new account</Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
