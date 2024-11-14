import React from 'react';
import ServiceFeature from '../components/ServiceFeature';
import Deliverables from '../components/Deliverables';
import Breadcrumb from '../components/Breadcrumb';

function SampleRequest() {
    const reportData = {
        title: "Sample Report Title",
        slug: "sample-report-slug",
        id: "12345",
        sprice: 100,
        mprice: 200,
        eprice: 300,
        date: "2024-11-12",
        category: "Sample Category"
    };

    const breadcrumbItems = [
       
        { label: 'Sample Request' }
    ];

    return (
        <div className="container-fluid p-0">
            <main id="main">
                {/* Breadcrumbs Section */}
                <Breadcrumb items={breadcrumbItems} />

                {/* Inner Page Section */}
                <section className="inner-page">
                    <div className="row">
                        {/* Left Column - Service Features */}
                        <div className="col-12 col-lg-3">
                            <ServiceFeature />
                        </div>

                        {/* Middle Column - Form */}
                        <div className="col-lg-6">
                            <div className="report-header">
                                <h2>{reportData.title}</h2>
                                <hr />
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><strong>Report Code</strong>: IMR-{reportData.id}</td>
                                            <td><strong>Category</strong>: {reportData.category}</td>
                                            <td><strong>Published On</strong>: {reportData.date}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <form method="POST" action="insert_sample_requests.php" id="form" data-aos="fade-up" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="name" className="form-control" id="name" required placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                        <div className="error-msg" id="name-error"></div>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="email" className="form-control" name="email" id="email" required placeholder="Business Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate"></div>
                                        <div className="error-msg" id="email-error"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="tel" className="form-control" name="phone" id="phone" required placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                        <div className="error-msg" id="phone-error"></div>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <select name="country" className="form-control">
                                            {/* Add country options here */}
                                        </select>
                                    </div>
                                </div>
                                <input type="text" name="honeypot" style={{ display: "none" }} value="" />
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="company" className="form-control" id="company" required placeholder="Company" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                        <div className="error-msg" id="company-error"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="designation" className="form-control" required id="designation" placeholder="Designation" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                        <div className="error-msg" id="designation-error"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <ul className="request-privacy">
                                    <li>We do not share your details. Read more about our Privacy Policies</li>
                                </ul>
                                <div className="text-center">
                                    <button type="button" className="btn request-btn" id="btnsubmit">
                                        <i className="bx bx-send"></i>&nbsp;Send Sample Request
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Column - License Details & Deliverables */}
                        <div className="col-lg-3">
                            <div className="text-center">
                                <a href={`https://www.imrmarketreports.com/reports/${reportData.slug}/`} className="btn summary-btn">
                                    <i className="bx bx-file"></i>&nbsp;View Summary &amp; TOC
                                </a>
                            </div>
                            <br />
                            <div className="card license">
      <div className="card-header style-card-header">License Details</div>
      <div className="card-body">
        <form method="GET" action="https://www.imrmarketreports.com/checkout/" style={{ margin: '0' }}>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
    <label style={{ width: '100%', margin: '0', padding: '0' }} className="radio">
        <li className="list-group-item mb-3" style={{ cursor: 'pointer' }}>
            <input type="radio" id="_single" name="user" value="1" defaultChecked />
            <span className="checkmark" style={{ marginBottom: '-10px' }}></span>
            &nbsp;<span style={{ float: 'left', paddingLeft:'15px' }}>&nbsp;&nbsp;&nbsp;Single User </span>
            <span style={{ float: 'right' }}>&nbsp;${reportData.sprice}</span>
        </li>
    </label>

    <label style={{ width: '100%', margin: '0', padding: '0' }} className="radio">
        <li className="list-group-item mb-3" style={{ cursor: 'pointer' }}>
            <input type="radio" id="_multi" name="user" value="2" />
            <span className="checkmark" style={{ marginBottom: '-10px' }}></span>
            &nbsp;&nbsp;<span style={{ float: 'left', paddingLeft:'15px' }}>&nbsp;&nbsp;&nbsp;Multi User </span>
            <span style={{ float: 'right' }}>&nbsp;${reportData.mprice}</span>
        </li>
    </label>

    <label style={{ width: '100%', margin: '0', padding: '0' }} className="radio">
        <li className="list-group-item mb-3" style={{ cursor: 'pointer' }}>
            <input type="radio" id="_enterp" name="user" value="3" />
            <span className="checkmark" style={{ marginBottom: '-10px' }}></span>
            &nbsp;&nbsp;<span style={{ float: 'left', paddingLeft:'15px' }}>&nbsp;&nbsp;&nbsp;Enterprise User </span>
            <span style={{ float: 'right' }}>&nbsp;${reportData.eprice}</span>
        </li>
    </label>
</ul>

<input type="hidden" name="id" value={reportData.id} readOnly />


          <button type="submit" className="custom_btn_buy">
            <i className="bx bx-cart"></i>&nbsp;BUY NOW
          </button>
        </form>
      </div>
    </div>

                            <Deliverables />
                        </div>
                    </div>

                    {/* Disclaimer Section */}
                    <div className="card disclaimer1 mt-3">
                        <div className="card-body">
                            <h6><strong>Disclaimer</strong></h6>
                            <hr />
                            <ol style={{ color: "#707070" }}>
                                <li>The sample is just to give you an overview of how the full version of the report would look like.</li>
                                <li>The sample report pages will not provide qualitative or quantitative data, only a structured overview.</li>
                                <li>Sample report pages represent sections according to the Table of Contents.</li>
                                <li>The full report provides comprehensive qualitative and quantitative data.</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default SampleRequest;
