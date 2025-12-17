const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() =>{
        const error = false;
        
        if (error){
            return onError(new Error("Error login!"));
        }

        console.log('User logado!');
        onSuccess({ email });
    }, 1500);
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2'])
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() =>{
        callback({title: 'video title'})
    }, 2500);
} 

const user = loginUser('mariana@gmail.com', '123', 
    (user) => {
        getUserVideos(user.email, (videos) =>{
            getVideoDetails(videos[0], (videoDetails) => {
                console.log({ videoDetails });
            })
        })
}, 
    (error) => {
        console.log({ error })
});
