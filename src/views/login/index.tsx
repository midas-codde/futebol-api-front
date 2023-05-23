import "./style.css"

const Login = () => {
  return (
    <>
      <div className='main-login'>
        <div className="main-left">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <img src="../src/assets/imgs/hero-banner.png" alt=""/>
        </div>
        <div className="main-right">
          <form>
            <div className="container-login">
              <h2>Bem-vindo de volta</h2>
              <h3>Bem-vindo de volta!Por favor, insira sua chave.</h3>
              <input placeholder='Digite sua chave' type="text" />
              {/* <span>Chave API incorreta. Tente novamente!</span> */}
              <div className="btn-login">Entrar</div>
            </div>
          </form>
        </div>
        <div className="footer">
          Desenvolvido por <a target='_blank' href="https://github.com/RichardMidas"><img className='logo-midas' src="../src/assets/imgs/logo-midas.png" alt="" /></a>
        </div>
      </div>
    </>
  )
}

export default Login