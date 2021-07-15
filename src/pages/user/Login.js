import { Carousel, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import './styles/Login.scss'
import { Link } from 'react-router-dom'
import Logoheader from './components/Logoheader'
import swal from 'sweetalert'
// images
import pic1 from './img/1.png'
import pic2 from './img/2.png'
import pic3 from './img/3.png'
import pic4 from './img/4.png'
import pic5 from './img/5.png'
import pic6 from './img/6.png'
// icons
import { FaFacebook } from 'react-icons/fa'
import axios from 'axios'

function Login(props) {
  /* 
    透過props傳遞APP current_user的設定函數setCurrentUser()
    current_user定義詳見 App.js
  */
  const { current_user, setCurrentUser } = props
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function loginToServer() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = { username, password }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/login'
    console.log(JSON.stringify(newData))

    // 用axios登入
    // const data = {}
    const data = await axios
      .post(url, newData)
      .then(function (response) {
        console.log(response.data)
        // const data = response.data
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    console.log(data)

    // console.log('伺服器回傳的json資料', data)
    // console.log('data = ', data)
    // 要等驗証過，再設定資料(簡單的直接設定)
    if (data.id) {
      swal({
        text: '登入成功！',
        icon: 'success',
        button: false,
        timer: 3000,
      })

      // 如果登入成功
      // 改動react App母層變數以紀錄現在的用戶登入狀態
      setCurrentUser(data.id)
    } else {
      swal({
        text: '帳號或密碼有誤，請重新登入',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      // data.id = undefined
      if (data.id != undefined) {
        window.location.replace(
          `../user-msgedit/${data.id}`
        )
        return data.id
      } else {
        setUsername('')
        setPassword('')
        return 0
      }
    }, 1000)
  }

  const loading = (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="u-body">
        <Logoheader />
        <Container className="d-flex">
          <div className="u-contanier1 col-lg-6 d-none d-lg-block d-xl-block">
            <div className="u-img-carousel">
              <Carousel
                fade
                controls={false}
                indicators={false}
              >
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={pic1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={pic6}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={pic4}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={pic5}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="u-title01">
              <span>加入會員</span>
            </div>
            <div className="u-title02">
              <span>精選好物盡在ArtDDICT</span>
            </div>
            <div className="u-title03">
              <span>藝文活動搶先知</span>
            </div>
          </div>

          <div className="u-container2  col-lg-6 col-sm-12">
            <div className="u-membertile">
              <p>MEMBERSHIP</p>
            </div>
            <div className="u-addInput">
              <div className="u-addbutton d-flex justify-content-around">
                <div className="u-loginbtn">
                  <Link to="/user-login">登入</Link>
                </div>
                <div className="u-addbtn">
                  <Link to="/user-add">註冊</Link>
                </div>
              </div>
              <div className="u-FB d-flex justify-content-around">
                <FaFacebook />
              </div>
              <form action="">
                <div class="form-group u-form">
                  <input
                    value={username}
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="請輸入信箱"
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}
                  />
                </div>

                <div class="form-group u-form">
                  <input
                    value={password}
                    type="password"
                    class="form-control"
                    id="password1"
                    placeholder="請輸入密碼"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </div>
                <div>
                  <small>
                    <div className="u-forgetPwd">
                      <a href="#/">忘記密碼？</a>
                    </div>
                  </small>
                </div>
                <div className="u-AddBtn">
                  <Link
                    onClick={() => {
                      loginToServer()
                    }}
                    className="u-link1"
                    style={{ textDecoration: 'none' }}
                  >
                    登入
                  </Link>
                  {/* <button onClick={loginToSever}> </button> */}
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default Login
