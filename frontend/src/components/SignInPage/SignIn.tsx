import React, { useEffect, useState } from 'react'
import * as k from '@/components/SignInPage/style/SignInStyle'
import { SignInButton, SignInError, SignInWrapper } from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import SignUp from '@components/SignInPage/SignUp'
import { useGetWalletCheck } from '@apis/walletApi'
import { useSetAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setIsLoading }: { setIsLoading: (isLoading) => void }) => {
  const navigate = useNavigate()
  const setUserAtom = useSetAtom(userAtom)
  const [isSignIn, setIsSignIn] = useState(true)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true)
  const { mutate: getWalletCheckMutate } = useGetWalletCheck({
    name,
    setUserAtom,
    setIsSignIn,
    navigate,
  })
  const handlePhoneNumberChange = (event: { target: { value: string } }) => {
    const input = event.target.value
    // 숫자만 입력받기 위해 입력 값을 숫자로 필터링합니다.
    const filteredInput = input.replace(/[^0-9]/g, '')
    setPhoneNumber(filteredInput)
  }
  const handleSignInButtonClick = () => {
    getWalletCheckMutate({
      name: name,
      phoneNumber: phoneNumber,
    })
  }

  useEffect(() => {
    // 전화번호가 11자리인지 검증
    setIsPhoneNumberValid(phoneNumber.length === 11)
  }, [phoneNumber])

  return (
    <k.SignInContainer>
      <Header
        title={isSignIn ? '간편 본인 인증' : '지갑 연결'}
        isSearch={false}
        rightIconSrc={null}
      />
      {isSignIn ? (
        <>
          <SignInWrapper>
            <div className="title">이름</div>
            <input
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="홍길동"
            />
          </SignInWrapper>
          <SignInWrapper>
            <div className="title">전화번호</div>
            <input
              className="input"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="01012341234"
            />
          </SignInWrapper>
          {!isPhoneNumberValid && phoneNumber && (
            <SignInError>유효하지 않은 전화번호 입니다.</SignInError>
          )}
          <SignInButton
            onClick={handleSignInButtonClick}
            disabled={!name || !phoneNumber || !isPhoneNumberValid}
          >
            본인 인증
          </SignInButton>
        </>
      ) : (
        <SignUp name={name} phoneNumber={phoneNumber} setIsLoading={setIsLoading} />
      )}
    </k.SignInContainer>
  )
}

export default SignIn
