import React from 'react'
import aboutus from '../assets/Images/test/Aboutus.svg';
import latest_reports from '../assets/Images/test/latestreports.svg';
import ExploreButton from '../components/Explore-button';
import ClientCarousel from '../components/Client-Carousel';

function Home() {
  return (
    <div>
      <section id="intro" className="clearfix">
        <div className="container d-flex h-100">
          <div className="row align-self-center">
            <div className="col-md-5 intro-info order-md-first order-last">
              <h1>Design Your Business Strategies  With Our Market Research Reports</h1>
              <br />
              <ExploreButton name="Explore Market Reports" href="#"></ExploreButton>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About <span>Us</span></h2>
              <p>We are a technology-driven market research company with strategic analysis of more than 12 industrial verticals. We analyze extremely large sets of data to discover deeper insights and provide accurate consulting.</p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-right">
              <img src={aboutus} alt="About us" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>IMR Market Reports an Innovative Market Research Company </h3>
                <p className="font-italic">
                IMR Market Reports is a visionary market research company who is ready to assist their 
                clients to grow their business by offering strategies through our market research
                 reports for gaining success. We have a well experienced team, who work efficiently
                  and provides complete excellent research data in a complete sync to provide overall coverage and accurate market insights on various industries.The company excels in competitive benchmarking, recognizing its importance in market research. With extensive industry expertise, modern methodologies, and access to a vast global database, they deliver both off-the-shelf and customized research solutions.  We are more than just a market research firm; we are solution providers.
                </p>
                <ul>
                  <li><i className="icofont-check-circled"></i> We are complete solution providers.</li>
                  <li><i className="icofont-check-circled"></i> We help you in your business decisions.</li>
                  <li><i className="icofont-check-circled"></i> We known for quality with unique reports.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Us Section -->
        <!--Latest report code removed from here--> */}
        <section id="departments" className="departments">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Latest <span>Reports</span></h2>
              <p>Find our latest reports published. We have more than 5,00,000+ market research reports covering major industrial products.</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-md-6 mb-5 mb-lg-0">
                <br /><br /><br />
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">      
                    <div className="carousel-item active">
                      <h3><a href="#">Worsted Fabric Market</a></h3>
                      <strong>August 2024</strong>
                      <p className="text-justify" style={{ textAlign: 'justify' }}>Report of Rigid PET Film is covering the summarized study of several factors encouraging the growth of the market such as market size, market type, major regions and end user applications. By using the report customer can recognize the several drivers that impact and govern the market. The report is describing the several types of Rigid PET Film Industry. Factors that are playing the major role for growth of specific type of product category and factors that are motivating the status of the market.</p>
                    </div>
                    
                  </div>
                </div>
                <ExploreButton name="Explore Reports" href="#"></ExploreButton>
              </div>
              <div className="col-lg-6">
                <img src={latest_reports} alt="latest_reports" style={{width:'90%', height:'90%'}}/>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Featured Services Section ======= --> */}
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Industry <span>Verticals</span></h2>
          <p>We are a global market research company, specialized in using big data and advanced analytics with strategic consulting covering more than 12 industrial verticals like Food and Beverages, Consumer Goods, Service Industry, Chemicals and Materials and etc.</p>
        </div>

        <div className="row">
          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i class="fas fa-fighter-jet"></i></div>
                <h4 className="title"><a href="https://imrmarketreports.com/aerospace-defense">Aerospace &amp; Defense</a></h4>
            
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0" style={{width:'100%'}}>
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-tractor"></i></div>
                <h4 className="title"><a href=" https://imrmarketreports.com/agricluture">Agriculture</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-truck"></i></div>
                <h4 className="title"><a href="https://imrmarketreports.com/automotive-transport">Automotive &amp; Transport</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-flask"></i></div>
                <h4 className="title"><a href=" https://www.imrmarketreports.com/chemicals-materials">Chemicals &amp; Materials</a></h4>
              </div>
            </a>
          </div>

        </div>
        <br />
        <div className="row">
          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="fas fa-shopping-cart"></i></div>
                <h4 className="title"><a href="#">Consumer Goods</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-0 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="fas fa-microchip"></i></div>
                <h4 className="title"><a href="#">Electronics &amp; Semiconductors</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-solar-panel"></i></div>
                <h4 className="title"><a href="#">Energy &amp; Natural Resources</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-apple-alt"></i></div>
                <h4 className="title"><a href="#">Food &amp; Beverages</a></h4>
              </div>
            </a>
          </div>

        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-heartbeat"></i></div>
                <h4 className="title"><a href="#">Healthcare</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-calculator"></i></div>
                <h4 className="title"><a href="#">IT &amp; Telecom</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-industry"></i></div>
                <h4 className="title"><a href="#">Manufacturing &amp; Construction</a></h4>
              </div>
            </a>
          </div>

          <div className="col-lg-3  align-items-stretch mb-5 mb-lg-0">
            <a href="#" style={{cursor: 'pointer'}}>
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fas fa-hotel"></i></div>
                <h4 className="title"><a href="#">Service Industry</a></h4>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section> 

    {/* <!-- End Featured Services Section -->
    <!-- ======= Testimonials Section ======= --> */}

    <section id="testimonials" className="testimonials"> 
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>We have served more than 500 fortune companies since 2019. We support our customer till their last query. </p>
        </div>

        <div className="owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay="100">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              IMR Market Reports team quickly grasped our requirements & customized the study as per our needs. They were open to accommodate few changes beyond agreed scope to improve the quality of the study. Well organized data and very good presentation of the final report, helped to derive insights easily.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>VP</h3>
            <h4>Food and Beverages Sector</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Thank you very much for your interest, appreciated. We were very satisfied with the services rendered by IMR Market Reports. Therefore, should we be in need again, we’d for sure, count on you. 
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>Managing Director</h3>
            <h4>Chemicals Sector</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              I had a great experience with IMR Market Reports team. They were very quick to respond to my inquiry. The package I finally purchased was different from what I first intended. The clear and prompt information I received helped me in finalizing and purchasing this package that would suit my requirements perfectly. It was a great, quick process to get the information I needed. 
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>Strategic Consultant </h3>
            <h4>Business Consulting Sector</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim
              dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
          </div>

          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
              labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Testimonials Section --> */}
    <ClientCarousel> </ClientCarousel>
    </main>
    </div>
  )
}

export default Home
