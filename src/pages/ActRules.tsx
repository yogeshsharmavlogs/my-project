import React from 'react'
import { Link } from 'react-router-dom'
import PDFViewer from 'pdf-viewer-reactjs'

const ActRules = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold font text-[#201352] pl-40 pt-6">
            Act & Rules
        </h1>
        <PDFViewer
            document={{
                url: '/',
            }}
        />
    </div>
  )
}

export default ActRules