import { saveAs } from 'file-saver'
import html2canvas from 'html2canvas'

export const canvas2png = (node) => {
    html2canvas(node, { allowTaint: true }).then((canvas) => {
        const img = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        saveAs(img, 'image.png')
    })
}
export default canvas2png
