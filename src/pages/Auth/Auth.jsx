import React from 'react'

const Auth = ({ authenticate } ) => {
    const onClick = () => {
        authenticate
    };
    
  return (
    <div>Auth</div>
  )
}

export default Auth