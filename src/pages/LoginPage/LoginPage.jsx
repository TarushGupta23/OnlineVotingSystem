import './loginPage.css'

export default function loginPage() {
    return <section id='login-page' className='flex-center'>
        <div id='login-container'>
            <div id='login-explain'>
                <h3>Why Choose Us?</h3>
                We provide a powerful online voting platform designed to make elections easier, more secure, and accessible from anywhere. Whether you're organizing a small community vote or managing a large-scale election, our system offers everything you need to ensure a smooth, transparent, and trustworthy process.
            </div>

            <form>
                <span>
                    <h1>Login</h1>
                    <h3>Welcome back! Please login to your account</h3>
                </span>

                <span>
                    <label htmlFor=''>Email</label>
                    <input type="text" />
                </span>

                <span>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </span>

                <span id='forgot-pwd'>Forgot Password?</span>

                <span>
                    <button type='button'>Login</button>
                    <p>New User? <a href="">Sign Up</a></p>
                </span>

            </form>
        </div>
    </section>
}