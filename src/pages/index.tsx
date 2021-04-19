import { Button, Input } from '@geist-ui/react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { createContext, useEffect, useRef, useState } from 'react'
import ExportBlock from '../components/ExportBlock'

const ImageComponent = dynamic(() => import('../components/ImageComponent'))

export const AppContext = createContext({})

export default function IndexPage() {
    const imagesRef = useRef([])

    const [images, setImages] = useState([])
    const [watermark, setWatermark] = useState('example')

    const fileUploadRef = useRef()

    // useEffect(() => {
    //     imagesRef.current = imagesRef.current.slice(0, images.length)
    // }, [images])

    return (
        <AppContext.Provider value={{ images, watermark }}>
            <div className="max-w-5xl mx-auto">
                <div className="p-6 space-y-4 flex flex-col">
                    <input
                        ref={fileUploadRef}
                        className="hidden"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e: any) => {
                            // console.log(e.target.files)
                            setImages(e.target.files)
                        }}
                    />
                    <Button size="large" onClick={() => fileUploadRef.current.click()}>
                        Select Photos
                    </Button>
                    <Input label="watermark" type="text" placeholder="Watermark" value={watermark} onChange={(e) => setWatermark(e.target.value)} />
                </div>

                <div className="grid grid-cols-1 space-y-8">
                    {Object.keys(images).map((key, index) => (
                        <ImageComponent key={key} src={URL.createObjectURL(images[key])} ref={imagesRef} myRef={imagesRef.current[index]} />
                    ))}
                </div>
            </div>
        </AppContext.Provider>
    )
}
