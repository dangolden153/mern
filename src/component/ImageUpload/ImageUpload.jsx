import React, {useRef , useState, useEffect} from 'react'
import Button from '../customButton/button'
import picSvg from '../pics/image.svg'
import './imageUpload.css'

const ImageUpload = ({setFiles, files, id}) =>{

    const filePickerRef = useRef();
    const [previewUrl, setPreviewUrl] = useState()

    const pickHandler = event =>{
        setFiles(event.target.files[0])

    }

    useEffect(()=>{
        if(!files){
            return;
        }
      const fileReader = new FileReader()  
      fileReader.onload =()=>{
          setPreviewUrl(fileReader.result)
      }
      fileReader.readAsDataURL(files)
    },[files])
    

    const imgUploadHandler =()=>{
        filePickerRef.current.click()
    }

    return (
        <div className="image_Upload">
            <input
            ref={filePickerRef}
            type="file"
            style={{
                display :'none'
            }}
            id={id}
            accept = ".jpg, .png, .jpeg"
            onChange={pickHandler}
            />

        <div className="image-upload">
            <div className={previewUrl ? "imgPreview" : "emptyImgPreview"}>
              {previewUrl &&  <img src={previewUrl} alt="preview"/>}
            </div>
            <Button border
            onClick={imgUploadHandler}
            buttonClass="imgBtn">
                <div className="btnDiv">
                <div className="pictext">add a pic...</div>
                <div className="picSvg" 
                style={{
                    backgroundImage: `url(${picSvg})`
                }}
                />
                </div>
            </Button> 
        </div>

        </div>
    )
}

export default ImageUpload