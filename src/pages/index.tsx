import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { createContext, useRef, useState } from 'react'
import ExportBlock from '../components/ExportBlock'

const ImageComponent = dynamic(() => import('../components/ImageComponent'))

export const AppContext = createContext({})

export default function IndexPage() {
    const exportBlockRef = useRef()

    const [images, setImages] = useState([])
    const [watermark, setWatermark] = useState('test')

    return (
        <AppContext.Provider value={{ images, watermark }}>
            <div className="max-w-5xl mx-auto">
                <div className="p-6 space-y-4">
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e: any) => {
                            // console.log(e.target.files)
                            setImages(e.target.files)
                        }}
                    />
                    <input type="text" className="px-2 py-1 rounded block border" placeholder="Watermark" onChange={(e) => setWatermark(e.target.value)} />
                </div>

                <div className="grid grid-cols-1 space-y-8">
                    {Object.keys(images).map((key) => (
                        <ImageComponent key={key} src={URL.createObjectURL(images[key])} />
                    ))}
                </div>
            </div>
        </AppContext.Provider>
    )
}
