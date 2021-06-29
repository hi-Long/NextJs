import { getSession, useSession } from 'next-auth/client';
import AuthForm from '../components/auth/auth-form';

function AuthPage(props) {
  return <AuthForm />;
}

export default AuthPage;

export const getServerSideProps = async context => {
  const session = await getSession({ req: context.req })

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  } else {
    return { props: {} }
  }
}

