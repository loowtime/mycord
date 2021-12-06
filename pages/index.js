import React, { useContext } from "react";

import { Context } from '../context'

import { useRouter } from "next/router";

import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-key": '6fd86cd7-7452-48a6-8fea-eb9bc6682a3e'}}
    )
    .then(r => router.push('/chats'))
  }
  return (
    
    <div className="background">
      <div className='auth-container'>
        <title>MyCord - Auth</title>
          <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
            <div className='auth-title'>MyCord</div>

            <div className='input-container'>
              <input
                placeholder='Username'
                className='text-input'
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className='input-container'>
              <input
                type='password'
                placeholder='Password'
                className='text-input'
                onChange={e => setSecret(e.target.value)}
              />
            </div>

            <button
            type='submit'
            className='submit-button'
            >
              Login or Sign Up
            </button>
          </form>
      </div>
    </div>
  )
}
