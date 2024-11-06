import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">Make a reservation or inquire about private events</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Location</h3>
                <p className="text-gray-600">123 Culinary Avenue, Gastronomy District, GD 12345</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">reservations@chefzora.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-900 mb-2">Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Tuesday - Thursday: 5:30 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:30 PM - 11:00 PM</p>
                <p>Sunday: 11:00 AM - 3:00 PM, 5:30 PM - 9:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}