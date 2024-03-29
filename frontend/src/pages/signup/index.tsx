import { InputBox, Title, KakaoIcon, 
    NaverIcon, MainLayout, SignLayout, SignButton } from '../../components'
import { useCallback, useState } from 'react'
import { styled } from 'styled-components'
import { signup } from './api'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import useStore from 'src/store'
  
const InputWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width : 100%;
    gap: 10px;
  `
const IconWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin-top: -20px;    
  `
const MsgWrapper = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  align-self: flex-end;
  `
  
const SignUp = () => {

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ checkMsg , setCheckMsg ] = useState('')
    const navigator = useNavigate()

    const { setIsLogin, setAccessToken } = useStore()

    const signMutation = useMutation( signup, { 
      onSuccess: (res) => {

      if(res?.status !== 201 ) {
        alert("회원가입 실패 ")
        return 
      }

      setAccessToken( res?.headers?.authorization )

      localStorage.setItem( 'accessToken', res?.headers?.authorization )
      localStorage.setItem( 'refreshToken', res?.headers["authorization-refresh"])
      localStorage.setItem( 'userId',  res?.data?.id )

      setIsLogin( true )

      navigator('/profile')
    }}  )

    const data = {
      email : email,
      password : password,
    }

    const onSignUp = () => {
      checkMsg === '' ?
      signMutation.mutateAsync( data ) :
      alert( '비밀번호가 일치하지 않습니다' )
    }

    const isCheck = ( pwd : string ) => {
      const match = pwd === password;
      setCheckMsg(match ? '' : '비밀번호가 동일하지 않습니다.');
    }

    const updatePassword = (e) => {
      setPassword( e.target.value )
      isCheck( e.target.value )
    }
  
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`
    const handleKakao = ()=>{
        window.location.href = kakaoURL
    }

    return (
      <MainLayout>
        <SignLayout>
        <Title>회원가입</Title>
        <InputWrapper>
          <InputBox 
            title= '이메일' 
            placeholder= 'ex) hongildong@gamli.com' 
            value={ email }
            onChange={(e) => { setEmail( e.target.value )}}
          />
          <InputBox 
            title= '비밀번호' 
            placeholder= '비밀번호를 입력해주세요.'
            type= 'password'
            value={ password }
            onChange={(e) => { updatePassword(e) }}
          />
          <InputBox 
            title= '비밀번호 확인' 
            type= 'password'
            placeholder= '동일한 비밀번호를 입력해주세요.' 
            onChange={(e) => { isCheck( e.target.value )}}
          />
          <MsgWrapper>{ checkMsg }</MsgWrapper>
        </InputWrapper>
        <SignButton onClick={ onSignUp }>
          회원가입
        </SignButton>
        <Title type='small'>SNS 회원가입</Title>
        <IconWrapper><KakaoIcon onClick={ handleKakao }/></IconWrapper>
       </SignLayout>
      </MainLayout>
    )

  }
  
  export default SignUp
