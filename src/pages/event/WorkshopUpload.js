import { React, useState, useRef, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  Container,
  Row,
  Modal,
  Button,
} from 'react-bootstrap'

import $ from 'jquery'

// import component
import Lightheader from './components/Lightheader'
import BreadCrumb from './components/EventBreadCrumb'

// react icons
import { IoIosArrowForward, IoMdAdd } from 'react-icons/io'

// import pictures
import Square from './images/square.gif'
// Pictures
import EuListCardPic from './images/event/006.jpg'

import EuGreySpin from './images/arddict-circle-gr.svg'

import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/WorkshopUpload.scss'

function WorkshopUpload(props) {
  const id = props.match.params.id

  // input useRef
  const inputRef = useRef()
  const inputRef2 = useRef()
  const inputRef3 = useRef()
  const inputRef4 = useRef()
  // button 啟動 input
  const triggerFileSelectPopup = () =>
    inputRef.current.click()
  const triggerFileSelectPopup2 = () =>
    inputRef2.current.click()
  const triggerFileSelectPopup3 = () =>
    inputRef3.current.click()
  const triggerFileSelectPopup4 = () =>
    inputRef4.current.click()

  // 圖片的上傳file
  const [isImg, setIsImg] = useState()
  const [isImg2, setIsImg2] = useState()
  const [isImg3, setIsImg3] = useState()
  const [isImg4, setIsImg4] = useState()
  // 圖片的base64資料
  const [preview, setPreview] = useState()
  const [preview2, setPreview2] = useState()
  const [preview3, setPreview3] = useState()
  const [preview4, setPreview4] = useState()


  const [shareImg, setShareImg] = useState('[]')
  const [userId, setUserId] = useState('')
  const [shareComment, setShareComment] = useState('')

  // const [show, setShow] = useState(false)
  // const [inputData, setInputData] = useState('')

  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  // useEffect( handleShow, [inputData])

  // async function getEventIdServer() {
  //   const url = `http://localhost:6005/event/event-list/${id}`
  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   setEventId(data.eventId)

  // }

  async function addEventShareSever() {
    const newData = { id, shareComment, shareImg }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/event/upload'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      props.history.push(
        `/event/event-list/detail/share/${id}`
      )
    }, 500)
  }

  useEffect(() => {
    if (isImg) {
      const reader = new FileReader()
      reader.onloadend = () =>{
         setPreview(reader.result)
      }
      reader.readAsDataURL(isImg)
    }else{
      setPreview(null)
    }
  }, [isImg])

  useEffect(() => {
    if (isImg2) {
      const reader2 = new FileReader()
      reader2.onloadend = () => {
        setPreview2(reader2.result)
      }
      reader2.readAsDataURL(isImg2)
    } else {
      setPreview2(null)
    }
  }, [isImg2])

  useEffect(() => {
    if (isImg3) {
      const reader3 = new FileReader()
      reader3.onloadend = () => {
        setPreview3(reader3.result)
      }
      reader3.readAsDataURL(isImg3)
    } else {
      setPreview3(null)
    }
  }, [isImg3])

  useEffect(() => {
    if (isImg4) {
      const reader4 = new FileReader()
      reader4.onloadend = () => {
        setPreview4(reader4.result)
      }
      reader4.readAsDataURL(isImg4)
    } else {
      setPreview4(null)
    }
  }, [isImg4])
 
  useEffect(() => {
    console.log(shareComment)
  }, [shareComment])

  return (
    <>
      <div className="reduce-width">
        <Lightheader />
        <Container className="e-upload " fluid>
          <Row className="py-4 eu-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding">
            <div className="eu-pic-up col-12 p-0 mb-4">
              <h5 className="cn-font">主題工作坊</h5>
              <h2>我是活動名稱</h2>
            </div>
            {/* 資料form表單 */}
            <div className="col-12 pl-0 justify-content-between d-flex flex-wrap">
              <h5 className="eu-upload-title col-12 p-0 cn-font mb-3">
                作品圖片:
              </h5>
              <form
                className="col-8 p-0 justify-content-start d-flex flex-wrap"
                action=""
                form
                method="post"
                enctype="multipart/form-data"
              >
                <div className="eu-pic-left col-8 p-0 mr-3">
                  <div
                    className="position-relative"
                    onClick={() => triggerFileSelectPopup()}
                    id="#bgImg"
                    style={{
                      backgroundImage:
                        'url(' +
                        `http://localhost:6005/eventpic/share/` +
                        ')',
                      backgroundSize: 'cover',
                    }}
                  >
                    <img
                      className="up-spin position-absolute"
                      src={EuGreySpin}
                      alt=""
                    />

                    <input
                      type="file"
                      style={{ display: 'none' }}
                      ref={inputRef}
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0]
                        if (file) {
                          setIsImg(file)
                        } else {
                          setIsImg(null)
                        }
                      }}
                    />
                    {preview ? (
                      <img
                        className="w-100 h-100 position-absolute"
                        src={preview}
                        style={{ objectFit: 'cover' }}
                        alt=""
                      />
                    ) : (
                      <button
                        className="e-btn-m cn-font position-absolute"
                        type="button"
                      >
                        上傳圖片
                        <IoMdAdd />
                      </button>
                    )}
                    <img src={Square} alt="" />
                  </div>
                </div>

                <div className="eu-pic-right col-3 p-0">
                  <div className="col-12 p-0 d-flex flex-wrap">
                    <div
                      className="col-10 p-0 position-relative"
                      onClick={() =>
                        triggerFileSelectPopup2()
                      }
                    >
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputRef2}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            setIsImg2(file)
                          } else {
                            setIsImg2(null)
                          }
                        }}
                      />
                      {preview2 ? (<img
                        className="w-100 h-100 position-absolute"
                        src={preview2}
                        style={{ objectFit: 'cover' }}
                        alt=""
                      />):(
                      <button
                        className="position-absolute"
                        type="button"
                      >
                        <IoMdAdd />
                      </button>)}
                      <img src={Square} alt="" />
                    </div>
                    <div
                      className="col-10 my-2 p-0"
                      onClick={() =>
                        triggerFileSelectPopup3()
                      }
                    >
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputRef3}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            setIsImg3(file)
                          } else {
                            setIsImg3(null)
                          }
                        }}
                      />
                      {preview3 ? (
                      <img
                        className="w-100 h-100 position-absolute"
                        src={preview3}
                        style={{ objectFit: 'cover' }}
                        alt=""
                      />):(
                      <button
                        className="position-absolute"
                        type="button"
                      >
                        <IoMdAdd />
                      </button>)}
                      <img src={Square} alt="" />
                    </div>
                    <div
                      className="col-10 p-0"
                      onClick={() =>
                        triggerFileSelectPopup4()
                      }
                    >
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputRef4}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            setIsImg4(file)
                          } else {
                            setIsImg4(null)
                          }
                        }}
                      />
                      {preview4 ? (<img
                        className="w-100 h-100 position-absolute"
                        src={preview4}
                        style={{ objectFit: 'cover' }}
                        alt=""
                      /> ) :(
                      <button className="position-absolute" type="button">
                        <IoMdAdd />
                      </button>)}
                      <img src={Square} alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="eu-upload-title col-12 p-0 cn-font mt-5 mb-3">
                  作品說明:
                </h5>
                <textarea
                  className="eu-text col-11 pr-2"
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    setShareComment(e.target.value)
                  }}
                ></textarea>

                <div className="col-11 d-flex flex-wrap justify-content-center my-4">
                  <button
                    className="eu-send-cmt e-btn-m col-l2 my-3"
                    type="button"
                    onClick={() => {
                      addEventShareSever()
                    }}
                  >
                    上傳作品
                  </button>
                </div>
              </form>

              {/* 其他活動區塊 */}
              <div className="eu-more-event col-4">
                <h2 className="my-3 col-12 mb-3">
                  其他活動!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>
                <Link
                  to="/event/event-list/detail"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="eu-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      我是活動標題
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：台北市</p>
                        <p>時間：JUN</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/event/event-list/detail"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="eu-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      我是活動標題
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：台北市</p>
                        <p>時間：JUN</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/event/event-list/detail"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="eu-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      我是活動標題
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：台北市</p>
                        <p>時間：JUN</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={handleClose}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal> */}
          </Row>
        </Container>
      </div>
    </>
  )
}

