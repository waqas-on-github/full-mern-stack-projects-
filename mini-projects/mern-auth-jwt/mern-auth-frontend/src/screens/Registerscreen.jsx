import { useState  , useEffect} from 'react';
import { Link, useActionData } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useRegisterMutation } from '../../slices/usersapislice';
import { useDispatch , useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authsclice';
import { useNavigate } from 'react-router-dom';

import FormContainer from '../components/Formcontainer';
import { toast } from 'react-toastify';
const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registeruser , { isError , isSuccess , isLoading} ] =useRegisterMutation() 
  const userinfo  = useSelector((state ) => state.auth.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect (() => {
    if(userinfo) {
      toast.error("user already registerd")
      navigate('/')
    }
    } , [userinfo, navigate])




  const userdata = {
    name :name , email : email , password : password , confirmPassword : confirmPassword
  }

 



  const submitHandler = async (e) => {
    e.preventDefault();

   if(userdata.password !== userdata.confirmPassword){
    toast.error("password should be same ")
   }
  else {

  
   try {
      const res = await registeruser(userdata).unwrap()
    if (!res.error) {

      dispatch(setCredentials(res))
      
    }
    else {
      toast.error(res.error)
    
    }

   } catch (error) {
    toast.error(error.message)
   }  
  }
  };  

  return (
<FormContainer>  
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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
        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
</FormContainer>
  );
};

export default RegisterScreen;