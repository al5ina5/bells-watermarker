import { createRef, useContext, useEffect, useRef } from 'react'
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image'
import shortid from 'shortid'
import html2canvas from 'html2canvas'
import { motion } from 'framer-motion'
import { saveAs } from 'file-saver'
import { AppContext } from '../pages'
import ExportBlock from './ExportBlock'

export function Button({ onClick, children }) {
    return (
        <button type="button" className="bg-black bg-opacity-90 px-2 py-1 font-medium text-xs rounded" onClick={onClick}>
            {children}
        </button>
    )
}

export default function ImageComponent({ src }) {
    const { watermark } = useContext(AppContext)

    const onExport = () => {
        html2canvas(ref.current, { allowTaint: true }).then((canvas) => {
            const img = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            saveAs(img, 'image.png')
        })
    }

    const ref = useRef()
    return (
        <div className="flex items-center justify-center">
            <div className="relative inline-block">
                <ExportBlock ref={ref}>
                    <motion.div drag className="absolute bottom-0 right-0 z-20 p-4">
                        <p className="text-xs text-shadow text-white font-mono">{watermark}</p>
                    </motion.div>
                    <img className="pointer-events-none" src={src} alt="" />
                </ExportBlock>
                <div className="absolute top-0 right-0 p-4 z-20 text-white">
                    <div className="flex flex-row flex-wrap space-x-2">
                        <Button onClick={() => onExport()}>Export</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
