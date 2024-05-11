import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import * as e from '@common/style/EstateDidCardStyle'
import { CustomButtonStyle } from './style/CustomButtonStyle'
import { useNavigate } from 'react-router-dom'

const EstateDidCard = ({ index, currentCenterIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false) 
  const navigate = useNavigate()

  const toggleCard = () => {
    if (index === currentCenterIndex) {
      setIsFlipped(!isFlipped) 
    }
  }
  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    navigate('estate-registration')
  }

  const springStyleFront = useSpring({ 
    opacity: isFlipped ? 0 : 1,
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)', 
    boxShadow: '0 2px 10px rgb(0 0 0 / 8%)' ,
    borderRadius: '1.5rem',
  })

  const springStyleBack = useSpring({ 
    opacity: isFlipped ? 1 : 0, 
    transform: isFlipped ? 'scale(1.15) rotateY(0deg)' : 'scale(1) rotateY(-180deg)',
    boxShadow:  '0 20px 25px rgb(0 0 0 / 25%)',
    borderRadius: '1.5rem',
  })

  // 기존 코드
  // const springStyle = useSpring({
  //   opacity: 1,
  //   transform: show ? 'scale(1.15) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
  //   boxShadow: show
  //     ? '0 20px 25px rgb(0 0 0 / 25%)'
  //     : '0 2px 10px rgb(0 0 0 / 8%)',
  //   borderRadius: '1.5rem',
  //   config: { tension: 250, friction: 12 },
  // })

  return (
    <>
    <animated.div style={springStyleFront} onClick={toggleCard}>
      <e.EstateDidCardContainer>
        <e.TopContainer>
          <img
            alt="국가교통부"
            className="ministry-of-land-logo"
            src="/image/image_ministry_of_land_logo.png"
          />
          <img
            alt="건물 3d asset"
            className="building-type-image"
            src="/image/image_did_card_villa_or_towroom.png"
          />
          <e.BackgroundWaveContainer>
            <svg
              className="big-wave"
              xmlns="http://www.w3.org/2000/svg"
              width="209"
              height="53"
              viewBox="0 0 209 53"
              fill="none"
            >
              <path
                d="M60.8357 0.0390186C26.82 1.09297 6.10537 14.1795 0 20.591V53H209V11.896C203.113 15.7975 192.387 34.86 168.808 33.0256C145.228 31.1912 103.355 -1.27842 60.8357 0.0390186Z"
                fill="#C8F6F0"
              />
            </svg>
            <svg
              className="small-wave"
              xmlns="http://www.w3.org/2000/svg"
              width="209"
              height="37"
              viewBox="0 0 209 37"
              fill="none"
            >
              <path
                d="M76.825 0.0508788C42.8094 1.13488 6.10537 19.4141 0 26.0084V37H209V15.4565C203.113 19.4693 197.166 22.2879 176.214 23.6089C155.262 24.93 119.345 -1.30413 76.825 0.0508788Z"
                fill="#B9E7E7"
              />
            </svg>
          </e.BackgroundWaveContainer>
        </e.TopContainer>
        <e.BottomContainer>
          <e.InfoElement>
            <div className="element-title">등기권자</div>
            <div className="element-content">송강산</div>
          </e.InfoElement>
          <e.InfoElement>
            <div className="element-title">분류</div>
            <div className="element-content">아파트</div>
          </e.InfoElement>
          <e.InfoElement>
            <div className="element-title"> 주소</div>
            <div className="element-content">남동길 30번길 13 3층</div>
          </e.InfoElement>
          <e.InfoElement>
            <div className="element-title">등록일자</div>
            <div className="element-content">2020.03.21</div>
          </e.InfoElement>
        </e.BottomContainer>
      </e.EstateDidCardContainer>

    </animated.div>

    <animated.div style={{ ...springStyleBack, position: 'absolute' }} onClick={toggleCard}>
    <e.EstateDidCardContainer>
        <e.BackContainer>
          <e.BackInfoElement>
            <div className='element-title'>분류</div>
            <div className='element-content'>건물 or 집합건물</div>
          </e.BackInfoElement>
          <e.BackInfoElement>
            <div className='element-title'>주소</div>
            <div className='element-content'>광주광역시 장덕동 미래동 삼단지</div>
          </e.BackInfoElement>          
          <e.BackInfoElement>
            <div className='element-title'>등록일자</div>
            <div className='element-content'>2020년 4월 23일</div>
          </e.BackInfoElement>          
          <e.BackInfoElement>
            <div className='element-title'>소유자</div>
            <div className='element-content'>이싸피 </div>
          </e.BackInfoElement>
          {/* 등기부 건축물 대장 구현 시 주석 해제 */}

          {/* <e.BackInfoElement>
            <div className='element-title'>등기사항전부증명서</div>
            <CustomButtonStyle style={{width:'2.7rem',height:'0.9rem',backgroundColor:'#B9E7E7',fontSize:'0.4rem',color:'black',boxShadow: '0px 2.721px 2.721px 0px rgba(0, 0, 0, 0.25)'}}> 조회하기</CustomButtonStyle>
          </e.BackInfoElement>
          <e.BackInfoElement>
            <div className='element-title'>등록일자</div>
            <CustomButtonStyle style={{width:'2.7rem',height:'0.9rem',backgroundColor:'#B9E7E7',fontSize:'0.4rem',color:'black',boxShadow: '0px 2.721px 2.721px 0px rgba(0, 0, 0, 0.25)'}}> 조회하기</CustomButtonStyle>
          </e.BackInfoElement> */}
          <div className='registration-button-box'>
            <CustomButtonStyle onClick={handleButtonClick} style={{width:'8rem',height:'2rem',backgroundColor:'#FFF',fontSize:'0.6rem',color:'black',boxShadow: '0px 2.721px 2.721px 0px rgba(0, 0, 0, 0.25)'}}> 매물로 등록하기</CustomButtonStyle>
          </div>
      
          <e.BackgroundWaveContainer>
            <svg
              className="big-wave"
              xmlns="http://www.w3.org/2000/svg"
              width="209"
              height="53"
              viewBox="0 0 209 53"
              fill="none"
            >
              <path
                d="M60.8357 0.0390186C26.82 1.09297 6.10537 14.1795 0 20.591V53H209V11.896C203.113 15.7975 192.387 34.86 168.808 33.0256C145.228 31.1912 103.355 -1.27842 60.8357 0.0390186Z"
                fill="#C8F6F0"
              />
            </svg>
            <svg
              className="small-wave"
              xmlns="http://www.w3.org/2000/svg"
              width="209"
              height="37"
              viewBox="0 0 209 37"
              fill="none"
            >
              <path
                d="M76.825 0.0508788C42.8094 1.13488 6.10537 19.4141 0 26.0084V37H209V15.4565C203.113 19.4693 197.166 22.2879 176.214 23.6089C155.262 24.93 119.345 -1.30413 76.825 0.0508788Z"
                fill="#B9E7E7"
              />
            </svg>
          </e.BackgroundWaveContainer>
        </e.BackContainer>
      </e.EstateDidCardContainer>
    </animated.div>
    </>
  )
}

export default EstateDidCard
