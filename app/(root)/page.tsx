import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedin = await getLoggedInUser();
  console.log(loggedin)

  return (
    <div className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedin?.name || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.75}
          />

          
        </header>

        RECENT TRANSACTIONS

      </div>

      <RightSideBar
       user= {loggedin}
       transactions={[]}
       banks={[{},{}]}
       />
    </div>
  )
}

export default Home
