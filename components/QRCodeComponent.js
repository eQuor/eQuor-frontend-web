import React from 'react'
import QRCode from 'react-qr-code'

const QRCodeComponent = ({ value }) => {
  return (
    <div>
      <QRCode value={value} />
    </div>
  )
}

export default QRCodeComponent