// class UploadPreview extends React.Component {
//   constructor(props) {
//     super(props)
//     this.inputRef = React.createRef()
//     this.state = { file: null }
//     this.onChange = this.onChange.bind(this)
//     this.resetFile = this.resetFile.bind(this)
//   }
//   onChange(event) {
//     this.setState({
//       file: URL.createObjectURL(event.target.files[0]),
//     })
//   }
//   // const triggerFileSelectPopup = () => inputRef.current.click()
//   triggerFileSelectPopup(){
//     this.inputRef.current.click()
//   }

//   resetFile(event) {
//     event.preventDefault()
//     this.setState({ file: null })
//   }
//   render() {
//     return (
//       <div
//         className="position-relative"
//         style={{
//           backgroundImage: 'url(' + this.state.file + ')',
//           backgroundSize: 'cover',
//         }}
//       >
//         <input
//           type="file"
//           onChange={this.onChange}
//           ref={this.inputRef}
//         />
//         {this.state.file && (
//           <div>
//             <img
//               className="up-spin position-absolute"
//               src={EuGreySpin}
//               alt=""
//             />
//             <button
//               className="e-btn-m cn-font position-absolute"
//               type="button"
//               onClick={this.triggerFileSelectPopup}
//             >
//               上傳圖片
//             </button>
//             <img src={Square} alt="" />
//             {/* <button onClick={this.resetFile}>
//               Remove File
//             </button> */}
//           </div>
//         )}
//       </div>
//     )
//   }
// }

export default withRouter(WorkshopUpload)
