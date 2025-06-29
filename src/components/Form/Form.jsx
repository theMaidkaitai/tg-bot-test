import React, { useCallback, useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

const Form = () => {
  const {tg} = useTelegram()
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('')
  
  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject
    }
    tg.sendData(JSON.stringify(data))
  }, [country, street, subject])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные"
    })
  }, [])

  useEffect(() => {
    if(!street || !country) {
      tg.MainButton.hide()
    }
    else {
      tg.MainButton.show()
    }
  }, [country, street])

  return (
    <div className={'form'}>
        <h3>Введите ваши данные</h3>
        <input type="text" placeholder='Страна' value={country} onChange={e => setCountry(e.target.value)}/>
        <input type="text" placeholder='Улица' value={street} onChange={e => setStreet(e.target.value)}/>

        <select className={'select'} value={subject} onChange={e => setSubject(e.target.value)}>
            <option value={'physical'}>Физ. лицо</option>
            <option value={'legal'}>Юр. лицо</option>
        </select>
    </div>
  )
}

export default Form
