import { Button } from '@geist-ui/react'
import { motion } from 'framer-motion'
import { forwardRef, useContext, useEffect, useRef } from 'react'
import canvas2png from '../lib/canvas2png'
import { AppContext } from '../pages'
import ExportBlock from './ExportBlock'

const ImageComponent = forwardRef(({ src, myRef }) => {
    const { watermark } = useContext(AppContext)

    const ref = useRef()

    return (
        <div className="flex items-center justify-center">
            <div className="relative m-0 border border-dotted p-1 rounded inline-block">
                <ExportBlock ref={ref}>
                    <motion.div drag className="absolute bottom-0 right-0 z-20 p-4">
                        <p className="text-xs text-shadow text-white font-mono">{watermark}</p>
                    </motion.div>
                    <img className="pointer-events-none block m-0 p-0" src={src} alt="" />
                </ExportBlock>
                <div className="absolute top-0 right-0 p-4 z-20 text-white">
                    <div className="flex flex-row flex-wrap space-x-2">
                        <Button size="mini" auto onClick={() => canvas2png(ref.current)}>
                            Export
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ImageComponent
