import * as c from './style/ContractMainStyle'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import ContractBoottomSheet from '@/components/SmartContract/ContractBoottomSheet'

const ContractMain = () => {
  const downloadPDF = async () => {
    const element = document.getElementById('paperContainer') as HTMLElement
    // 스크린샷을 캔버스로 생성

    if (element) {
      const canvas = await html2canvas(element, {
        scale: 4,
        logging: true,
        useCORS: true,
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [canvas.width, canvas.height],
      })

      const imgProps = pdf.getImageProperties(imgData)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      // 파일 저장 이름
      pdf.save('contract.pdf')
    } else {
      console.error('Element not found')
    }
  }
  return (
    <>
      <c.ContractMainContainer>
        <c.Contract id="paperContainer"></c.Contract>
        <button onClick={downloadPDF}>Download as PDF</button>
        <ContractBoottomSheet></ContractBoottomSheet>
      </c.ContractMainContainer>
    </>
  )
}

export default ContractMain