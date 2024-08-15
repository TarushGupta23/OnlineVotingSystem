import Navbar from './../../components/Navbar/Navbar'
import './landingPage.css'

export default function LandingPage() {
    return <div id="landing-page">
        <Navbar />
        <section id="hero">
            <div className="hero-content bgrd-blur">
                <img src="icons/hero-img.png" alt="" />
                <div className='wrapper'>
                    <h1>Your <em>Vote</em>, Your Voice</h1>
                    <p>
                        Play your part in shaping our nation's future.
                    </p>
                    <div className="hero-buttons">
                        <button className="gradient-btn"><div><span>Register to Vote</span></div></button>
                        <button className="gradient-btn"><div><span>Log In to Vote</span></div></button>
                    </div>
                </div>
            </div>
        </section>

        <section id="how-it-works">
            <h2>How It Works</h2>
            <div class="steps">
                <div class="step">
                    <h3>Step 1: Register to Vote</h3>
                    <p>Sign up online to create your voting account. Make sure to provide valid identification.</p>
                </div>
                <div class="step">
                    <h3>Step 2: Verify Your Identity</h3>
                    <p>After registering, verify your identity using the secure verification process.</p>
                </div>
                <div class="step">
                    <h3>Step 3: Cast Your Vote</h3>
                    <p>Log in during the election period and cast your vote for your preferred candidates.</p>
                </div>
                <div class="step">
                    <h3>Step 4: Track Your Ballot</h3>
                    <p>After voting, you can track your ballot to ensure it has been counted securely.</p>
                </div>
            </div>
        </section>

        <section id="election-info">
            <h2>Election Information</h2>
            <div class="info-blocks">
                <div class="info-block">
                    <h3>Election Commission of India</h3>
                    <p>The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India at both national and state levels.</p>
                </div>
                <div class="info-block">
                    <h3>Voter Eligibility</h3>
                    <p>To be eligible to vote in India, you must be a citizen of India, at least 18 years of age, and registered as a voter in the constituency where you reside.</p>
                </div>
                <div class="info-block">
                    <h3>Electoral Process</h3>
                    <p>The electoral process in India includes multiple stages: nomination of candidates, campaigning, polling, and counting of votes. Elections are held for the Lok Sabha, Rajya Sabha, and State Legislative Assemblies.</p>
                </div>
                <div class="info-block">
                    <h3>Voting Method</h3>
                    <p>India primarily uses Electronic Voting Machines (EVMs) in its elections, ensuring quick and secure voting and counting processes.</p>
                </div>
                <div class="info-block">
                    <h3>Voter ID Card</h3>
                    <p>The Voter ID card, issued by the Election Commission, is a mandatory document for voting. It serves as both identification and proof of registration.</p>
                </div>
                <div class="info-block">
                    <h3>Election Schedule</h3>
                    <p>Elections in India are typically held in multiple phases to ensure smooth and secure polling across various regions. The schedule is announced by the Election Commission well in advance.</p>
                </div>
            </div>
        </section>

        <section id="key-features">
            <h2>Key Features</h2>
            <div class="features">
                <div class="feature">
                    <h3>Secure Voting</h3>
                    <p>Our platform ensures your vote is securely encrypted and protected against fraud.</p>
                </div>
                <div class="feature">
                    <h3>Anonymous Voting</h3>
                    <p>Your vote remains completely anonymous, ensuring privacy and integrity in the electoral process.</p>
                </div>
                <div class="feature">
                    <h3>User-Friendly Interface</h3>
                    <p>Designed with simplicity in mind, our platform is easy to use for voters of all ages.</p>
                </div>
                <div class="feature">
                    <h3>Real-Time Results</h3>
                    <p>Get instant updates on voting progress and results as they are tallied in real-time.</p>
                </div>
                <div class="feature">
                    <h3>24/7 Support</h3>
                    <p>Our dedicated support team is available around the clock to assist with any issues or questions.</p>
                </div>
                <div class="feature">
                    <h3>Accessible for All</h3>
                    <p>Our platform is accessible to people with disabilities, ensuring everyone can participate in the voting process.</p>
                </div>
            </div>
        </section>

        <section id="testimonials">
            <h2>What Our Users Say</h2>
            <div class="testimonials">
                <div class="testimonial">
                    <p>"This platform made voting so much easier and secure. I was able to cast my vote without any hassle."</p>
                    <h4>- Ramesh Kumar, Delhi</h4>
                </div>
                <div class="testimonial">
                    <p>"I appreciate the transparency and the real-time updates. It felt great to participate in the election process so seamlessly."</p>
                    <h4>- Priya Sharma, Mumbai</h4>
                </div>
                <div class="testimonial">
                    <p>"The accessibility features are fantastic. My grandparents were able to vote without any issues, thanks to the user-friendly interface."</p>
                    <h4>- Anjali Verma, Bangalore</h4>
                </div>
            </div>
        </section>

        <section id="resources">
            <h2>Resources</h2>
            <div class="resources-list">
                <div class="resource">
                    <h3>Voter Registration Guide</h3>
                    <p>Learn how to register to vote, update your voter details, and ensure you are eligible to vote in the upcoming elections.</p>
                    <a href="voter-registration-guide.pdf" download>Download Guide</a>
                </div>
                <div class="resource">
                    <h3>Election Schedule</h3>
                    <p>Stay informed about upcoming election dates, phases, and important deadlines for each region in India.</p>
                    <a href="election-schedule.pdf" download>Download Schedule</a>
                </div>
                <div class="resource">
                    <h3>Frequently Asked Questions (FAQ)</h3>
                    <p>Find answers to common questions about the voting process, eligibility, and more.</p>
                    <a href="faq.html">Read FAQs</a>
                </div>
                <div class="resource">
                    <h3>Election Laws and Guidelines</h3>
                    <p>Understand the legal framework and guidelines governing the election process in India.</p>
                    <a href="election-laws.pdf" download>Download Document</a>
                </div>
            </div>
        </section>

        <footer id="footer">
            <div class="footer-content">
                <div class="footer-left">
                    <h4>About Us</h4>
                    <p>We are dedicated to providing a secure and accessible voting platform for all citizens. Our mission is to enhance the democratic process through innovative technology.</p>
                </div>
                <div class="footer-middle">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#key-features">Key Features</a></li>
                        <li><a href="#election-info">Election Information</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-right">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:info@votingplatform.com">info@votingplatform.com</a></p>
                    <p>Phone: +91-123-456-7890</p>
                    <p>Address: 123 Election Road, New Delhi, India</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Voting Platform. All rights reserved.</p>
            </div>
        </footer>
    </div>
}
