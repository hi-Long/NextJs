import { getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import UserProfile from '../components/profile/user-profile';

const ProfilePage = props => {
  const session = props.session

  return <UserProfile />;
}

export default ProfilePage;

export const getServerSideProps = async context => {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  } else {
    return {
      props: { session }
    }
  }
}