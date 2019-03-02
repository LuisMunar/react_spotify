const tracksPlayList = (data) => (
    data.tracks.items.map(dataTrack => (
        {
            trackName : dataTrack.track.name,
            trackId : dataTrack.track.id
        }
    ))
)

export default tracksPlayList;