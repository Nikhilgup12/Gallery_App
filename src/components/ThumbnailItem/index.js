import './index.css'
const ThumbnailItem = props => {
  const {thumbnail, thumbnailImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = thumbnail

  const onThumbnailImage = () => {
    thumbnailImage(id)
  }

  const activeImage = isActive ? 'active-image' : ''

  return (
    <li className="thumbnail-container-image">
      <button
        className={`thumbnail-image ${activeImage} `}
        onClick={onThumbnailImage}
      >
        <img src={thumbnailUrl} className="image" alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
