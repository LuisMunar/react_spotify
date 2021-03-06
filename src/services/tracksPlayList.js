const tracksPlayList = (data) => (
    data.tracks.items.map(dataTrack => (
        {
            trackName : dataTrack.track.name,
            trackId : dataTrack.track.id,
            trackUri : dataTrack.track.uri,
            trackPicture : dataTrack.track.album.images[0].url,
            trackArtist : dataTrack.track.artists[0].name,
            trackAlbum : dataTrack.track.album.name,
            trackPreview : dataTrack.track.preview_url
        }
    ))
)

export default tracksPlayList;