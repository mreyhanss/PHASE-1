import logo from './logo.svg';
import './App.css';

function CobaFacebook() {
  function Button() {
    return (
      <div>
        <button className='Login'>
          <p className='Judul'>
            Masuk
          </p>
        </button>
      </div>
    )
  }

  function ButtonSmall() {
    return (
      <div>
        <button className='Signup'>
          <p className='Judul2'>
            Buat Akun Baru
          </p>
        </button>
      </div>
    )
  }

  function TextInput({ placeholder }) {
    return (
      <div className='textinputwrapper'>
        <input className='inputstyle' placeholder={placeholder} />
      </div>
    )
  }

  return (
    <div className='Container'>
      <div className='Utama'>
        <div className='TembokKiri'>
          <p className='title'>
            facebook
          </p>
          <p className='undertitle'>
            Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
          </p>
        </div>
        <div>
          <div className='TembokKanan'>
            <div className='TemKan1'>
              <TextInput placeholder={'Email atau Nomor Telepon'} />
              <TextInput placeholder={'Kata Sandi'} />
              <Button />
              <div className='Forgot'>
                <p>
                  Lupa Kata Sandi ?
                </p>
              </div>
              <div className='buttonsmallwrap'>
                <ButtonSmall />
              </div>
            </div>

          </div>
          <div className='kataakhir'>
            <p>
              Buat Halaman untuk selebriti, merek, atau bisnis.
            </p>
          </div>
        </div>


      </div>
    </div>


  )
}

export default CobaFacebook;
