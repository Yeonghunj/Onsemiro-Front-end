import date from "../assets/interest/date.png";
import stock from "../assets/interest/stock.png";
import design from "../assets/interest/design.png";
import marketing from "../assets/interest/marketing.png";
import fragrance from "../assets/interest/fragrance.png";
import shopping from "../assets/interest/shopping.png";
import fashion from "../assets/interest/fashion.png";
import sport from "../assets/interest/sport.png";
import fishing from "../assets/interest/fishing.png";
import camping from "../assets/interest/camping.png";
import mountain from "../assets/interest/mountain.png";
import drink from "../assets/interest/drink.png";
import cooking from "../assets/interest/cooking.png";
import restaurant from "../assets/interest/restaurant.png";
import cafe from "../assets/interest/cafe.png";
import game from "../assets/interest/game.png";
import book from "../assets/interest/book.png";
import performance from "../assets/interest/performance.png";
import movie from "../assets/interest/movie.png";
import netflix from "../assets/interest/netflix.png";
import pet from "../assets/interest/pet.png";
import music from "../assets/interest/music.png";
import sing from "../assets/interest/sing.png";
import tv from "../assets/interest/TV.png";
import scooter from "../assets/interest/scooter.png";
import walking from "../assets/interest/walking.png";
import draw from "../assets/interest/draw.png";
import bass from "../assets/interest/bass.png";
import volunteer from "../assets/interest/volunteer.png";
import trip from "../assets/interest/trip.png";
import interior from "../assets/interest/interior.png";
import health from "../assets/interest/health.png";
import exhibition from "../assets/interest/exhibition.png";
import computer from "../assets/interest/computer.png";
import money from "../assets/interest/money.png";
import dance from "../assets/interest/dance.png";
import drive from "../assets/interest/drive.png";
import photo from "../assets/interest/photo.png";
import tatoo from "../assets/interest/tatoo.png";
import pilates from "../assets/interest/tatoo.png";
import foreign from "../assets/interest/foreign.png";

import age from "../assets/conditions/age.png";
import appearance from "../assets/conditions/appearance.png";
import character from "../assets/conditions/character.png";
import eyelid from "../assets/conditions/eyelid.png";
import frequency from "../assets/conditions/frequency.png";
import height from "../assets/conditions/height.png";
import location from "../assets/conditions/location.png";
import mbti from "../assets/conditions/mbti.png";
import sexual from "../assets/conditions/sexual.png";
import shape from "../assets/conditions/shape.png";

export const interestValueSet = [
  {
    icon: date,
    value: "데이트",
  },
  {
    icon: stock,
    value: "주식",
  },
  {
    icon: design,
    value: "디자인",
  },
  {
    icon: marketing,
    value: "마케팅",
  },
  {
    icon: fragrance,
    value: "향수",
  },
  {
    icon: shopping,
    value: "쇼핑",
  },
  { icon: fashion, value: "패션" },
  { icon: sport, value: "스포츠 관람" },
  { icon: fishing, value: "낚시" },
  { icon: camping, value: "캠핑" },
  { icon: mountain, value: "등산" },
  { icon: drink, value: "음주" },
  { icon: cooking, value: "요리" },
  { icon: restaurant, value: "맛집탐방" },
  { icon: cafe, value: "카페 가기" },
  { icon: game, value: "게임" },
  { icon: book, value: "독서" },
  { icon: performance, value: "공연 관람" },
  { icon: movie, value: "영화 감상" },
  { icon: netflix, value: "넷플릭스" },
  { icon: pet, value: "반려동물" },
  { icon: music, value: "음악 감상" },
  { icon: sing, value: "노래 부르기" },
  { icon: tv, value: "티비 시청" },
  { icon: scooter, value: "스쿠터" },
  { icon: walking, value: "산책" },
  { icon: draw, value: "그림 그리기" },
  { icon: bass, value: "악기 연주" },
  { icon: volunteer, value: "봉사활동" },
  { icon: trip, value: "여행" },
  { icon: interior, value: "인테리어" },
  { icon: health, value: "헬스" },
  { icon: exhibition, value: "전시회 관람" },
  { icon: computer, value: "컴퓨터" },
  { icon: money, value: "재테크" },
  { icon: dance, value: "댄스" },
  { icon: drive, value: "드라이브" },
  { icon: photo, value: "사진촬영" },
  { icon: tatoo, value: "문신" },
  { icon: pilates, value: "필라테스" },
  { icon: foreign, value: "외국어" },
];

