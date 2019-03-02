const dataPlayList = (data) => (
    data.items.map( playList => (
        {
            namePlayList : playList.name,
            imagePLayList : playList.images[0].url,
            idPlayList : playList.id,
            ownerPlayList : playList.owner.display_name
        }
    ))
)

export default dataPlayList;