// Simulating an API request  user's create post
function CreatePost(posts){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`User created post ${posts} ${new Date().toLocaleString()}`) ;
            resolve();
        },1000)

    })
}
// Simulating an API request to update user's last activity time
function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`User ${userId} last activity updated ${new Date().toLocaleString()}`);
        resolve();
      }, 2000);
    });
  }
  
  // Simulating an API request to delete a post
  function deletePost(postId, userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(` ${postId} deleted by ${userId} ${new Date().toLocaleString()}`);
            resolve();
        }, 3000);
    });
  }
  
  const userId = "ram"; // replace with actual user id
  let posts = ["Post 1", "Post 2", "Post 3"]; // replace with actual posts
  
//   function updateLastUserActivityTimeWithPostCreation() {
  
//     Promise.all([CreatePost(posts),updateLastUserActivityTime(userId), deletePost(posts.pop(), userId)])
//       .then(() => {
//         // Log the new set of posts of the user
//         console.log(`User ${userId} remaining posts after deletion: ${posts}`); //Remaining post 1
//         console.log(`User ${userId} last activity time: ${new Date().toLocaleString()}`);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
// //   }
  
//   updateLastUserActivityTimeWithPostCreation();

//Using promise...
// CreatePost(posts).then(()=>{
//   updateLastUserActivityTime(userId).then(()=>{
//     deletePost(posts.pop(), userId).then(()=>{
//       console.log(`User ${userId} remaining posts after deletion: ${posts}`); //Remaining post 1
//         console.log(`User ${userId} last activity time: ${new Date().toLocaleString()}`);
      
//     })

//   })
// })

//async await....
async function fun1(){
  let messg1=await CreatePost(posts);
  let messg2=await updateLastUserActivityTime(userId);
  let messg3=await deletePost(posts.pop(), userId);
}
fun1().then(()=>{
  console.log(`User ${userId} remaining posts after deletion: ${posts}`); //Remaining post 1
        console.log(`User ${userId} last activity time: ${new Date().toLocaleString()}`);
      
});