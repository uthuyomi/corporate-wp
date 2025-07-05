import React from 'react'
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
          <from>
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