import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { GrMailOption, GrKey } from "react-icons/gr";
import {
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  Title,
} from "./RegisterPage/RegisterPage.styled";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(authOperations.logIn(data));
    reset();
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign In!</Title>
        <ErrorMessage>
          {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
        </ErrorMessage>
        <Label>
          Email
          <Input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email «example@mail.com»",
              },
            })}
          />
          <GrMailOption
            style={{
              position: "absolute",
              top: "35px",
              left: "8px",
            }}
            size={25}
          />
        </Label>
        <ErrorMessage>
          {errors?.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </ErrorMessage>
        <Label>
          Password
          <Input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <GrKey
            style={{
              position: "absolute",
              top: "35px",
              left: "8px",
            }}
            size={25}
          />
        </Label>
        <ErrorMessage>
          {errors?.password && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
        </ErrorMessage>
        <Button type="submit">Sign In</Button>
      </Form>
    </motion.div>
  );
};

export default Login;
