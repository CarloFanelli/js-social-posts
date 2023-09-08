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

function getPostInPage(array) {

    const postPositionDOM = document.getElementById('allPost');

    postPositionDOM.innerHTML = '';

    array.forEach((post, index) => {

        const postMarkup = `
        <div id=${post.id} class="card my-5">
                                    <div class="card-header position-relative">
    
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
                                  <div class="card-footer d-flex justify-content-evenly align-items-center">
                                    <div class="like-button d-flex justify-content-around align-items-center">
                                        <i class="fa fa-thumbs-up rounded-pill" aria-hidden="true">
                                        </i>
                                        <h4>like</h4>
                                    </div>
                                    <div class="like-counter d-flex justify-content-around align-items-center">
                                        <h4>piace a</h4>
                                            <h3>${post.likes}</h3>
                                        <h4>persone</h4>
                                    </div>
                                  </div>
                                </div>
                                </div>`

        postPositionDOM.innerHTML += postMarkup;

    });

}


getPostInPage(posts);

/* 
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

// creo una lista di tutti i bottoni

// navigo nella lista in modo da assegnare una funzione ad ogni bottone

/* for (let i = 0; i < posts.length; i++) {
    
    like(i,likesButton);
    
} */

const likesButton = document.querySelectorAll('.like-button');
posts.forEach((post, i) => like(i, likesButton));


/**
 * function to add and remove like
 * @param {number} index of for cycle 
 */

function like(i, likesButton) {

    // add event listener ad ogni bottone
    likesButton[i].addEventListener('click', function () {

        //check if there's yes the like
        if (likesButton[i].classList.contains('liked')) {

            // la funzione deve riconoscere la posizione del likeButton nell'array e lo stesso index lo ha il post a cui deve variariare il like

            posts.forEach(post => {

                if (i + 1 === post.id) {

                    post.likes = post.likes - 1;

                    console.log(post.likes);

                    console.log(posts);

                    getPostInPage(posts);
                    const likesButton = document.querySelectorAll('.like-button');
                    like(i, likesButton)
                    likesButton[i].classList.remove('liked')

                }

            });

        } else {
            // la funzione deve riconoscere la posizione del likeButton nell'array e lo stesso index lo ha il post a cui deve variariare il like

            posts.forEach(post => {

                if (i + 1 === post.id) {

                    post.likes += 1;

                    console.log(post);

                    console.log(post.likes);

                    console.log(posts);


                    getPostInPage(posts);
                    const likesButton = document.querySelectorAll('.like-button');
                    like(i, likesButton)
                    likesButton[i].classList.add('liked')

                }
            });
        }

    })

}
