export const GalleryView = () => {

    const username = localStorage.getItem('username')

    return (
        <div>
            <h1>Hi and welcome {username}:)</h1>

        </div>
    )
}
