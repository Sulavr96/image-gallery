import React, {useState, useEffect} from "react";
import ImagePreview from "./ImagePreview";


const ImageContainer = (props) => {
    const [fileName, setFileName] = useState('')
    useEffect(() => {
        getFileName()
    },[])

    const getFileName = () => {
        const splittedFileLocation = props.imgSrc.split("/")
        setFileName(splittedFileLocation[splittedFileLocation.length - 1])
    }

    return (
        <>
        <div className="col">
            <div className="image-container">
                <img src={props.imgSrc} className="container-image"/>
            </div>
            <div>
                <p>
                    {fileName.split(".")[0]}
                </p>
                <p>
                    {fileName}
                </p>
                <ImagePreview imgSrc={props.imgSrc} />
            </div>
        </div>
    </>
    )

}

export default ImageContainer