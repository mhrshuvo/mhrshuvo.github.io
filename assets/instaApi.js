async function fetchLatestPosts (profileId){
    const responce = await fetch(`https://www.instagram.com/${profileId}/?__a=1`);
    const data     = await responce.json();

    console.log(`name : ${data.graphql.user.full_name} , ${profileId} has ${data.graphql.user.edge_followed_by.count} follower, and ${profileId} followed ${data.graphql.user.edge_follow.count} people `)

    if (data.graphql.user.is_private){
        console.log(`${profileId} has private id. try another `);
    }
    else{
        console.log(`${profileId} has public id`);
    }
    const latest =data.graphql.user.profile_pic_url;
    return latest;
}

async function creatGallery (profileId){
    const proPic = await fetchLatestPosts(profileId);

    const container    = document.createElement('div');
    container.className = 'avatar';
    const img = document.createElement('img')
    img.src = proPic
    container.appendChild(img)
    user.appendChild(container)

    
    user.innerHTML += `
                <h1>
                    @mhrshuvo
                </h1>
                <p>
                    Web 💻 and Mobile APP 📱 interface designer <br>
                    UI/UX engineer
                </p>
            </div>
                       `

}

window.onload = ()=> {
    creatGallery("mhrshuvoo");
};


