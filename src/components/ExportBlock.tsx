import { forwardRef } from 'react'

const ExportBlock = forwardRef((props, ref) => (
    <div ref={ref} className="export-block relative inline-block">
        {props.children}
    </div>
))

export default ExportBlock
