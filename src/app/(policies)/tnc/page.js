import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="text-justify mt-24 px-10 max-w-screen-xl m-auto">
      <h1 className="text-4xl mb-2 font-bold">Terms and Conditions</h1>
      <p className="mb-4 font-bold">Last Updated: 20 August 2024</p>

      <section>
        <h2 className="text-2xl mb-2 font-bold">1. Introduction</h2>
        <p className="mb-4">
          Welcome to the ISKCON Jaipur website (
          <Link href="https://www.iskconjaipur.com">
            https://www.iskconjaipur.com
          </Link>
          ). By accessing and using our website, you agree to comply with and be
          bound by these Terms and Conditions. Please read them carefully before
          using our site. If you do not agree with these terms, please do not
          use our website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">2. Use of the Website</h2>
        <p className="mb-4">
          <strong>Access:</strong> You are granted a limited, non-exclusive,
          non-transferable license to access and use our website for personal
          and non-commercial purposes.
        </p>
        <p className="mb-4">
          <strong>Prohibited Activities:</strong> You may not use our website
          for any unlawful purpose or in a way that could damage, disable,
          overburden, or impair the site. Unauthorized use of the site may
          result in termination of your access.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">3. No Payment Gateway</h2>
        <p className="mb-4">
          <strong>Payments:</strong> Our website does not include a payment
          gateway. All transactions and donations are handled via direct
          contact.
        </p>
        <p className="mb-4">
          <strong>Services:</strong> We do not process any payments through the
          website. All contributions and service bookings must be arranged
          through direct contact with ISKCON Jaipur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">4. Content</h2>
        <p className="mb-4">
          All content on our website, including text, images, logos, and design,
          is the exclusive property of ISKCON Jaipur. You acknowledge that
          ISKCON Jaipur owns all rights, titles, and interests in this content.
          Unauthorized use, reproduction, copying, modification, or distribution
          of any content is strictly prohibited without prior written permission
          from us.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">5. No Content Upload</h2>
        <p className="mb-4">
          <strong>User Content:</strong> Our website does not support or allow
          users to upload or submit content. Any content provided on the website
          is solely managed by ISKCON Jaipur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">6. No Feedback Form</h2>
        <p className="mb-4">
          <strong>Feedback:</strong> We do not provide a feedback or query form
          on our website. For any questions or concerns, please contact us
          directly via email or phone.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">7. Limitation of Liability</h2>
        <p className="mb-4">
          <strong>Disclaimer:</strong> The website and its content are provided
          &quot;as is&quot; without warranties of any kind. ISKCON Jaipur does not
          guarantee the accuracy or completeness of the website content and is
          not liable for any errors or omissions.
        </p>
        <p className="mb-4">
          <strong>Liability:</strong> We shall not be liable for any direct,
          indirect, incidental, special, or consequential damages arising from
          the use of, or inability to use, the website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">
          8. Changes to Terms and Conditions
        </h2>
        <p className="mb-4">
          <strong>Updates:</strong> We may update these Terms and Conditions
          from time to time. Changes will be posted on this page with the
          updated &quot;Last Updated&quot; date. Your continued use of the website
          signifies your acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">9. Governing Law</h2>
        <p className="mb-4">
          <strong>Jurisdiction:</strong> These Terms and Conditions are governed
          by and construed in accordance with the laws of India. Any disputes
          arising out of or related to these terms shall be subject to the
          exclusive jurisdiction of the courts in Jaipur, Rajasthan.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-2 font-bold">10. Contact Information</h2>
        <p>
          For any questions about these Terms and Conditions, please contact us:
        </p>
        <address className="mb-4">
          INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS
          <br />
          Sri Sri Giridhari Dauji Temple
          <br />
          Village Dholai, New Sanganer Road, Opposite Vijay Path, Mansarovar,
          Jaipur, Rajasthan 302020
          <br />
          Email:{" "}
          <a href="mailto:iskconjaipur@gmail.com">iskconjaipur@gmail.com</a>
          <br />
          Phone: 096496 89649
        </address>
      </section>
    </main>
  );
};

export default page;
