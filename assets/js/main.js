/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
 */


//let likes = 0;

const posts = [
    {
        id: 1,
        author: {
            authorName: 'Carlo Carli',
            authorPhoto: 'https://unsplash.it/40/?image=1'
        },
        date: '12-21-2021',
        postContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media: 'https://unsplash.it/500/300?image=201',
        likes: 80
    },
    {
        id: 2,
        author: {
            authorName: 'Marco Marchi',
            authorPhoto: 'https://unsplash.it/40/?image=2'
        },
        date: '10-11-2021',
        postContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media: 'https://unsplash.it/500/300?image=202',
        likes: 66
    },
    {
        id: 3,
        author: {
            authorName: 'Luigi Luigio',
            authorPhoto: 'https://unsplash.it/40/?image=3'
        },
        date: '24-08-2022',
        postContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media: 'https://unsplash.it/500/300?image=203',
        likes: 102
    },
    {
        id: 4,
        author: {
            authorName: 'Paolo Paoli',
            authorPhoto: 'https://unsplash.it/40/?image=4'
        },
        date: '04-21-2022',
        postContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media: 'https://unsplash.it/500/300?image=204',
        likes: 44
    },
    {
        id: 5,
        author: {
            authorName: 'Giacomo Giacomi',
            authorPhoto: 'https://unsplash.it/40/?image=5'
        },
        date: '12-05-2021',
        postContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media: 'https://unsplash.it/500/300?image=25',
        likes: 55
    },
    {
        id: 6,
        author: {
            authorName: 'Pino Pini',
            authorPhoto: 'https://unsplash.it/40/?image=6'
        },
        date: '06-26-2023',
        postContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media: 'https://unsplash.it/500/300?image=206',
        likes: 67
    },
]

/* 
Milestone 2
stampiamo i post del nostro feed.
*/

printInPage(posts);



function printInPage(postsArray) {

    const postsSpace = document.getElementById('allPost');

    let likeList = [];

    postsArray.forEach((post, i) => {


        const postMarkup = `<div id=#post${post.id} class="card">
        <div class=" card-header position-relative">

            <img src="${post.media}" class="rounded-2 card-img" alt="...">
            <div class="rounded-5 position-absolute my-author gap-2">
                <img src="${post.author.authorPhoto}" class="rounded-circle card-img" alt="...">
                <div class="author-details">
                    <h4>${post.author.authorName}</h4>
                    <span>${post.date}</span>
                </div>
            </div>
        </div>

      <div class="card-body">
        <p class="card-text p-3">${post.postContent}</p>

      </div>
      <div id=#footer${post.id} class="card-footer d-flex justify-content-evenly align-items-center">
        
      </div>
    </div>`

        postsSpace.insertAdjacentHTML('beforeend', postMarkup);

        likeButton(post);

        //console.log(likeButton(post));

        addToLikeList(post,likeList)


    });

}

function likeButton(post) {

    //console.log(post);

    const postSpace = document.querySelector(`#\\#footer${post.id}`);

    //console.log(postSpace);

    const likeMarkup = `<div class="like-button d-flex justify-content-around align-items-center">
    <i class="fa fa-thumbs-up rounded-pill" aria-hidden="true">
    </i>
    <h4>like</h4>
</div>
<div class="like-counter d-flex justify-content-around align-items-center">
    <h4>piace a</h4>
        <h3>${post.likes}</h3>
    <h4>persone</h4>
</div>`

    postSpace.innerHTML = likeMarkup

    postSpace.addEventListener('click', function () {

        getLike(post);

    })


    return postSpace



};



function getLike(post) {

    const position = document.querySelector(`#\\#footer${post.id}`);

    console.log(position);

    if (position.classList.contains('liked')) {

        post.likes = post.likes - 1;

        position.classList.remove('liked');

        const likeMarkup = `<div class="like-button d-flex justify-content-around align-items-center">
    <i class="fa fa-thumbs-up rounded-pill" aria-hidden="true">
    </i>
    <h4>like</h4>
</div>
<div class="like-counter d-flex justify-content-around align-items-center">
    <h4>piace a</h4>
        <h3>${post.likes}</h3>
    <h4>persone</h4>
</div>`

        position.innerHTML = likeMarkup

        console.log('clock');


    } else {

        post.likes = post.likes + 1;

        console.log('click');

        const likeMarkup = `<div class="like-button d-flex justify-content-around align-items-center">
    <i class="fa fa-thumbs-up rounded-pill" aria-hidden="true">
    </i>
    <h4>like</h4>
</div>
<div class="like-counter d-flex justify-content-around align-items-center">
    <h4>piace a</h4>
        <h3>${post.likes}</h3>
    <h4>persone</h4>
</div>`

        position.innerHTML = likeMarkup

        position.classList.add('liked');

    }

}


/* 
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/


// like list

function addToLikeList(post, list) {

    const positionHTML = document.querySelector(`#\\#footer${post.id}`);

    const newList = [];

positionHTML.addEventListener('click',function(){

    if (positionHTML.classList.contains('liked')) {

        list.push(post.id)

    } else {

       

    }

    console.log(list);
})
    
}

function defaultProfilePicture(post) {

    const letterName = post.authorName

    const name = letterName.chartAt(0);

    const surname = letterName.chartAt(letterName.search(' ') + 1);

    if (post.author.authorPhoto === '') {


        
    }
    
}