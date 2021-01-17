import React, {useRef , useState, useEffect} from 'react'
import Button from '../customButton/button'
import './imageUpload.css'

const ImageUpload = ({files , setFiles , id}) =>{

    
    const [previewUrl, setPreviewUrl] =useState()
    const [isValid, setIsVAlid] =useState(false)

    useEffect(()=>{
        if (!files)
        return

        const fileReader = new FileReader()
        fileReader.onload=()=>{
            setPreviewUrl(fileReader.result)
        }
        
        fileReader.readAsDataURL(files)
    },[files])

    const pickHandler = event =>{
        
        if (event.target.files && event.target.files.length === 1){
            setFiles(event.target.files[0])
            console.log(setFiles)
            setIsVAlid(true)
            

        } else {
            setIsVAlid(false)
           
        }

        // props.onInput( props.id, pickFile)


    }
    
    const filePickerRef = useRef();

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
            files = 'image'
            /> 

        <div className="image-upload">
            <div className="imgPreview">
         { previewUrl && <img src={previewUrl} alt="preview"/>  }
         { !previewUrl && <p>please upload an image</p>  }

                
            </div>
            <Button inverse
            onClick={imgUploadHandler}
            className="imgBtn">PICK IMAGE</Button>
        </div> 


        </div>
    )
}

export default ImageUpload