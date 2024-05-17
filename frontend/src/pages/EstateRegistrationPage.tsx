import * as r from '@pages/style/EstateRegistrationPageStyle'
import Header from '@common/Header'
import AccordionGroup from '@components/EstateRegistrationPage/AccordionGroup'
import { useState } from 'react'
import EstateRegistrationComplete from '@components/EstateRegistrationPage/EstateRegistrationComplete'
import { usePostItemRegister } from '@apis/itemApi'
import { useAtomValue } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'

const EstateRegistrationPage = () => {
  const buttonNames = ['다음', '매물 등록하기']
  const userInfo = useAtomValue(userAtom)
  const postParams = {
    ownerWalletDID: `did:klay:${userInfo.walletAddress}`,
    realEstateDID: 'did:klay:0x5ad96781f90dfssd48683e5616a51e665e3f68',
    latitude: 35.191939946619,
    longitude: 126.82628755627,
    reportRank: 3,
  }
  const [openIndex, setOpenIndex] = useState(0)
  const [isOpenArray, setIsOpenArray] = useState([true, false, false, false]) // 각 아코디언의 열림 상태 초기화
  const [isComplete, setIsComplete] = useState(false)
  const [checkEstateProps, setCheckEstateProps] = useState({
    roadNameAddress: '광주광역시 광산구 수완로73번길 40',
    realEstateType: 1,
    area: 60,
  })
  const [detailRegistrationProps, setDetailRegistrationProps] = useState({
    transactionType: undefined,
    price: undefined,
    monthlyPrice: undefined,
    administrationCost: undefined,
    contractMonths: undefined,
    administrationFeeCategoryList: undefined,
    moveInDate: undefined,
  })
  const [detailEstateProps, setDetailEstateProps] = useState({
    additionalOptionCategoryList: undefined,
    roomNumber: undefined,
    toiletNumber: undefined,
    description: undefined,
    buildingFloor: undefined,
    itemFloor: undefined,
    parkingRate: undefined,
    haveElevator: true,
  })
  const [photoRegistrationProps, setPhotoRegistrationProps] = useState({
    mainImage: undefined,
    roomImages: [],
    kitchenToiletImages: [],
  })

  const { mutate: postItemRegisterMutate } = usePostItemRegister()

  const handleOpenIndex = () => {
    const newOpenIndex = openIndex + 1
    setOpenIndex(openIndex + 1)

    // 새로운 상태 배열을 생성하여 현재 인덱스만 true로 설정하고, 나머지는 false로 설정
    const newIsOpenArray = Array(isOpenArray.length).fill(false)
    newIsOpenArray[newOpenIndex] = true

    setIsOpenArray(newIsOpenArray)
  }
  const handleFormSubmit = () => {
    const formData = new FormData()
    const reqData = {
      ...postParams,
      ...checkEstateProps,
      ...detailRegistrationProps,
      ...detailEstateProps,
    }
    const blob = new Blob([JSON.stringify(reqData)], {
      type: 'application/json',
    })
    formData.append('req', blob)

    if (photoRegistrationProps.mainImage) {
      formData.append('mainImage', photoRegistrationProps.mainImage)
    }
    if (Array.isArray(photoRegistrationProps.roomImages)) {
      photoRegistrationProps.roomImages.forEach(file => {
        formData.append(`roomImages`, file)
      })
    }
    if (Array.isArray(photoRegistrationProps.kitchenToiletImages)) {
      photoRegistrationProps.kitchenToiletImages.forEach(file => {
        formData.append(`kitchenToiletImages`, file)
      })
    }

    postItemRegisterMutate(formData, {
      onSuccess: () => setIsComplete(true),
      onError: error => {
        console.error('매물 등록 실패:', error)
        alert('매물 등록에 실패했습니다. 다시 시도해주세요.')
      },
    })
  }

  const isDataFilled = data => {
    return Object.values(data).every(value => {
      return value !== null && value !== '' && value !== undefined
    })
  }

  const handleNextButtonClick = () => {
    switch (openIndex) {
      case 0:
        handleOpenIndex()
        break
      case 1:
        console.log()
        if (isDataFilled(detailRegistrationProps)) handleOpenIndex()
        break
      case 2:
        if (isDataFilled(detailEstateProps)) handleOpenIndex()
        break
      case 3:
        if (
          isDataFilled(detailRegistrationProps) &&
          isDataFilled(photoRegistrationProps) &&
          isDataFilled(detailEstateProps)
        )
          handleFormSubmit()
        break
    }
  }

  return (
    <r.EstateRegistrationPageContainer>
      <Header title={'매물 등록'} isSearch={false} rightIconSrc={null} />
      {!isComplete ? (
        <>
          <r.AccodionWrapper>
            <AccordionGroup
              maxOpenIndex={openIndex}
              isOpenArray={isOpenArray}
              setIsOpenArray={setIsOpenArray}
              checkEstateProps={checkEstateProps}
              detailRegistrationProps={detailRegistrationProps}
              setDetailRegistrationProps={setDetailRegistrationProps}
              detailEstateProps={detailEstateProps}
              setDetailEstateProps={setDetailEstateProps}
              photoRegistrationProps={photoRegistrationProps}
              setPhotoRegistrationProps={setPhotoRegistrationProps}
            />
          </r.AccodionWrapper>
          <r.NextButton
            onClick={handleNextButtonClick}
            disabled={
              (openIndex === 1 && !isDataFilled(detailRegistrationProps)) ||
              (openIndex === 2 && !isDataFilled(detailEstateProps)) ||
              (openIndex === 3 && !isDataFilled(photoRegistrationProps))
            }
          >
            {openIndex === 3 ? buttonNames[1] : buttonNames[0]}
          </r.NextButton>
        </>
      ) : (
        <EstateRegistrationComplete />
      )}
    </r.EstateRegistrationPageContainer>
  )
}

export default EstateRegistrationPage
