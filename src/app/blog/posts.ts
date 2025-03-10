const dummyImage = "/assets/blog-dummy-image.webp";

export type postType = {
    id:number,
    slug:string,
    title:string,
    body:string,
    image:string,
    createdAt:string
}

export const posts: postType[] = [
    {
        id:1,
        slug:"post-inicial",
        title:"Bem-vindos ao blog da AVicente!",
        body:"Esta é a primeira postagem do blog da AVicente! Aqui traremos novidades a respeito da construtora :)",
        image:dummyImage,
        createdAt:"10/03/2025"
    },
    // {
    //     id:2,
    //     slug:"post-exemplo",
    //     title:"This is a dummy post, created for development purposes",
    //     body:"This is a dummy post, created for development purposes",
    //     image:dummyImage,
    //     createdAt:"10/03/2025"
    // }
]