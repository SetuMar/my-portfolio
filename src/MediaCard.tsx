import './MediaCard.css'

type link = {text:string; url:string}

type VideoCardProps = {
  title: string;
  mediaSrc: string;
  bodyText: string;
  techStack: string;
  mediaType: "video" | "image" | "gif";
  mediaLink: link;
};

function VideoCard({ title, mediaSrc, bodyText, techStack, mediaType, mediaLink}: VideoCardProps) {
    return (
        <div className="video-card-container">
            <h2>{title}</h2>
            
            {mediaType === "video" && (
                <iframe
                className="movie-frame"
                src={mediaSrc}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{ border: 0 }}
                ></iframe>
            )}

            {(mediaType === "image" || mediaType === "gif") && (
                <img className="media-image" src={mediaSrc} alt={title}/>
            )}

            <p>{bodyText}</p>
            <p><a href={mediaLink.url} className='mediaLink' target='_blank'>{mediaLink.text}</a></p>
            <p>{techStack}</p>
        </div>
    )
}

export default VideoCard;