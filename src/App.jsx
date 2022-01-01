import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { getGlobalData, getGlobalData1 } from 'api/api'

import styles from './App.module.scss'

const App = () => {
  useEffect(() => {
    ;(async () => {
      const aaaaa = await getGlobalData()
      const aaaaa1 = await getGlobalData1()
      console.log(aaaaa1)
      console.log(aaaaa)
    })()
  }, [])
  return <div className={styles.App}></div>
}

export default App
