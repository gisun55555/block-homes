import { useState } from 'react'
import * as d from '@components/EstateRegistrationPage/style/DetailRegistrationStyle'

const DetailRegistration = ({
                              detailRegistrationProps,
                              setDetailRegistrationProps,
                            }) => {
  const types = ['월세', '전세', '매매']
  const costTypes = ['전기', '가스', '수도', '인터넷', 'TV']
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(null)
  const [selectedTypes, setSelectedTypes] = useState(
    Array(costTypes.length).fill(false),
  )
  const [isNoAdminCost, setIsNoAdminCost] = useState()
  const [isNoContractMonths, setIsNoContractMonths] = useState()

  const handleTransactionTypeButtonClick = (index: number) => {
    setDetailRegistrationProps(currentParams => ({
      ...currentParams,
      transactionType: index + 1,
    }))
    setSelectedTypeIndex(index)
  }

  const handleAdministrationFeeCategoryListButtonClick = (index: number) => {
    if (!isNoAdminCost) {
      // 관리비 없음이 선택되지 않았을 경우에만 작동
      const newSelectedTypes = [...selectedTypes]
      newSelectedTypes[index] = !newSelectedTypes[index] // 클릭한 버튼의 선택 상태 토글
      setSelectedTypes(newSelectedTypes) // 새 선택 상태 배열로 업데이트
      // 선택된 인덱스만 추출하여 인덱스 + 1 처리
      const selectedIndices = newSelectedTypes
        .map((selected, idx) => (selected ? idx + 1 : null))
        .filter(value => value !== null)

      setDetailRegistrationProps(currentParams => ({
        ...currentParams,
        administrationFeeCategoryList: selectedIndices,
      }))
    }
  }

  // 계약 기간 체크박스 변경 핸들러
  const handleContractMonthsChange = e => {
    const isChecked = e.target.checked // 체크 상태를 변수에 저장
    if (isChecked) {
      // 체크박스가 선택된 경우만 상태 업데이트
      setDetailRegistrationProps(currentParams => ({
        ...currentParams,
        contractMonths: 0,
      }))
    }
    setIsNoContractMonths(isChecked)
  }
  // 관리비 없음 체크박스 변경 핸들러
  const handleAdminCostChange = e => {
    const isChecked = e.target.checked // 체크 상태를 변수에 저장
    if (isChecked) {
      // 체크박스가 선택된 경우만 상태 업데이트
      setDetailRegistrationProps(currentParams => ({
        ...currentParams,
        administrationCost: 0, // 관리비를 0으로 설정
        administrationFeeCategoryList: [], // 추가 옵션 목록을 빈 배열로 설정
      }))
    }
    setIsNoAdminCost(isChecked)
    setSelectedTypes(
      isChecked ? Array(costTypes.length).fill(false) : selectedTypes,
    )
  }
  return (
    <d.DetailRegistrationContainer>
      <d.DetailRegistrationSession>
        <div className="title">거래 유형 / 가격</div>
        <d.DetailRegistrationType>
          {types.map((type, index) => (
            <d.DetailRegistrationTypeButton
              key={index}
              $typeNum={3}
              $isSelected={index === selectedTypeIndex}
              onClick={() => handleTransactionTypeButtonClick(index)}
            >
              {type}
            </d.DetailRegistrationTypeButton>
          ))}
        </d.DetailRegistrationType>
        <d.DetailRegistrationWrapperInput>
          <d.DetailRegistrationInputNumber>
            <div className="title">보증금</div>
            <div className="input-wrapper">
              <input
                className="input-number"
                type="number"
                min="1"
                max="99"
                value={detailRegistrationProps.price}
                onChange={e =>
                  setDetailRegistrationProps(currentParams => ({
                    ...currentParams,
                    price: e.target.value,
                  }))
                }
              />
              <div className="label">만원</div>
            </div>
          </d.DetailRegistrationInputNumber>
          <d.DetailRegistrationInputNumber>
            <div className="title">월세</div>
            <div className="input-wrapper">
              <input
                className="input-number"
                type="number"
                min="1"
                max="99"
                value={detailRegistrationProps.monthlyPrice}
                onChange={e =>
                  setDetailRegistrationProps(currentParams => ({
                    ...currentParams,
                    monthlyPrice: e.target.value,
                  }))
                }
              />
              <div className="label">만원</div>
            </div>
          </d.DetailRegistrationInputNumber>
        </d.DetailRegistrationWrapperInput>
        <d.DetailRegistrationWrapperInput>
          {!isNoContractMonths && (
            <d.DetailRegistrationInputNumber>
              <div className="title">계약 기간</div>
              <div className="input-wrapper">
                <input
                  className="input-number"
                  type="number"
                  min="1"
                  max="99"
                  value={detailRegistrationProps.contractMonths}
                  onChange={e =>
                    setDetailRegistrationProps(currentParams => ({
                      ...currentParams,
                      contractMonths: e.target.value,
                    }))
                  }
                  disabled={isNoContractMonths}
                />
                <div className="label">개월</div>
              </div>
            </d.DetailRegistrationInputNumber>
          )}
          <d.DetailRegistrationCheckBox>
            <input
              className="check-box"
              type="checkbox"
              checked={isNoContractMonths}
              onChange={handleContractMonthsChange}
            />
            협의 후 결정
          </d.DetailRegistrationCheckBox>
        </d.DetailRegistrationWrapperInput>
      </d.DetailRegistrationSession>
      <d.DetailRegistrationSession>
        <div className="title">관리비</div>
        {!isNoAdminCost && (
          <d.DetailRegistrationType>
            {costTypes.map((costType, index) => (
              <d.DetailRegistrationTypeButton
                key={index}
                $typeNum={5}
                $isSelected={selectedTypes[index]}
                onClick={() =>
                  handleAdministrationFeeCategoryListButtonClick(index)
                }
              >
                {costType}
              </d.DetailRegistrationTypeButton>
            ))}
          </d.DetailRegistrationType>
        )}
        <d.DetailRegistrationWrapperInput>
          {!isNoAdminCost && (
            <d.DetailRegistrationInputNumber>
              <div className="title">관리비</div>
              <div className="input-wrapper">
                <input
                  className="input-number"
                  type="number"
                  min="1"
                  max="99"
                  value={detailRegistrationProps.administrationCost}
                  onChange={e =>
                    setDetailRegistrationProps(currentParams => ({
                      ...currentParams,
                      administrationCost: e.target.value,
                    }))
                  }
                  disabled={isNoAdminCost}
                />
                <div className="label">만원</div>
              </div>
            </d.DetailRegistrationInputNumber>
          )}
          <d.DetailRegistrationCheckBox>
            <input
              className="check-box"
              type="checkbox"
              checked={isNoAdminCost}
              onChange={handleAdminCostChange}
            />
            관리비 없음
          </d.DetailRegistrationCheckBox>
        </d.DetailRegistrationWrapperInput>
      </d.DetailRegistrationSession>
      <d.DetailRegistrationSession>
        <div className="title">입주가능일</div>
        <d.DetailRegistrationBigInput
          type="date"
          value={detailRegistrationProps.moveInDate}
          onChange={e =>
            setDetailRegistrationProps(currentParams => ({
              ...currentParams,
              moveInDate: e.target.value,
            }))
          }
        />
      </d.DetailRegistrationSession>
    </d.DetailRegistrationContainer>
  )
}

export default DetailRegistration
