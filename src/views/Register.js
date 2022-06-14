import '../assets/css/login.css'
import background from "assets/img/backgroundLogin.png"
import login from "views/Login"
import Home from "views/Home"

function Regiater() {
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
              <li><a href="login">Login</a></li>
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
                  <span >Register</span>
                  <hr id='Indicator' />
                </div>
                <form id="RegForm">
                  <input type={'text'} name={''} placeholder={'Username or email'} />
                  <input type={'password'} name={''} placeholder={'Password'} />
                  <input type={'text'} name={''} placeholder={'Phone'} />
                  <button type={'submit'} class='btn' name={''}>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  };
  
  export default Regiater;