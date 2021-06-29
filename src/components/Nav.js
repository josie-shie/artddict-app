import React, { useRef, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { IoCartSharp } from 'react-icons/io'
import { BiArrowToTop,BiCartAlt } from 'react-icons/bi'
import {
  FaUserAstronaut,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import $ from 'jquery'
import '../style/Nav.css'
import '../bootstrap/css/bootstrap.css'

const Nav = () => {
  const burgerRef = useRef()
  const circleRef = useRef()
  const xRef = useRef()
  const yRef = useRef()
  const zRef = useRef()
  const liRef = useRef()
  const logoRef = useRef()

  useEffect(() => {
    $(burgerRef.current).on('click', function () {
      if (!$(this).hasClass('open')) {
        openMenu()
      } else {
        closeMenu()
      }
    })
  }, [])

  const openMenu = () => {
    $(circleRef.current).addClass('expand')

    $(burgerRef.current).addClass('open')
    $(xRef.current, yRef.current, zRef.current).addClass(
      'collapse'
    )
    $('collapse').css('display', 'blocks')
    $('.menu li').addClass('animate')
    $(logoRef.current).addClass('animate')

    setTimeout(function () {
      $(yRef.current).hide()
      $(xRef.current).addClass('rotate30')
      $(zRef.current).addClass('rotate150')
    }, 70)
    setTimeout(function () {
      $(xRef.current).addClass('rotate45')
      $(zRef.current).addClass('rotate135')
    }, 120)
  }

  const closeMenu = () => {
    $(burgerRef.current).removeClass('open')
    $(xRef.current)
      .removeClass('rotate45')
      .addClass('rotate30')
    $(zRef.current)
      .removeClass('rotate135')
      .addClass('rotate150')
    $(circleRef.current).removeClass('expand')
    $('.menu li').removeClass('animate')
    $(logoRef.current).removeClass('animate')

    setTimeout(function () {
      $(xRef.current).removeClass('rotate30')
      $(zRef.current).removeClass('rotate150')
    }, 50)
    setTimeout(function () {
      $(yRef.current).show()
      $(
        xRef.current,
        yRef.current,
        zRef.current
      ).removeClass('collapse')
    }, 70)
  }

  return (
    <>
      <div className="nav-area">
        <nav>
          <div className="mynav">
            <div ref={circleRef} className="circle"></div>
            <div className="nav-icon text-center">
              <div className="mb-4">
                <Link to="/map">
                  <i>
                    <FaMapMarkedAlt />
                  </i>
                </Link>
              </div>
              <div className="mb-4">
                <Link to="#">
                  <i>
                    <FaUserAstronaut />
                  </i>
                </Link>
              </div>
              <div className="mb-4">
                <Link to="/cart">
                  <i>
                    <BiCartAlt />
                  </i>
                </Link>
              </div>
              <div className="mb-4">
                <Link to="#">
                  <i>
                    <BiArrowToTop />
                  </i>
                </Link>
              </div>
            </div>
            <div ref={burgerRef} className="burger">
              <div ref={xRef} className="x"></div>
              <div ref={yRef} className="y"></div>
              <div ref={zRef} className="z"></div>
            </div>
          </div>
          <div className="menu">
            <div className="logo">
              <img ref={logoRef} src="../image/logo.svg" />
            </div>
            <div>
              <ul>
                <li>
                  <Link ref={liRef} to="/store">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link ref={liRef} to="/event">
                    Event
                  </Link>
                </li>
                <li>
                  <Link ref={liRef} to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link ref={liRef} to="/accont">
                    Accont
                  </Link>
                </li>
                <li>
                  <Link ref={liRef} to="/contate">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default withRouter(Nav)
