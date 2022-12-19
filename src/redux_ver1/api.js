import axios from 'axios';

// 인스턴스(객체) 만들기
const api = axios.create({
  // 공통으로 들어가는 주소(앞부분)
  baseURL: 'https://api.themoviedb.org/3',
  // 데이터 타입 : headers: {'Content-type': 'Application/json'} 
  headers: {'Content-type': 'Application/json'} 
});

// 인터셉터 : then 또는 catch로 처리되기 전에 요청과 응답을 가로챌수 있습니다.
// 요청 인터셉터 추가하기
api.interceptors.request.use(
  function (config) {
  // 요청이 전달되기 전에 작업 수행
  console.log('request 시작', config);
  return config;
}, 
function (error) {
  // 요청 오류가 있는 작업 수행
  console.log('error 확인', error);
  return Promise.reject(error);
});

// 응답 인터셉터 추가하기
api.interceptors.response.use(
  function (response) {
  // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 데이터가 있는 작업 수행
  console.log('response 확인', response);
  return response;
}, 
function (error) {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  console.log('error 확인', error);
  return Promise.reject(error);
});



export default api;