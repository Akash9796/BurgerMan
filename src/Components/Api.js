// import React from 'react'

// export default function Api() {
//   return (
//     <div>Api</div>
//   )
// }
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '82a319c1e0msh2b85144e8ad1c9dp19ee2cjsnd06a4ba030b9',
      'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
    }
  };
  
  fetch('https://burgers1.p.rapidapi.com/burgers', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));