"use client";

const ContactForm = () => {
  return (
    // <div className="">
    <div className="w-full sm:mb-0 mb-10 sm:w-[500px] bg-white shadow-xl rounded px-4 sm:px-8 pt-6 pb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-600 text-sm font-bold mb-2"
          >
            Phone:
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none bg-white"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#d17a29] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    // <div className="w-11/12 sm:w-[500px]" id="map">
    //   <iframe
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.278485730383!2d75.74708597543663!3d26.83109337669586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57ac44ce2e3%3A0xd3f1209a496907b5!2sISKCON%20Temple%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1715681136297!5m2!1sen!2sin"
    //     width="100%"
    //     height="500"
    //     style={{ border: 0 }}
    //     allowFullScreen=""
    //     loading="lazy"
    //     referrerPolicy="no-referrer-when-downgrade"
    //   ></iframe>
    // </div>
    // </div>
  );
};

export default ContactForm;
