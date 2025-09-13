let posts = [
    {
        id: 1,
        title: "title",
        likes: 25,
        src: v,
    }
]


wrapper.innerHtml = ""

for (let i of posts) {
    wrapper.innerHtml +=
    <div>
        <div class="title">${i.title}</div>
    </div>
}