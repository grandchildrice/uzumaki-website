'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Visit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    purpose: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
    alert('Thank you for your interest! We will get back to you soon.')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:underline mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Visit or Stay</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dates" className="block mb-2">Preferred Dates</label>
          <input
            type="text"
            id="dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="purpose" className="block mb-2">Purpose of Visit</label>
          <textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Request
        </button>
      </form>
    </div>
  )
}

