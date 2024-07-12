import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: 'A-0002',
      password: 'admin123',
    },
  });

  const [login, { error,  }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    login(userInfo);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register('userId')} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;