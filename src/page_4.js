

const user = {
    id: 1,
    posts : ["../images/photo_galary/photo1.svg", "../images/photo_galary/photo2.svg", "../images/photo_galary/photo3.svg", "../images/photo_galary/photo4.svg", "../images/photo_galary/photo5.svg", "../images/photo_galary/photo6.svg", "../images/photo_galary/photo7.svg", "../images/photo_galary/photo8.svg", "../images/photo_galary/photo9.svg"],
    storys: {
        names: ["Goggles", "Graffiti", "Clock", "Foods", "Paints","Paints","Paints","Paints"],
        photos: ["../images/stories/storiysFirst.png", "../images/stories/storiysSecond.png", "../images/stories/storiysThird.png", "../images/stories/storiysFouth.png", "../images/stories/storiysFifth.png", "../images/stories/storiysFifth.png","../images/stories/storiysFifth.png","../images/stories/storiysFifth.png"],
    },
}



const make_post = () => {
    let post_library = document.querySelector(".galaryPhoto")
    post_library.innerHTML = ""
    for (let i of user.posts) {
        post_library.innerHTML += `<img class="width-124" src="${i}" alt="photo">`;
    }
}

const make_storys = () => {
    let storys_library = document.querySelector(".storyes")
    storys_library.innerHTML = "";
    for (let i = 0; i < user.storys.names.length; i += 1) {
        storys_library.innerHTML += `
                    <div class="story align-center flex-col">
                        <button class="btn-base btn-reset"><img src="${user.storys.photos[i]}" alt="${i+1}"></button>
                        <span>${user.storys.names[i]}</span>
                    </div>`
    }
}


make_storys()
make_post()
console.log('Work!')