//JQuery Ajax

$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET",
  success: function(data){

  },
  error: function(err){
    console.log(err)
  }
})

//ES6 Fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then( usersData => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
  } )
  .then( postsData => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
  } )
  .then( function(commentsData){
    console.log(commentsData)
  } )
  .catch( function(err){
    console.log(err)
  } )

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/comments")
]).then( data => {
  console.log(data[0],data[1],data[2])
} )

const getStream = (color) => {
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      if(color=="blue"){
        resolve("Correct color")
      }else{
        reject("There was an error")
      }
    }, 2000 )
  } )
}

getStream("blue")
  .then( response => console.log(response) )
  .catch( err => console.log(err) )
