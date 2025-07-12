import React from 'react'
import style from '@/components/Contact/Contact.module.scss'
type ContactProps = {
    contact: {
        heading: string;
        form: {
            name: string;
            kana: string;
            email: string;
            text: string;
            button: string;
        }
    }
}

const Contact = ({contact}: ContactProps) => {
  return (
      <div className={style.Contact}>
          <h2>{contact.heading}</h2>
          <form>
              <label>{contact.form.name}</label>
              <input type="text" />
              <label>{contact.form.kana}</label>
              <input type="text" />
              <label>{contact.form.email}</label>
              <input type="text" />
              <label>{contact.form.text}</label>
              <textarea name="" id=""></textarea>
              <button>{contact.form.button}</button>
          </form>
      </div>
  )
}

export default Contact