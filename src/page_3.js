import { login, register, verify_email } from '../api/auth.js';
import {makePost, getAllPosts} from '../api/posts.js' 


const storys = {
    name: ['Your story', 'leo.messi', 'leo.messi', 'leo.messi', 'leo.messi', 'leo.messi', 'leo.messi'],
    image: ["../images/stories/myStory.svg", "../images/stories/first.svg", "../images/stories/second.svg", 
        "../images/stories/third.svg", "../images/stories/fouth.svg", "../images/stories/fouth.svg", 
        "../images/stories/fouth.svg"],
};

const posts = {
    profile_avatar: ['../images/marvel.svg', '../images/marvel.svg', '../images/marvel.svg'],
    profile_name: ['marvel', 'huarvel', 'giiiiiiiiii'],
    image: ['../images/loki.svg', '../images/loki.svg', '../images/loki.svg'],
    caption: ["Start your countdown to the glorious arrival of Marvel Studios #Loki","Start your countdown to the glorious arrival of Marvel Studios #Loki","Start your countdown to the glorious arrival of Marvel Studios #Loki"]
};

const make_storys = () => {
    const story_container = document.querySelector('.storyes')
    story_container.innerHTML = '';
    for (let i = 0; i < storys.name.length; i += 1) {
        story_container.innerHTML += `
    <div class="story_home align-center flex-col">
        <button class="btn-base btn-reset"><img src="${storys.image[i]}" alt="${i + 1}"></button>
        <span>${storys.name[i]}</span>
    </div>`;
    };
}



const make_post = () => {
    const post_container = document.querySelector('.posts');
    post_container.innerHTML = '';
    for (let i = 0; i < posts.profile_name.length; i += 1) {
        post_container.innerHTML += `
        <div class="post">
            <div class="post_header">
                <div class="user_post flex-row align-center">
                    <img class="post_user_logo" src="${posts.profile_avatar[i]}" alt="${posts.profile_name[i]}">
                    <p class="username">${posts.profile_name[i]}</p>
                </div>
                <img class="points" src="../images/dots.svg" alt="points">
            </div>
            <div class="post_main">
                <img src="${posts.image[i]}" alt="Loki">
            </div>
            <div class="post_footer">
                <div class="likes_and_more">
                    <div>
                        <button><img src="../images/like.svg" alt="like"></button>
                        <button><img src="../images/comment.svg" alt="comments"></button>
                        <button><img src="../images/shair.svg" alt="share"></button>
                    </div>
                    <button><img src="../images/zakladka.svg" alt="zakladka"></button>
                </div>
                <p>Liked by <strong>thekamraan</strong> and <strong>905,235 others</strong></p>
                <p><strong>${posts.profile_name[i]}</strong> ${posts.caption[i]}<a href="#">more</a>
                </p>
                <p class="comments">View all 103 comments</p>
            </div>
        </div>
        `
    };
}

const new_post_func = () => {
    const post = document.querySelector('.new_post');
    const modal_window_post = document.querySelector('.MW_new_post');
    const modal_window_post_close = document.querySelector('.close');
    post.addEventListener('click', function () {
        modal_window_post.classList.add('display_on');
        setTimeout(() => {
            modal_window_post.classList.add('opacity_1');
        }, 0)
    });
    modal_window_post_close.addEventListener('click', function () {
        modal_window_post.classList.remove('opacity_1');
        setTimeout(() => {
            modal_window_post.classList.remove('display_on');
        }, 200)
    });
}


const synchronize_inputs = () => {
    const fakeInput = document.querySelector('.fake-input');
    const realInput = document.getElementById('real-input');
    fakeInput.addEventListener('input', function () {
        realInput.value = this.textContent;
    });
}


make_post();
make_storys();
new_post_func();
synchronize_inputs();

// Тестовая часть

// user  qwerty1234
// console.log(register('Gelmen_', "test2626@gmail.com", 'qwerty1234'))
// console.log(await register("elda.pisos", "elda.pisos@gmail.com", "qwerty1234"))
// console.log(verify_email(eldaToken))
// console.log(login('Gelmen_', 'qwerty1234'))
// const user1Token = "2786270a3fd09fee18b810581ee77589247c9e6f9bd492dc96a111cc09052100"
// const user2Token = "882b347f172f8940e7a8b8d77caf82a0a180eb207a2c0d19ea62a8c116724d73"

// window.localStorage.setItem('accessToken', user2Token)
// 
// const loginResult = await login('elda.pisos@gmail.com','qwerty1234');
// console.log('Login result:',loginResult)
// 
// const tempToken = loginResult.data.access_token;
// 
// window.sessionStorage.setItem('accessToken', tempToken)







// console.log('Make post:', makePost('test2', 'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg', 'test'))

// console.log('Get post:', await getAllPosts())

// console.log(getAllPosts())
