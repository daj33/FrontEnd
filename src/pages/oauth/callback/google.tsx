import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const google = () => {
  // 0. 쿠키 설정
  const [cookies, setCookie] = useCookies(["name", "token"]);
  // (X) const [userName, setUserName] = useCookies(['name']);
  // (X) const [accessToken, setAccessToken,]  = useCookies(['token']);

  // 1. redirect_uri로 리디렉션된 URL에서 인증 코드 추출
  const router = useRouter();
  const { code } = router.query;

  // 2. 인증 코드를 백엔드로 전달하고 백엔드로부터 access_token과 userName 받아 쿠키에 저장하기
  const instance = axios.create({
    baseURL: "http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080",
  });

  const getResponse = async () => {
    if (!code) return;
    try {
      const response = await instance.get(`/oauth/callback?code=${code}&provider=google`);
      console.log(response.status);
      setCookie("name", response.data.name, { path: "/" });
      setCookie("token", response.data.access_token, { path: "/" });
      // { path: "/" } 모든 프로젝트 경로에서 사용 가능. (default: 현재 경로)
      await router.push("/");
    } catch (error) {
      console.error("OAuth 인증 실패:", error);
      router.push("/");
    }
  };

  useEffect(() => {
    if (!router.isReady || !code) return;
    getResponse();
  }, [router.isReady, code]);
};

export default google;
