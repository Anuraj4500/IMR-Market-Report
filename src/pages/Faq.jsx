import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const faqData = [
  {
    id: 1,
    que: "What is Market Research?",
    ans: "Market research involves the collection and analysis of data to understand market trends and consumer preferences."
  },
  {
    id: 2,
    que: "How accurate are the reports?",
    ans: "Our reports are generated through thorough research and validated data sources, ensuring accuracy."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id); // Toggle the active state of the item
  };
  const breadcrumbItems = [
    { label: 'FAQ' }
  ];
  return (
   
    <section id="about" className="about">
         <Breadcrumb items={breadcrumbItems} />
      <div className="container mt-4" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked <span>Questions</span></h2>
        </div>

        <div className="accordion" id="accordionExample">
          {faqData.length > 0 ? (
            faqData.map((item) => (
              <div className="card" key={item.id}>
                <div className="card-header" id={`heading${item.id}`}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link accordian"
                      type="button"
                      onClick={() => toggleAccordion(item.id)} // Trigger state change on click
                      aria-expanded={openItem === item.id ? "true" : "false"} // Set expanded state
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.que}
                    </button>
                  </h2>
                </div>

                <div
                  id={`collapse${item.id}`}
                  className={`collapse ${openItem === item.id ? 'show' : ''}`} // Control collapse state based on the `openItem` state
                  aria-labelledby={`heading${item.id}`}
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    {item.ans}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No FAQs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
