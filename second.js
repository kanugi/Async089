const token = ~~[Math.random() * 123456789];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username) {
  console.log("Memvalidasi data...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username != "Muhammad Baddar") reject("Username salah. Akses Ditolak!")
      resolve({token: token})
    }, 200)
  })
}

function getUser(token){
  console.log("Memproses token...")
  return new Promise((resolve, reject) => {
    if (!token) reject("Token tidak ada. Akses Ditolak!")
    setTimeout(() => {
      resolve({apiKey: "UBey51"})
    }, 500)
  })
}

function getPictures(apiKey){
  console.log("Memproses gambar...")
  return new Promise((resolve, reject) => {
    if (!apiKey) reject("ApiKey tidak ada. Akses Ditolak!")
    setTimeout(() => {
      resolve({pic: pictures})
    }, 1000)
  })
}

async function UserDisplay() {
  try {
    const {token} = await login("Muhammad Baddar")
    const {apiKey} = await getUser(token)
    const {pic} = await getPictures(apiKey)
  
    console.log(`
    Token: ${token}
    ApiKey: ${apiKey}
    Pictures: ${pic}
    `)
  } catch (err) {
    console.log(err)
  }
}

UserDisplay()