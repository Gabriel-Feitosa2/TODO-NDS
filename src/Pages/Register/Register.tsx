import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoMdCheckboxOutline } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { RegisterContainer, RegisterStyles } from './Register.styles';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FormLabel } from 'react-bootstrap';
import AuthenticationStyles from '../../styles/AuthenticationStyles';

interface FormInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null]),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data) {
    console.log(data);

    axios
      .post('https://api.todo.maracanau.ifce.edu.br/auth/register', data)
      .then((res) => {
        console.log(res);
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
        <Link className="conta" to="/">
          Já possui uma conta?{' '}
        </Link>
      </div>
      <RegisterContainer>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <h1>Nova Conta</h1>
          <Form.Group>
            <FormLabel className="label">Nome</FormLabel>
            <br />
            <Form.Control
              className="input"
              {...register('name')}
              name="name"
              type="text"
              required
            ></Form.Control>
            <p>{errors.name?.message}</p>
          </Form.Group>
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
          <Form.Group>
            <FormLabel className="label">Confirmação de Senha</FormLabel>
            <br />
            <Form.Control
              className="input"
              {...register('passwordConfirm')}
              name="passwordConfirm"
              type="password"
              required
            ></Form.Control>
            <p>{errors.passwordConfirm && 'As senhas devem ser iguais'}</p>
          </Form.Group>
          <button>Cadastrar-se</button>
        </Form>
      </RegisterContainer>
    </RegisterStyles>
  );
};

export default Register;
