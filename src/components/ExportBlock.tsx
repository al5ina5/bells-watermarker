import { forwardRef } from 'react'

const ExportBlock = forwardRef((props, ref) => (
    <div ref={ref} className="relative overflow-hidden inline-block">
        {props.children}
    </div>
))

export default ExportBlock
