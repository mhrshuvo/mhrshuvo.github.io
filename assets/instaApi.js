

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
    // const latest =data.graphql.user.profile_pic_url_hd;
    const latest = "assets/shuvo.jpg"
    return latest;
}

async function creatGallery (profileId){
    const thumbnils = await fetchLatestPosts(profileId);

    const container    = document.createElement('div');
          container.id = 'avatar';

    
        const img     = document.createElement('img');
              img.src = thumbnils;
        container.appendChild(img);
        user.appendChild(container);
}

function getImg () {
   
    creatGallery("mhrshuvoo");
};


