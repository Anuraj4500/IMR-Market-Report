import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Privacy Policy' }
  ];
  return (
    <>
    <Breadcrumb items={breadcrumbItems} />
    <section id="about" className="about pt-2">
         
      <div className="container mt-4" data-aos="fade-up">
        <div className="section-title">
          <h2>PRIVACY POLICY</h2>
        </div>
        <div>
          <p>
            This Privacy Policy explains the strategic approach of IMR Market Reports towards collecting, using, disclosing and transferring of the users’ information by the company. It summarizes the various ways you access, view, and/or use the Service that we acquire and treat your data. It also regulates your data that we may offline acquire. This Privacy Policy does not cover information that we do not own or control about the sites, applications, destinations or services that are linked to from the Service.
          </p>

          <h5>INFORMATION USAGE AND COLLECTION</h5>
          <p>
            IMR Market Reports is involved in the process of determining the feasibility of new products or services by conducting direct consultation with the customer. This method allows our customers to explore the target audience and to monitor consumer preferences and other feedback on product value. The business gathers quantitative data about the market through research and interviews. Through virtue of changes in market dynamics, data can fluctuate. It is not responsible for any false or misleading information that the users or manufacturers provide.
          </p>
          <p>
            Other data that we collect is your basic, personal, and navigational information extensively but not limited. When you register for our services or newsletters, you are requested to provide your personal information, such as name, email, and contact details. With your permission, this information is temporarily stored to enhance the website – user experience. In addition, the required credentials will be stored on the secure servers and systems owned and managed by IMR Market Reports when you purchase any entity through our website.
          </p>

          <h5>AUTOMATED INFORMATION COLLECTION</h5>
          <p>
            We may collect some of your information automatically while you are browsing our website. Information automatically collected may include usage details, unique browser identifiers, IP addresses and information gathered through cookies, web beacons and other tracking technologies. These technologies can also be used to collect information about your online activities (traffic data, location data, logs, and other communication data) over time and across third-party websites or other online services (i.e., behavioral tracking). This information helps us improve our website and deliver a better and more personalized service.
          </p>

          <h5>COOKIE POLICIES</h5>
          <p>
            A cookie is a text file which is stored with your permission by a web browser on your machine. It helps to evaluate web traffic, or allows you to know when you visit a particular site. We use cookies to administer the website, store preferences for visitors, record session information, which helps us improve responsiveness for our users on the sites.
          </p>
          <p>
            A cookie does not automatically grant us access to your personal files on your computer, or any information other than the details that you want to share with us. By selecting the viable option in the dialog box that appears when you visit a website, you can opt to accept or decline cookies. Most web browsers allow cookies automatically but normally you can change your browser setting to decline. However, this may prevent you from taking full advantage of the website. Based on the data obtained from cookies, we are able to guide our visitors to new areas that may be of interest to them. It also helps us to customize web page content based on browser type of visitors or other information the visitor sends, and we take care that the same banner ad is not sent repeatedly to a user.
          </p>

          <h5>PRIVACY LAW COMPLIANCE</h5>
          <p>
            IMR Market Reports is committed to respecting confidentiality rights of the users. We adhere to all existing government laws and regulations and accept our responsibilities by constantly reviewing and extending our programs to keep up with the newly implemented GDPR requirements. You can read on our compliance with the GDPR here. In connection with the collection, storage and disclosure of personal information (including sensitive personal information) we also maintain physical, electronic and procedural safeguards.
          </p>

          <h5>DISCLAIMER</h5>
          <p>
            The company takes utmost care to ensure relevant and accurate information is provided on the website. It does not, however, provide any warranty, undertakings or representations about the authenticity of the website's content. It assumes no liability if the customer is suffering any loss or damage due to the use of the website information. The company's website contains certain links which will take you to websites of third parties. It is not, however, accountable and does not exercise any power over the websites' content. These links are for general purposes only and do not support any content found on these websites or any connection with their operators. Our security procedures mean we can sometimes request proof of identity before we disclose personal information to you.
          </p>

          <h5>COPYRIGHT NOTICE</h5>
          <p>
            All rights reserved by IMR Market Reports for Copyright of the content on the company's website. The client may only print or download content for personal use from the website. They will not make use of any of the content stored on any medium other than future display purposes and personal usage. Only with the prior written permission of IMR Market Reports can any resale, disclosure, lending, or duplication of service or publication be made.
          </p>
        </div>
      </div>
    </section> // End About Us Section
    </>
  );
}

export default PrivacyPolicy;
