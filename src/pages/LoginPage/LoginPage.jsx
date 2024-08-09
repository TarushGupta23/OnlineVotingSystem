import './loginPage.css'

export default function loginPage() {
    return <section id='login-page' className='flex-center'>
        <div id='login-container'>
            <div id='login-explain'>
                some explainatory content about us here
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