export const GenderIdentity = [
  {
    main: "남성",
    sub: "Male",
  },
  {
    main: "여성",
    sub: "Female",
  },
  {
    main: "MTF",
    sub: "Transgender",
  },
  {
    main: "TMF",
    sub: "Transgender",
  },
  { main: "에이젠더", sub: "Agender" },
  { main: "논바이너리", sub: "Non-binary" },
];

export const Conditions = [
  {
    condition: "age",
    icon: age,
    label: "나이",
  },
  {
    condition: "sexual",
    icon: sexual,
    label: "성적 성향",
  },
  {
    condition: "height",
    icon: height,
    label: "키",
  },
  {
    condition: "shape",
    icon: shape,
    label: "체형",
  },
  {
    condition: "appearance",
    icon: appearance,
    label: "생김새",
  },
  {
    condition: "eyelid",
    icon: eyelid,
    label: "쌍커풀 유무",
  },
  {
    condition: "mbti",
    icon: mbti,
    label: "MBTI",
  },
  {
    condition: "character",
    icon: character,
    label: "성격",
  },
  {
    condition: "frequency",
    label: "원하는 만남 주기",
    icon: frequency,
  },
  {
    condition: "location",
    label: "거주 지역",
    icon: location,
  },
];

export const sexualTendency = [
  { main: "비성향자" },
  { main: "DOM" },
  { main: "SUB" },
  { main: "SW" },
  { main: "SADI" },
  { main: "MASO" },
];

export const ShapeCollection = [
  { main: "마른" },
  { main: "보통" },
  { main: "통통" },
  { main: "근육" },
];

export const AppearanceCollection = [
  {
    main: "뚜렷",
  },
  {
    main: "두부",
  },
];

export const EyelidCollection = [
  {
    main: "유쌍",
  },
  {
    main: "무쌍",
  },
];

export const characterKeyMap = {
  0: "조용한",
  1: "조금 조용한",
  2: "보통",
  3: "조금 활발한",
  4: "활발한",
};

export const CITYSET = [
  {
    city: "서울특별시",
    sub: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
  },
  {
    city: "인천광역시",
    sub: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
  },
  {
    city: "수원시",
    sub: ["장안구", "권선구", "팔달구", "영통구"],
  },
  {
    city: "성남시",
    sub: ["수정구", "중원구", "분당구"],
  },
  {
    city: "의정부시",
    sub: [],
  },
  {
    city: "안양시",
    sub: ["만안구", "동안구"],
  },
  {
    city: "부천시",
    sub: ["원미구", "소사구", "오정구"],
  },
  {
    city: "광명시",
    sub: [],
  },
  {
    city: "동두천시",
    sub: [],
  },
  {
    city: "평택시",
    sub: [],
  },
  {
    city: "안산시",
    sub: ["상록구", "단원구"],
  },
  {
    city: "고양시",
    sub: ["덕양구", "일산동구", "일산서구"],
  },
  {
    city: "과천시",
    sub: [],
  },
  {
    city: "구리시",
    sub: [],
  },
  {
    city: "남양주시",
    sub: [],
  },
  {
    city: "오산시",
    sub: [],
  },
  {
    city: "시흥시",
    sub: [],
  },
  {
    city: "군포시",
    sub: [],
  },
  {
    city: "의왕시",
    sub: [],
  },
  {
    city: "하남시",
    sub: [],
  },
  {
    city: "용인시",
    sub: ["처인구", "기흥구", "수지구"],
  },
  {
    city: "파주시",
    sub: [],
  },
  {
    city: "이천시",
    sub: [],
  },
  {
    city: "안성시",
    sub: [],
  },
  {
    city: "김포시",
    sub: [],
  },
  {
    city: "화성시",
    sub: [],
  },
  {
    city: "광주시",
    sub: [],
  },
  {
    city: "양주시",
    sub: [],
  },
  {
    city: "포천시",
    sub: [],
  },
  {
    city: "여주시",
    sub: [],
  },
  {
    city: "연천군",
    sub: [],
  },
  {
    city: "가평군",
    sub: [],
  },
  {
    city: "양평군",
    sub: [],
  },
];

