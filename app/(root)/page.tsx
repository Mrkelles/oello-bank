import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedin = {firstName: 'Kelvin', lastName: 'Ebima', email: 'kelvin@mail.com' };

  return (
    <div className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedin?.fiirstName || 'Guest'}
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
