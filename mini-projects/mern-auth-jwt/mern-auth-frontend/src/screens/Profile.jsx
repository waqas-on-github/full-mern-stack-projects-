import { useState  , useEffect} from 'react';
import { Form, Button, } from 'react-bootstrap';
import { useUpdateMutation } from '../../slices/usersapislice';
import { useDispatch , useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authsclice';
import { useNavigate } from 'react-router-dom';

import FormContainer from '../components/Formcontainer';
import { toast } from 'react-toastify';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userinfo  = useSelector((state ) => state.auth.userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()
   
   const  [ update , {res}] = useUpdateMutation()

 
useEffect (() => {
 setName(userinfo?.name)
 setEmail(userinfo?.email)
}  , [userinfo.name , userinfo.email])



 



const submitHandler = async (e) => {
    e.preventDefault();
  
   
   try {
       
    const res = await  update( { _id : userinfo.id ,  name , email, password }).unwrap()
    dispatch(setCredentials(res))
    navigate('/login')

   } catch (error) {
    toast.error(error.message )
   }
    


  
  };  

  return (
<FormContainer>  
      <h1>Update </h1>
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
          Update 
        </Button>
      </Form>

     
</FormContainer>
  );
};

export default Profile;