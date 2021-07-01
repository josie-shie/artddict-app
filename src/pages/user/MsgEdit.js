import React from 'react'
import logo from './img/logo-bk.svg'
import './styles/MsgEdit.scss'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Menu from './Menu'

function MsgEdits() {
  return (
    <>
      <div className="u-body">
        <header>
          <div className="u-container-fluid">
            <div className="u-logo-header">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </header>
        <div className="u-userMenu">
          <Menu />
        </div>
        <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-userMsg1">
              <Nav.Link as={Link} to="/user-msgedit">
                會員資料
              </Nav.Link>
            </div>
            <div className="u-userPwd1">
              <Nav.Link as={Link} to="/user-pwdEdit">
                修改密碼
              </Nav.Link>
            </div>
          </div>
        </div>
        <div className="u-userData">
          <form>
            <div className="form-group u-form1">
              <label for="username">帳號</label>
              <input
                type="email"
                className="form-control"
                id="username"
              />
            </div>
            <div className="form-group u-form1">
              <label for="name">姓名</label>
              <input
                type="text"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group u-form1">
              <label for="tel">手機</label>
              <input
                type="tel"
                className="form-control"
                id="tel"
              />
            </div>
            <div className="form-group u-form1">
              <label for="gender">性別</label>
              <br />
              <select>
                <option></option>
                <option>男</option>
                <option>女</option>
                <option>不提供</option>
              </select>
            </div>
            <div className="form-group u-form1">
              <label for="birthday">生日</label>
              <input
                type="date"
                className="form-control"
                id="birthday"
              />
            </div>
            <div className="form-group u-form1">
              <label for="address">住址</label>
              <br />
              <div className="u-Select">
                <select name="" id="">
                  <option>請選擇縣市</option>
                </select>

                <select name="" id="" className="u-sel2">
                  <option>請選擇區域</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                id="address"
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-dark editBtn"
            >
              修改
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default MsgEdits
