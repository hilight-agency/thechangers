import Video from "@/components/Video"

export default function Test({shortUrl,poster}) {
    console.log(shortUrl)
    console.log(poster)
    return (
        <div> 123       <Video
            width="100%"
            height="100%"
            playing={true}
            playsinline
            loop={true}
            muted={true}
            video={shortUrl}
            poster={poster}
        alt={``} /></div>

    )
}