export const sexualOrientation = [
  {
    main: "이성애자",
    sub: "Heterosexual",
  },
  {
    main: "대체로 이성애자",
    sub: "Heteroflexible",
  },
  {
    main: "양성애자",
    sub: "Bisexual",
  },
  {
    main: "대체로 동성애자",
    sub: "Homoflexible",
  },
  { main: "동성애자", sub: "Homosexual" },
  { main: "범성애자", sub: "Pansexual" },
  { main: "무성애자", sub: "Asexual" },
  { main: "남성애자", sub: "Androsexual" },
  { main: "여성애자", sub: "Gynesexual" },
  { main: "기타", sub: "Other" },
];

export const heightRange = (thumb) => {
  const point = thumb - 145;
  return parseInt(point / 5) + 1;
};

export const filterValidProfileKey = (info) =>
  Object.keys(info).filter(
    (key) =>
      key !== "introduction" &&
      key !== "approval" &&
      key !== "univ" &&
      key !== "gender" &&
      key !== "age" &&
      key !== "photo" &&
      key !== "id" &&
      key !== "nickname" &&
      key !== "message" &&
      key !== "matching_type" &&
      key !== "matching_id" &&
      key !== "time"
  );

export const keyMapWithKorean = {
  location: "거주 지역",
  height: "키",
  weight: "체형",
  appearance: "생김새",
  eyelid: "쌍꺼풀 유무",
  mbti: "MBTI",
  character: "성격",
  hobby: "관심사",
  meeting_frequency: "만남 주기",
  bdsm: "성적 성향",
  gender_preference: "성적 지향",
};

export const PLAY_DATA = [
  {
    id: 0,
    question: "ㄷ람ㄹㄴㅁㄹㅁㄴㅇㅁㄴㅇ",
    answers: ["ㅁㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅇㅁ"],
  },
  {
    id: 1,
    question: "ㅁㅇㅁㅇㅁㅇㅁㅇㄴㅇㄴㅁ",
    answers: ["ㅁㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅁㅇ", "ㅁㅇㅁㅇㅇㅁ"],
  },
];

export const REVIEWS = [
  {
    point: 4,
    info: {
      univ: "서울대",
      age: 24,
      content:
        "일단 다른 앱들과 다르게 대학생들끼리 교류하는게 특이하고 좋았고 매칭률고 좋고 이상한 사람 많이 없는거 같아서 짱 좋아요",
      date: "2024.07.20",
      gender: "남성",
    },
  },
  {
    point: 4,
    info: {
      univ: "숭실대",
      age: 22,
      content:
        "하루에 세 번만 선택이 가능하다는 점에서 다른 만남 어플과 차별화되는 것 같아요! 진지하고 재밌는 대화를 나눌 수 있는 사람을 만날 수 있었습니다",
      date: "2024.07.20",
      gender: "여성",
    },
  },
  {
    point: 3,
    info: {
      univ: "중앙대",
      age: 23,
      content:
        "온새미로 너무 좋아요!! 요즘 같은 시대에 만남 갖기 좋은 것 같아요",
      date: "2024.07.20",
      gender: "여성",
    },
  },
];

export const IDEAL_REQ_TYPE = ["required", "optional_1", "optional_2"];
