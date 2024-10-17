import { Outlet, useSubmit } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../utils/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (token) {
            return;
        }

        if(token === null) {
            submit(null, {
                method: 'post',
                action: '/logout'
            })
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        setTimeout(() => {
            submit(null, {
                method: 'post',
                action: '/logout'
            })
        }, 1 * 60 * 60 * 1000);
    }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
