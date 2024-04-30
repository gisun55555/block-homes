import styled from 'styled-components'

export const KlipSignInContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
`

export const KlipSignInWrapper = styled.div`
  width: 100%;
  height: 50%;
`

export const KlipSignInAccount = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .qr-code {
    width: 100%;
    height: fit-content;
  }

  .account-input {
    width: 60%;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #c3c3c3;
    padding: 10px;
    margin-top: 5%;
  }
`
export const KlipSignInButton = styled.div`
  position: absolute;
  bottom: 5%;
  background-color: #216fea;
  height: 56px;
  width: 60%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;

  .symbol {
    height: 56px;
    width: 56px;
    background-image: url('/icon/icon_klip.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`
