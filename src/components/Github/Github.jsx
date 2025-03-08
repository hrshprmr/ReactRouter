import React from 'react'
import { useEffect, useState } from 'react';
function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary/followers')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      }
    )
  }, [])

  return (
    <div>Github Followers: {data.length}</div>
  )
}

export default Github