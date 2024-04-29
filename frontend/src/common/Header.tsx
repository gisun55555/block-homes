import React from 'react'
import * as h from '@common/style/HeaderStyle'
import { HeaderPropsType } from '@/types/header'
import SearchBar from '@common/SearchBar'

//props로 title, isSearch(bool type) rightIconSrc를 넙깁니다.
// example
// <Header
//     title="목록"
//     isSearch={false}
//     rightIconSrc="public/icon/icon_map.png"
// />

const Header: React.FC<HeaderPropsType> = HeaderProps => {
  return (
    <h.HeaderContainer>
      <h.HeaderLeftContainer>
        <img
          className="back-arrow"
          alt="뒤로가기"
          src="public/icon/icon_back_arrow.png"
        />

        {HeaderProps.isSearch ? (
          <SearchBar />
        ) : (
          <div className="title">{HeaderProps.title}</div>
        )}
      </h.HeaderLeftContainer>

      {HeaderProps.rightIconSrc && (
        <img
          className="right-icon"
          alt="오른쪽 아이콘"
          src={`${HeaderProps.rightIconSrc}`}
        />
      )}
    </h.HeaderContainer>
  )
}

export default Header