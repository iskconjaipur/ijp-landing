import React from "react";

const page = () => {
  return (
    <main className="mt-20 max-w-screen-xl p-10 m-auto">
      <h1 className="text-5xl font-bold mb-2">Return and Refund Policy</h1>
      <section className="text-justify mb-10">
        {/* <h1 className="text-3xl mb-2 font-bold">Refund Policy</h1> */}
        <p className="mb-7">
          <strong>Last Updated:</strong> 20 August 2024
        </p>

        <h2 className="text-2xl mb-2 font-semibold">1. General Policy</h2>
        <p className="mb-4">
          At ISKCON Jaipur, we are dedicated to providing valuable and spiritual
          experiences. Please be aware that all donations and payments for puja
          services are final and non-refundable. Once a transaction is
          completed, it cannot be reversed or refunded.
        </p>

        <h2 className="text-2xl mb-2 font-semibold">
          2. No Refunds or Returns
        </h2>
        <p className="mb-4">
          <strong>Puja Services:</strong> All payments made for
          puja services or donations are non-refundable. We appreciate your
          understanding and support in our spiritual and charitable endeavors.
        </p>

        <h2 className="text-2xl mb-2 font-semibold">
          3. Request for Clarification
        </h2>
        <p className="mb-4">
          If you have any questions or need clarification regarding our
          no-refund policy, please contact us. We are happy to provide further
          information or assistance.
        </p>

        <h2 className="text-2xl mb-2 font-semibold">
          4. Changes to the Refund Policy
        </h2>
        <p className="mb-4">
          We may update this Refund Policy occasionally. Any changes will be
          posted on our website with the updated &quot;Last Updated&quot; date. Please
          review the policy periodically to stay informed about any updates.
        </p>

        <h2 className="text-2xl mb-2 font-semibold">5. Contact Information</h2>
        <p className="mb-4">
          For any questions about our Refund Policy, please reach out to us:
        </p>
        <address className="mb-4">
          INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS
          <br />
          Sri Sri Giridhari Dauji Temple
          <br />
          Village Dholai, New Sanganer Road, Opposite Vijay Path, Mansarovar,
          Jaipur, Rajasthan 302020
        </address>
        <p>
          Email:{" "}
          <a href="mailto:iskconjaipur@gmail.com" className="text-blue-600">
            iskconjaipur@gmail.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+919649689649" className="text-blue-600">
            096496 89649
          </a>
        </p>
      </section>
    </main>
  );
};

export default page;
