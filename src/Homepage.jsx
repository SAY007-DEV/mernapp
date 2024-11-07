import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Homepage() {

        const usermail=useSelector((state)=>state.auth.userEmail);
        const username=useSelector((state)=>state.auth.userName);
        const navigate=useNavigate();

  return (
    <div>
      <p>
        {console.log(username)}
                
                Hello {username}
      </p>
    </div>
  )
}

export default Homepage
