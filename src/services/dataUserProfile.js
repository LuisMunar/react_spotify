const dataUserProfile = (data) => (
    {
        profilePicture : (data.images.length > 0) ? data.images[0].url : 'No image to profile',
        userName : data.display_name,
        email : data.email,
        followers : data.followers.total,
        country : (data.country === 'CO') ? 'Colombia' : data.country
    }
)

export default dataUserProfile;