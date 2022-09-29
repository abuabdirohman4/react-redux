import React from 'react'
import CardKontak from './CardKontak'

function ListKontak({nama}) {
  return (
      <>
        <h2>List Kontak {nama}</h2>
        <CardKontak nama={nama}/>
      </>
  )
}

export default ListKontak