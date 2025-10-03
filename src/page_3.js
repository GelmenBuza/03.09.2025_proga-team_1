import { login, register, verify_email } from '../api/auth.js';
import { makePost, getAllPosts, deletePost} from '../api/posts.js';
import * as pars from './parsers.js'



const user1Token = "2786270a3fd09fee18b810581ee77589247c9e6f9bd492dc96a111cc09052100"
// const user2Token = "882b347f172f8940e7a8b8d77caf82a0a180eb207a2c0d19ea62a8c116724d73"
window.localStorage.setItem('accessToken', user1Token)
const loginResult = await login('Gelmen_','qwerty1234');
console.log('Login result:',loginResult)
const tempToken = loginResult.data.access_token;
window.sessionStorage.setItem('accessToken', tempToken)
// console.log('Get post:', await getAllPosts())



const logged_user_name = 'Rab'


const storys = {
    name: [`${logged_user_name}`, 'leo.messi', 'leo.messi', 'leo.messi', 'leo.messi', 'leo.messi', 'leo.messi'],
    image: ["../images/stories/myStory.svg", "../images/stories/first.svg", "../images/stories/second.svg",
        "../images/stories/third.svg", "../images/stories/fouth.svg", "../images/stories/fouth.svg",
        "../images/stories/fouth.svg"],
};


const getFormData = () => {
    document.getElementById('postForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const description = document.getElementById('post_caption').value.trim();
        const photo_url = document.getElementById('post_image').value.trim();

        if (!description) {
            alert('Please enter a description.');
            return;
        }

        if (!photo_url) {
            alert('Please enter the URL of the photo.')
            return;
        }

        try {
            new URL(photo_url);
        } catch (err) {
            alert('Invalid photo URL.')
            return;
        }
        const makePostRespose = makePost(`${logged_user_name} |-| none |-| ${description}` , photo_url, '');
        // console.log('Make post:', makePostRespose)
        // console.log('Get post:', getAllPosts())
    })
}


const posts = {
    profile_avatar: '../images/marvel.svg',
    profile_name: [],
    image: [],
    caption: []
};


async function postHandlerFromServer () {
    const postsOnServer = await getAllPosts()
    console.log('Get post:', postsOnServer.data)
    for (const post of postsOnServer.data){
        const tmp_post_data = pars.post_parser(post);
        posts.profile_name.push(tmp_post_data.user_name)
        posts.image.push(tmp_post_data.post_photo_url)
        posts.caption.push(tmp_post_data.post_caption)
    }
}

await postHandlerFromServer();
console.log('local post object:', posts)

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
                    <img class="post_user_logo" src="${posts.profile_avatar}" alt="${posts.profile_name[i]}">
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
    const fakeInputDesc = document.getElementById('fake-input-desc');
    const realInputDesc = document.getElementById('post_caption');
    fakeInputDesc.addEventListener('input', function () {
        realInputDesc.value = this.textContent;
    });

    const fakeInputURL = document.getElementById('fake-input-url');
    const realInputURL = document.getElementById('post_image');
    fakeInputURL.addEventListener('input', function () {
        realInputURL.value = this.textContent;
    });
}

getFormData();
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



// console.log('Make post:', makePost('test2', 'https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg', 'test'))





// console.log(getAllPosts())


// const posts_from_api = [
//     {
//         "id": 3,
//         "user_id": 30,
//         "caption": "user_name |-| post_photo |-| post_caption",
//         "image_url": "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
//         "location": "test",
//         "user": {
//             "id": 0,
//             "unique_id": "",
//             "login": "",
//             "email": "",
//             "password": "",
//             "avatar_url": null,
//             "is_email_verified": false,
//             "email_verify_link": "",
//             "refresh_token": "",
//             "created_at": 0,
//             "updated_at": 0
//         },
//         "likes": [],
//         "comments": [],
//         "created_at": 1759326211,
//         "updated_at": 1759326211
//     },
//     {
//         "id": 2,
//         "user_id": 28,
//         "caption": "user_name |-| none |-| post_caption",
//         "image_url": "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
//         "location": "test",
//         "user": {
//             "id": 0,
//             "unique_id": "",
//             "login": "",
//             "email": "",
//             "password": "",
//             "avatar_url": null,
//             "is_email_verified": false,
//             "email_verify_link": "",
//             "refresh_token": "",
//             "created_at": 0,
//             "updated_at": 0
//         },
//         "likes": [],
//         "comments": [],
//         "created_at": 1759318511,
//         "updated_at": 1759318511
//     },
//     {
//         "id": 1,
//         "user_id": 28,
//         "caption": "user_name |-| post_photo |-| post_caption",
//         "image_url": "https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg",
//         "location": "test",
//         "user": {
//             "id": 0,
//             "unique_id": "",
//             "login": "",
//             "email": "",
//             "password": "",
//             "avatar_url": null,
//             "is_email_verified": false,
//             "email_verify_link": "",
//             "refresh_token": "",
//             "created_at": 0,
//             "updated_at": 0
//         },
//         "likes": [],
//         "comments": [],
//         "created_at": 1759229652,
//         "updated_at": 1759229652
//     }
// ]

