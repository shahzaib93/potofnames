  // const loginAuth = async event => {
  //   event.preventDefault()
  //   // router.replace(router.asPath);
  //   const res = await fetch('http://localhost:3000/api/login', {
  //     body: JSON.stringify({
  //       username: event.target.username.value,
  //       password: event.target.password.value
  //     }),
  //     headers: {'Content-Type': 'application/json'},
  //     method: 'POST'
  //   })
  //   const loginReturned = await res.json()
  //   console.log(loginReturned.token )
  //   const json = jwt.decode(loginReturned.token)
  //   console.log(json);
  // }
