import '../assets/css/login.css'
import background from "assets/img/backgroundLogin.png"
import Register from "views/Register"
import Home from "views/Home"


function Login() {
  return (
    <>
      <div className="container">
        <div className='navbar'>
          <div>
            <a href='#'>
              Ticket V-League
            </a>
          </div>
          <nav>
            <ul id="Item">
              <li><a href="Home">Home</a></li>
              <li><a href="Register">Register</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='login'>
        <div className='container'>
          <div className='row-login'>
            <div className='col-2'>
              <img
                src={background}
                style={{ width: "100%" }}
              />
            </div>

            <div className='col-2'>
              <div className='form-container'>
                <div className='form-btn'>
                  <span >Login</span>
                  <hr id='Indicator' />
                </div>                
                <form id="LoginForm">
                  <input type={'text'} name={''} placeholder={'Username or email'} />
                  <input type={'password'} name={''} placeholder={'Password'} />
                  <button type={'submit'} class='btn' name={''}>Login</button>
                  <a href='#'>
                    <img src='http://www.testyou.in/sign-in-with-google.png' >
                    </img>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;