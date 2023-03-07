import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  const users = [
    {
      userName: 'yagoid',
      name: 'Yago Iglesias Díaz',
      isFollowing: true
    },
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: false
    },
    {
      userName: 'pheralb',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: false
    }
  ]

  return (
    <>
      <section className='App'>
        {
          users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName} 
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            >
            </TwitterFollowCard>
          ))
        }
      </section>
    </>
  )
}

export default App
