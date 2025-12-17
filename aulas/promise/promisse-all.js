// Promisse all
const yt = new Promise(resolve => {
    setTimeout(() => {
        resolve('videos form youtube')
    },2000);
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        resolve('posts from facebook')
    },3000);
})

Promise.all([ytt, fb]).then((result) => {
    console.log({ result });
}); 