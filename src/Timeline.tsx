import './Timeline.css'

export type Link = { text: string; url: string };

export type Media = {
  src: string;       // image or gif (for a video, use its thumbnail)
  alt?: string;
  href?: string;     // optional: makes the image clickable (e.g. YouTube link)
};

export type TimelineEntry = {
  title: string;
  org?: string;          // company / organization, shown under the title
  date?: string;         // e.g. 'May 2025 – Aug 2025'
  description: string;
  tech?: string;         // e.g. 'Python, Pandas'
  links?: Link[];        // optional — add as many as you like
  media?: Media;         // optional image shown beside the text
};

function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="timeline">
      {items.map((item, i) => {
        const img = item.media && (
          <img className="tl-media" src={item.media.src} alt={item.media.alt ?? item.title} loading="lazy" />
        );

        return (
          <li className="tl-item" key={`${i}-${item.title}`}>
            <div className="tl-rail" aria-hidden="true">
              <span className="tl-dot" />
              <span className="tl-line" />
            </div>

            <article className={item.media ? 'tl-card has-media' : 'tl-card'}>
              <div className="tl-body">
                <div className="tl-head">
                  <h3 className="tl-title">{item.title}</h3>
                  {item.date && <span className="tl-date">{item.date}</span>}
                </div>

                {item.org && <p className="tl-org">{item.org}</p>}

                <p className="tl-desc">{item.description}</p>

                {item.tech && <p className="tl-tech">{item.tech}</p>}

                {item.links && item.links.length > 0 && (
                  <p className="tl-links">
                    {item.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                        {link.text}
                      </a>
                    ))}
                  </p>
                )}
              </div>

              {item.media?.href ? (
                <a className="tl-media-link" href={item.media.href} target="_blank" rel="noreferrer">
                  {img}
                </a>
              ) : (
                img
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
