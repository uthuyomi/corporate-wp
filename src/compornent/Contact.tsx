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
      <div className={ }>
          <h2>{contact.heading}</h2>
          <from>
              <h3>{contact.form.name}</h3>
              <input type="text" />
              <h3>{contact.form.kana}</h3>
              <input type="text" />
              <h3>{contact.form.email}</h3>
              <input type="text" />
              <h3>{contact.form.text}</h3>
              <textarea name="" id=""></textarea>
              <button>{contact.form.button}</button>
          </form>
      </div>
  )
}

export default Contact