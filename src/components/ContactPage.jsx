// src/components/ContactPage.js
// import React, { useState } from "react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     subject: "",
//     email: "",
//     body: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement form validation
//     if (
//       formData.fullName.length >= 3 &&
//       formData.subject.length >= 3 &&
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
//       formData.body.length >= 3
//     ) {
//       console.log(formData);
//     } else {
//       console.log("Form validation failed");
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             minLength={3}
//           />
//         </label>
//         <label>
//           Subject:
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//             minLength={3}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Body:
//           <textarea
//             name="body"
//             value={formData.body}
//             onChange={handleChange}
//             required
//             minLength={3}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

// ContactPage.js
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const { fullName, subject, email, body } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your validation logic here before submitting

    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            required
            minLength={3}
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            required
            minLength={3}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            name="body"
            value={body}
            onChange={handleChange}
            required
            minLength={3}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
