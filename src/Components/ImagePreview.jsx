import Fancybox from "../Helpers/FancyBox";

const ImagePreview = (props) => {
    return(
        <Fancybox options={{ infinite: false }}>
            <p>
                <button
                    data-fancybox="gallery"
                    data-src={props.imgSrc}
                    className="button button--secondary"
                >
                    Preview
                </button>
            </p>
        </Fancybox>
    )
}

export default ImagePreview;