import { register } from '../api/auth.js';
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
                <p><strong>marvel</strong> Start your countdown to the glorious arrival of Marvel Studios'
                    #Loki...<a href="#">more</a>
                </p>
                <p class="comments">View all 103 comments</p>
            </div>
        </div>
        `
    };
}

const new_post_func = () => {
    const post = document.querySelector('.new_post');
    console.log(post);
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

console.log(register('Gelmen_', 'elda.pisos@gail.com', '12345678'))

console.log(makePost('test', '../images/marvel.svg', 'test'))

// console.log(getAllPosts())

// async function ping() {
//     return await apiRequest("http://92.255.79.122:8080/api/v1/ping"), {
//         method: "GET",
//     }
// }

// console.log(ping())