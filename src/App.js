import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from './pages/index/Index'
import Map from './pages/map/Map'
import MapEvent from './pages/map/MapEvent'
import Event from './pages/event/Event'
import ScrollToTop from './components/ScrollToTop'
import Artist from './pages/artist/Artist'

//Product
import Product from './pages/product/Product'
import ProductList from './pages/product/ProductList'
import ProductDetail from './pages/product/ProductDetail'
import MatchGame from './pages/product/MatchGame'

//auction
import AuctionDetail from './pages/Auction/AuctionDetail'
import Auction from './pages/Auction/Auction'
import UserAuction from './pages/Auction/userAuction'
import UserAuctionOver from './pages/Auction/userAuctionOver'

// User
import Add from './pages/user/Add'
import Login from './pages/user/Login'
import MsgEdit from './pages/user/MsgEdit'
import PwdEdit from './pages/user/PwdEdit'
import OrderPro from './pages/user/OrderPro'
import OrderTic from './pages/user/OrderTic'
import OrderProDetail from './pages/user/OrderProDetail'
import OrderTicDetail from './pages/user/OrderTicDetail'
import Coupon from './pages/user/Coupon'
import Ticket from './pages/user/Ticket'
import TicketDetail from './pages/user/TicketDetail'
import WorkShop from './pages/user/WorkShop'
import WorkShopDetail from './pages/user/WorkShopDetail'
import UserMyFav from './pages/user/UserMyFav'

// Event
import EventList from './pages/event/EventList'
import EventDetail from './pages/event/EventDetail'
import WorkshopShare from './pages/event/WorkshopShare'
import WorkshopUpload from './pages/event/WorkshopUpload'

// Cart
import CartProduct from './pages/cart/CartProduct'
import CartEvent from './pages/cart/CartEvent'
import CartAuction from './pages/cart/CartAuction'
import CartShipping from './pages/cart/CartShipping'
import CartPayment from './pages/cart/CartPayment'
import CartFinish from './pages/cart/CartFinish'

function App() {
  return (
    <Router>
      <>
        <Nav />
        <ScrollToTop>
          <Switch>
          <Route exact path="/map/museum:id">
          <MapEvent />
        </Route>
            <Route exact path="/auctionDetail/:id?">
              <AuctionDetail />
            </Route>
            <Route
              exact
              path="/event/event-list/detail/upload"
            >
              <WorkshopUpload />
            </Route>
            <Route
              exact
              path="/event/event-list/detail/share"
            >
              <WorkshopShare />
            </Route>
            <Route exact path="/event/event-list/detail">
              <EventDetail />
            </Route>
            <Route
              exact
              path="/product/product-list/product-detail/"
            >
              <ProductDetail />
            </Route>
            <Route exact path="/event/event-list">
              <EventList />
            </Route>
            <Route exact path="/user-orderpro/detail">
              <OrderProDetail />
            </Route>
            <Route exact path="/user-ordertic/detail">
              <OrderTicDetail />
            </Route>
            <Route exact path="/product/product-list">
              <ProductList />
            </Route>
            <Route exact path="/user-ticket/detail">
              <TicketDetail />
            </Route>
            <Route exact path="/user-workshop/detail">
              <WorkShopDetail />
            </Route>

            {/* 單一路徑 */}
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/user-add">
              <Add />
            </Route>
            <Route exact path="/user-login">
              <Login />
            </Route>
            <Route exact path="/user-msgedit">
              <MsgEdit />
            </Route>
            <Route exact path="/user-pwdedit">
              <PwdEdit />
            </Route>
            <Route exact path="/user-orderpro">
              <OrderPro />
            </Route>
            <Route exact path="/user-ordertic">
              <OrderTic />
            </Route>
            <Route exact path="/user-coupon">
              <Coupon />
            </Route>
            <Route exact path="/user-ticket">
              <Ticket />
            </Route>
            <Route exact path="/user-workshop">
              <WorkShop />
            </Route>
            <Route exact path="/user-myfav">
              <UserMyFav />
            </Route>
            <Route exact path="/user-Auction">
              <UserAuction />
            </Route>
            <Route exact path="/user-AuctionOver">
              <UserAuctionOver />
            </Route>
            {/* <Route exact path="/auction">
              <Auction />
            </Route> */}
            <Route exact path="/cart-payment">
              <CartPayment />
            </Route>
            <Route exact path="/cart-shipping">
              <CartShipping />
            </Route>
            <Route exact path="/cart-product">
              <CartProduct />
            </Route>
            <Route exact path="/cart-finish">
              <CartFinish />
            </Route>
            <Route exact path="/cart-event">
              <CartEvent />
            </Route>
            <Route exact path="/cart-auction">
              <CartAuction />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/artist">
              <Artist />
            </Route>
            <Route exact path="/auction">
              <Auction />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  )
}

export default App
