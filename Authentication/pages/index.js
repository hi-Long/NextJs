import { getSession } from 'next-auth/client';
import StartingPageContent from '../components/starting-page/starting-page';

function HomePage() {
  return <StartingPageContent />;
}

export default HomePage;

// export const getServerSideProps = async context => {
//   const session = getSession({ req: context.req })
//   if (!session) {

//   }
// }
