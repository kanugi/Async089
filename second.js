const token = ~~[Math.random() * 123456789];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("Memvalidasi data...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username != "Muhammad Baddar") reject("Username salah")
      resolve({token: token})
    }, 200)
  })
}

function getUser(token){
  console.log("processing token...")
  return new Promise((resolve, reject) => {
    if (!token) reject("token tidak ada")
    setTimeout(() => {
      resolve({apiKey: "UBey51"})
    }, 500)
  })
}

function getPictures(apiKey){
  console.log("processing pictures...")
  return new Promise((resolve, reject) => {
    if (!apiKey) reject("apiKey tidak ada")
    setTimeout(() => {
      resolve({pic: pictures})
    }, 1000)
  })
}

async function UserDisplay() {
  const {token} = await login("Muhammad Baddar")
  const {apiKey} = await getUser(token)
  const {pic} = await getPictures(apiKey)

  console.log(`
  Token: ${token}
  ApiKey: ${apiKey}
  Pictures: ${pic}
  `)
}

UserDisplay()

// const user = login("Muhammad Baddar")
// user.then(function(response) {
//   const {token} = response
//   getUser(token).then(function (response){
//     console.log({response})
//     const {apiKey} = response
//     console.log(apiKey)
//   }).catch(err => console.log(err.message))
// }).catch(err => console.log(err))