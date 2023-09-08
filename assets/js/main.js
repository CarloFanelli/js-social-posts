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

const posts = [
    {
        id : 1,
        author : {
            authorName : 'Carlo Carli',
            authorPhoto : 'https://unsplash.it/200/200?image=<1>'
        },
        date : '12-21-2021',
        postContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media : 'https://unsplash.it/500/300?image=<201>',
        likes : 80
    },
    {
        id : 2,
        author : {
            authorName : 'Marco Marchi',
            authorPhoto : 'https://unsplash.it/200/200?image=<2>'
        },
        date : '10-11-2021',
        postContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media : 'https://unsplash.it/500/300?image=<202>',
        likes : 66
    },
    {
        id : 3,
        author : {
            authorName : 'Luigi Luigio',
            authorPhoto : 'https://unsplash.it/200/200?image=<3>'
        },
        date : '24-08-2022',
        postContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media : 'https://unsplash.it/500/300?image=<203>',
        likes : 102
    },
    {
        id : 4,
        author : {
            authorName : 'Carlo Carli',
            authorPhoto : 'https://unsplash.it/200/200?image=<4>'
        },
        date : '04-21-2022',
        postContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media : 'https://unsplash.it/500/300?image=<204>',
        likes : 44
    },
    {
        id : 5,
        author : {
            authorName : 'Carlo Carli',
            authorPhoto : 'https://unsplash.it/200/200?image=<5>'
        },
        date : '12-05-2021',
        postContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media : 'https://unsplash.it/500/300?image=<205>',
        likes : 55
    },
    {
        id : 6,
        author : {
            authorName : 'Carlo Carli',
            authorPhoto : 'https://unsplash.it/200/200?image=<6>'
        },
        date : '06-26-2026',
        postContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore repellat deserunt, impedit architecto incidunt. Rem laborum nisi similique excepturi.',
        media : 'https://unsplash.it/500/300?image=<206>',
        likes : 67
    },
]