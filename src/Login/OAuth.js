const REST_API_KEY = 'f60d0bc42fcf4cbf40c54a30f845c22d';
const REDIRECT_URL = 'http://localhost:3000/kakao_login';
const KakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code HTTP/1.1`;

export default KakaoAuthURL;
