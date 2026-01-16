import axios from 'axios'
import React, { useEffect } from 'react'

const KakaoRedirect = () => {
  const code = new URL(window.location.href).searchParams.get('code')

  console.log(code)

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_SPRING_IP}member/kakao/doLogin`,{ code:code })
        console.log(response)
      } catch (error) {
        console.error('카카오 로그인 실패', error)
      }
    }

    kakaoLogin()
  }, [])

  return (
    <>
      loading ...
    </>
  )
}

export default KakaoRedirect