import Video from "@/components/Video"

export default function Test({shortUrl,poster}) {
    return (
        <div> 
            <Video
            width="100%"
            height="100vh"
            playing={false}
            playsinline
            loop={true}
            muted={true}
            video={shortUrl}
            poster={poster}
        alt={``} /></div>

    )
}