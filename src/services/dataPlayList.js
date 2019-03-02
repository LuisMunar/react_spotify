const dataPlayList = (data) => (
    data.items.map( playList => (
        {
            namePlayList : playList.name,
            imagePLayList : playList.images[0].url
        }
    ))
)

export default dataPlayList;