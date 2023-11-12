const token = ~~[Math.random() * 123456789];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("Memvalidasi data...")
  setTimeout(() => {
    callback ({username, token})
  }, 200)
}

function getUser(token, callback){
  console.log("processing token...")
  if(token) 
  setTimeout(() => {
    callback ( {apiKey: "BJUwh1" })
  }, 500); 
}

function getPictures(apiKey, callback){
  console.log("processing pictures...")
  if(apiKey) setTimeout(() => {
    callback({pic: pictures})
  }, 1500);
}

login("Muhammad Baddar", function(response){
  const {token} = response
  getUser(token, function(response){
    const {apiKey} = response
    getPictures(apiKey, function(response){
      const {pic} = response
      console.log(pic)
    })
  })
  // getPictures(apiKey, function(response){
  //   const {pictures} = response
  //   console.log(pictures)
  // })
})



// const user = login("Muhammad Baddar");
// console.log(user.token)

// const apiKey = getUser(user.token);
// console.log(apiKey)

// const getUserPictures = getPictures(apiKey);
// console.log(getUserPictures)