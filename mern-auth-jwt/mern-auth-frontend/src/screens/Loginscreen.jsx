import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/Formcontainer';
import {useLoginMutation}  from '../../slices/usersapislice'
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authsclice';
import { toast } from 'react-toastify';
 
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ login , { isError }]  = useLoginMutation()
  const dispatch = useDispatch ()
  if(isError) {
    toast.error("something went wrong")
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
        
      const res= await login({email , password}).unwrap()
      dispatch(setCredentials(res))
      console.log(res);
      toast.success("welcome")
         navigate('/')
    } catch (error) {
     toast.error(error?.data?.error , {
      theme: "dark",
     });
    }
    
  };


  
  
const navigate = useNavigate()




const userinfo = useSelector((state ) => state.auth.userInfo)

useEffect (() => {
if(userinfo) {
  navigate('/')
}
} , [userinfo  , navigate])


  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? <Link to={`/register`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;