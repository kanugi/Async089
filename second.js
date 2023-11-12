const token = ~~[Math.random() * 123456789];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

function login(username, callback) {
  console.log("Memvalidasi data...")
  setTimeout(() => {
    callback ({username, token})
  }, 200)
}

function getUser(token){
  if(token) return {apiKey: "BJUwh1"}
}

function getPictures(apiKey){
  if(apiKey) return picturses
}

login("Muhammad Baddar", function(response){
  console.log('getting data =>', response)
})



// const user = login("Muhammad Baddar");
// console.log(user.token)

// const apiKey = getUser(user.token);
// console.log(apiKey)

// const getUserPictures = getPictures(apiKey);
// console.log(getUserPictures)