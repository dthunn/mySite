import React, { useState } from 'react'

import Layout from '../components/Layout'
import styles from '../sass/contact.module.scss'
import Title from '../components/Title'
import FormInput from '../components/FormInput'
import FormInputText from '../components/FormInputText'
import SEO from '../components/SEO'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // const handleSubmit = e => {
  //   e.preventDefault()
  // }

  // const handleChange = e => {
  //   const { value, name } = e.target

  //   setInput({ ...input, [name]: value })
  // }

  return (
    <Layout>
      <SEO title="Contact" description="Contact Me" />
      <div className={styles.contact}>
        <Title title="Contact Me" />
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.formHeader}>Lets Start Your Next Project!</h1>
            <form
              name="contact"
              className={styles.form}
              action="/success"
              method="POST"
              data-netlify="true"
            >
              <FormInput
                type="text"
                name="fullName"
                value={name}
                onChange={e => setName(e.target.value)}
                label="Full Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Email Address"
                required
              />
              <FormInputText
                rows="3"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                label="Message"
                required
              />
              <div className={styles.buttonContainer}>
                <button type="submit" className="btn-white btn-white--form">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
