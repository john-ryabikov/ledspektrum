import Wrapper from "../UI/Wrapper"
import Title from "../UI/Title"
import Photos from "./Photos"

export default function Gallery() {
  return (
    <section className="gallery" id="content">
        <Wrapper>
            <div className="gallery__cont">
                <Title>Галерея</Title>
                <Photos/>
                {/* <div className="gallery__video-box">
                    <video className="gallery__video" controls src="img/Gallery/VIDEO.mp4"/>
                </div> */}
            </div>
        </Wrapper>
    </section>
  )
}
