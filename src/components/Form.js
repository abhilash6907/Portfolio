import "./FormStyles.css"
import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"


const Form = () => {
  const form = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    /* Read configuration from environment variables. Create a `.env` file
       at the project root with the following variables (CRA requires the
       REACT_APP_ prefix):

       REACT_APP_EMAILJS_SERVICE_ID=service_xxx
       REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
       REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

       Then restart the dev server. If the variables are not set we bail out
       and show an explanatory message instead of attempting the send.
    */
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS is not configured. Set REACT_APP_EMAILJS_* in .env")
      setStatus("NO_CONFIG")
      return
    }

    // Initialize EmailJS (safe to call multiple times) and send the form
    try {
      setLoading(true)
      emailjs.init(PUBLIC_KEY)
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log("EmailJS result:", result)
          setStatus("SUCCESS")
          e.target.reset()
        })
        .catch((error) => {
          console.error("EmailJS error:", error)
          setStatus("ERROR")
        })
        .finally(() => setLoading(false))
    } catch (err) {
      console.error("Unexpected error sending email:", err)
      setStatus("ERROR")
      setLoading(false)
    }
  }

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Your Name</label>
        <input id="user_name" name="user_name" type="text" required />

        <label htmlFor="user_email">Email</label>
        <input id="user_email" name="user_email" type="email" required />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" placeholder="Type your message here" />

        <button className="btn" type="submit">Send</button>

        {status === "SUCCESS" && (
          <p style={{ color: "#4BB543", marginTop: "1rem" }}>Message sent — thank you!</p>
        )}
        {status === "NO_CONFIG" && (
          <p style={{ color: "#D97706", marginTop: "1rem" }}>
            Email sending is not configured. Set REACT_APP_EMAILJS_SERVICE_ID,
            REACT_APP_EMAILJS_TEMPLATE_ID and REACT_APP_EMAILJS_PUBLIC_KEY in
            your `.env` and restart the dev server.
          </p>
        )}
        {status === "ERROR" && (
          <p style={{ color: "#D8000C", marginTop: "1rem" }}>
            Oops — something went wrong. Try again or check console for details.
          </p>
        )}
        {loading && (
          <p style={{ color: "#1E90FF", marginTop: "1rem" }}>Sending…</p>
        )}
      </form>
    </div>
  )
}

export default Form