import Cookies from 'universal-cookie';

const cookies = new Cookies()

export const getToken = () => {
  const token = cookies.get('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  return config
}