import './styles.css';
import './mobile.css';

export default function Video() {
    return (
        <section className="video-section">
            <iframe 
            width="640" 
            height="360" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Rick Astley - Never Gonna Give You Up (Official Music Video)" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"             
            />

            <div className="video-text">
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. 
                    Donec fringilla elementum nunc in egestas. 
                    Sed nisi augue, venenatis id iaculis quis, 
                    sollicitudin id magna.</p>
            </div>
        </section>
    )

}

