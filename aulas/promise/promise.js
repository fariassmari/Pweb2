const axios = require('axios');

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true;
        if (error){
            return reject(new Error('Error in login!'));
        }
        console.log('user logado');
        resolve({ email });
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2'])
        }, 2000);
    });
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({title: 'video title'})
        }, 2500);
    });
} 

//loginUserPromise('mariana@gmail.com', '1234')
 //   .then((user) => getUserVideos(user.email))
 //   .then((videos) => getVideoDetails(videos[0]))
 //   .then((videoDetails) => getVideoDetails(videoDetails))
//  .catch((error) => console.log({ error }));


//displayUser();
