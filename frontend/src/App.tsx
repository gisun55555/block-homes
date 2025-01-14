import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from '@pages/MainPage'
import { GlobalStyle } from '@style/GlobalStyles'
import RealEstatePage from '@pages/RealEstatePage'
import SmartContractPage from './pages/SmartContractPage'
import IntroPage from '@pages/IntroPage'
import SignInPage from '@pages/SignInPage'
import CheckDidPage from '@pages/CheckDidPage'
import SelfCheckDidPage from '@pages/SelfCheckDidPage'
import RealEstateDetailPage from '@pages/RealEstateDetailPage'
import ReportPage from './pages/ReportPage'
import EstateRegistrationPage from '@pages/EstateRegistrationPage'
import MyPage from './pages/MyPage'
import CallBackPage from '@pages/CallBackPage'
import ChatListPage from '@pages/ChatListPage'
import InfoProcessPage from '@pages/InfoProcessPage'
import InfoSafePage from '@pages/InfoSafePage'
import TransactionProgressPage from '@pages/TransactionProgressPage'
import RealEstateCheckListPage from '@pages/RealEstateCheckListPage'
import FavoriteItemsPage from '@pages/FavoriteItemsPage'
import ChattingRoomPage from '@pages/ChattingRoomPage'
import MyEstatePage from './pages/MyEstatePage'
import InfoReportPage from '@pages/InfoReportPage'
import TestPage from '@pages/TestPage'
import SmartContractTenantPage from './pages/SmartContractPageTenant'
import MyContractPage from './pages/MyContractPage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/intro" element={<IntroPage />} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/" element={<MainPage />} />
    <Route path="/check-did" element={<CheckDidPage />} />
    <Route path="/self-check-did" element={<SelfCheckDidPage />} />
    <Route path="/estate/:category" element={<RealEstatePage />} />
    <Route path="/estate-detail/:id" element={<RealEstateDetailPage />} />
    <Route path="/smart-contract/:chatRoomNo" element={<SmartContractPage />} />
    <Route
      path="/smart-contract-tenant/:chatRoomNo"
      element={<SmartContractTenantPage />}
    />
    <Route path="/report/:estateNo" element={<ReportPage />} />
    <Route path="/estate-registration" element={<EstateRegistrationPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/callback/:result" element={<CallBackPage />} />
    <Route path="/chatroom-list" element={<ChatListPage />} />
    <Route path="/chatroom/:chatRoomNo" element={<ChattingRoomPage />} />
    <Route path="/info-transaction-process" element={<InfoProcessPage />} />
    <Route path="/info-how-safe" element={<InfoSafePage />} />
    <Route path="/info-report" element={<InfoReportPage />} />
    <Route
      path="/transaction-progress/:chatRoomNo"
      element={<TransactionProgressPage />}
    />
    <Route
      path="/estate-checklist/:chatRoomNo"
      element={<RealEstateCheckListPage />}
    />
    <Route path="/likes" element={<FavoriteItemsPage />} />
    <Route path="/myestate" element={<MyEstatePage />} />
    <Route path="/mycontract" element={<MyContractPage />} />
    <Route path="/test/:testName" element={<TestPage />} />
  </Routes>
)

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/*<ScrollToTop />*/}
        <HomeRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </>
  )
}

export default App
