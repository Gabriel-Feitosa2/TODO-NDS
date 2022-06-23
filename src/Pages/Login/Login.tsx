import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { RegisterContainer, RegisterStyles } from './Login.styles';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FormLabel } from 'react-bootstrap';
import AuthenticationStyles from '../../styles/AuthenticationStyles';

interface FormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  async function handleSignIn(data) {
    console.log(data);

    axios
      .post('https://api.todo.maracanau.ifce.edu.br/auth/login', data)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        navigate('/tarefas');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <RegisterStyles>
      <AuthenticationStyles />
      <h2>
        <IoMdCheckboxOutline />
        TO<strong>DO</strong>
      </h2>
      <div className="header">
        <Link className="conta" to="/register">
          Não possui uma conta?{' '}
        </Link>
      </div>
      <RegisterContainer>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <h1>Autenticação</h1>
          <Form.Group>
            <FormLabel className="label">Email</FormLabel>
            <br />
            <Form.Control
              className="input"
              {...register('email')}
              name="email"
              type="email"
              required
            ></Form.Control>
            <p>{errors.email?.message}</p>
          </Form.Group>
          <Form.Group>
            <FormLabel className="label">Senha</FormLabel>
            <br />
            <Form.Control
              className="input"
              {...register('password')}
              name="password"
              type="password"
              required
            ></Form.Control>
            <p>{errors.password?.message}</p>
          </Form.Group>
          <button>Entrar</button>
        </Form>
      </RegisterContainer>
    </RegisterStyles>
  );
};

export default Register;
