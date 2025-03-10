"use client";

import './styles.css';

import { useParams } from 'next/navigation';

import { postType, posts } from '../posts.ts';
import Image from 'next/image';
import FormSection from '~/app/components/Form Section/index.tsx';

export default function Post() {

    const errorPost = {
        id: 0,
        title: "Ocorreu um erro :(",
        slug: "error-post",
        body: "Contate a administração do sistema.",
        image: "imagedummy",
        createdAt: "10/03/2025"
    }


    const { postslug } = useParams<{ postslug: string }>();
    const post: postType = posts.find(p => p.slug === postslug) ?? errorPost;

    return (
        <section className="blog-post">
            <div className="blog-post-content">
                <a href="/blog/">← Voltar ao blog</a>
                <div className="blog-post-image">
                    <Image src={post.image} alt={post.title} fill />
                </div>
                <div className="blog-post-headline">
                    <h1>{post.title}</h1>
                    <span>Postado em {post.createdAt}</span>
                </div>
                <div className="blog-post-body">
                    {post.body}
                </div>
            </div>
            <FormSection/>
        </section>
    )
}