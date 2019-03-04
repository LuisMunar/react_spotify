const searchTracks = (data) => (
    data.tracks.items.map(search => (
        {
            searchName : search.name,
            searchId : search.id,
            searchUri : search.uri,
            searchArtist : search.artists[0].name,
            searchAlbum : search.album.name,
            searchAlbumImage : search.album.images[0].url,
            searchPreview : search.preview_url
        }
    ))
)

export default searchTracks;