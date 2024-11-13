import React from 'react';
import Careercard from '../components/CareerCard';
import Breadcrumb from '../components/Breadcrumb';

const breadcrumbItems = [
    { label: 'Career' }
];

function Career() {
    return (
        <div className='container-fluid p-0'>
            <Breadcrumb items={breadcrumbItems} />
            <section className="container mt-4">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        {/* <img src={career} className="img-fluid" alt="Career" /> */}
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="ot-heading">
                            <span className="ms-4">Join Us</span>
                            <h2 className="main-heading text-dark">Are You Ready to Transform the Digital Landscape?</h2>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ipsum. Numquam earum rerum, error quaerat nostrum aperiam culpa ipsam facere doloribus beatae laboriosam nam ipsum quasi quia suscipit debitis temporibus.
                                Iusto blanditiis dolore, odio incidunt eligendi quidem unde doloremque maxime ipsa amet. Cumque voluptatibus quas nulla officiis ducimus quos nam nisi aut commodi suscipit fuga, et magni expedita molestiae incidunt.
                                Consequatur laboriosam veritatis recusandae, illo, cumque et in nam quia voluptatibus velit dolorum itaque doloremque eos iusto unde explicabo laudantium beatae voluptatum totam ipsum reiciendis ad amet! Modi, nulla voluptatum!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container mt-4'>
                <Careercard />
            </div>
        </div>
    );
}

export default Career;
