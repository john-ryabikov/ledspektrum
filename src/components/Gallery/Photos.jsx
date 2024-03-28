import { photos } from "../../data/data"

export default function Photos() {
  return (
    <div className="gallery__photos">
      {photos.map((photo) => (
        <img key={photo.id} className="gallery__photo" src={photo.href} alt="Фото" />
      ))}
    </div>
  )
}
