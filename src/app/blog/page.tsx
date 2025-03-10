"use client"

import FormSection from '../components/Form Section';
import WppButton from '../components/Wpp Button';
import './styles.css';
import './mobile.css';

import { posts } from './posts.ts';
import Image from 'next/image';

export default function Blog () {
    return (
        <section className="blog">
            <WppButton/>
            <div className="blog-posts">
                {posts.map(post => <a href={"/blog/" + post.slug} key={post.id} className="blog-post">
                    <div className="post-image">
                        <Image src={post.image} alt={post.title} fill/>
                    </div>                    
                    <h4>{post.title}</h4>
                    <span>Postado em {post.createdAt}</span>
                </a>)}
            </div>

            <FormSection/>
        </section>
    )
}