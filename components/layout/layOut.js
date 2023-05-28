import React from 'react'
import MainHeader from './mainHeader'

function LayOut(props) {
    const {children}=props
  return (
    <>
    <MainHeader/>
    <main>
      {children}
    </main>
    </>
  )
}

export default LayOut