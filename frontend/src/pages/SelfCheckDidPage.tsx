import * as s from '@pages/style/SelfCheckDidPageStyle'
import Header from '@common/Header'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import AddressInput from '@components/SelfCheckDidPage/AddressInput'
import SimpleInput from '@components/SelfCheckDidPage/SimpleInput'
import RealEstateTypeInput from '@components/SelfCheckDidPage/RealEstateTypeInput'

const SelfCheckDidPage = () => {
  return (
    <s.SelfUploadDidPageContainer>
      <Header title="부동산 DID 등록 요청" isSearch={false} rightIconSrc="" />
      <div className="custom-button-container">
        <CustomButtonStyle> 등록 요청하기 </CustomButtonStyle>
      </div>
      <div className="info-text">
        등록하고자 하는 목적물의 정보를 기입해주세요.
      </div>
      <AddressInput />
      <SimpleInput />
      <RealEstateTypeInput />
      <SimpleInput />
    </s.SelfUploadDidPageContainer>
  )
}

export default SelfCheckDidPage
