import React,{useState} from 'react'
import { Form } from 'react-router-dom'
const InquiryForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true); 
    }
  }

  return (
    <div className="p-4">
      
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for your inquiry, {formData.name}!</h2>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      ) : (
        
        <Form method="post" onSubmit={handleSubmit} className="border p-4 rounded">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger">Submit</button>
        </Form>
      )}
    </div>



    
  )
}

export default InquiryForm

