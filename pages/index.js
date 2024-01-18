import React, { useContext} from "react";

import { Context } from '../context'

import { useRouter } from "next/router"; // when login, redirects to chats page

import axios from "axios";


export default function Auth() {
  const{username,setUsername,secret,setSecret,} = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if (username.length == 0 || secret.length == 0) return

    axios.put(
    'https://api.chatengine.io/users/',
    {username, secret},
    {headers: {"Private-Key": '2a0d4590-f5ab-4316-98fe-e448dc807806' }}
    )
    .then(r => router.push("/chats"))
  }
  return (
  <div className="background">
    <div className='auth-container'>
      <form className='auth-form' onSubmit={(e) => onSubmit(e)}>
        <div className="auth-title">NEXTJS Chat</div> 

        <div className='input-container'>
          <input
          placeholder = 'Username'
          className="text-input"
          onChange = {e => setUsername(e.target.value)}
          />
          </div>

          <div className='input-container'>
          <input
          type="password"
          placeholder = 'Password'
          className="text-input"
          onChange = {e => setSecret(e.target.value)}
          />
          </div>

          <button
            type = 'submit'
            className="submit-button"
          >
            Login / Sign Up
          </button>

      </form>
    </div>
  </div>

  )
}

// Authentication page