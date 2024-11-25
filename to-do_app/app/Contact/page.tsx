'use client';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-center text-4xl font-bold">Contact Me</h1>
      </header>

      <main className="flex-grow container mx-auto px-6 py-10">
        <section className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            If you have any questions about the To-Do app, or if you would like to collaborate on a project, feel free to reach out!
          </p>

          <form action="https://api.web3forms.com/submit"
                method="POST" 
                className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-1">
                Name
              </label>
              <input type="hidden" name="access_key" value="3a530635-1a2f-4f39-8cae-c6d8eacfc4ea"/>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-1">
                Email
              </label>
              <input type="hidden" name="access_key" value='3a530635-1a2f-4f39-8cae-c6d8eacfc4ea'/>
              <input
                type="email"
                id="email"
                // name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
