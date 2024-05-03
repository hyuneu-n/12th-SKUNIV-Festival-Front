/**
 * left
 * 1번: top 25px, left 122px
 * 2번: top 35px, left 122px
 * 3번: top 45px, left 122px
 * 4번: top 55px, left 122px
 * 5번: top 70px, left 122px
 * 6번: top 80px, left 122px
 * 7번: top 95px, left 122px
 * 8번: top 105px, left 122px
 * 9번: top 115px, left 122px
 * 10번: top 130px, left 122px
 * 11번: top 140px, left 122px
 * 12번: top 150px, left 122px
 */

/**
 * right
 * 1번: top 25px, left 240px
 * 2번: top 35px, left 236px
 * 3번: top 45px, left 233px
 * 4번: top 55px, left 232px
 * 5번: top 65px, left 229px
 * 6번: top 75px, left 226px
 * 7번: top 85px, left 223px
 * 8번: top 98px, left 220px
 * 9번: top 108px, left 218px
 * 10번: top 118px, left 213px
 * 11번: top 125px, left 203px
 * 12번: top 128px, left 192px
 * 13번: top 133px, left 182px
 * 14번: top 137px, left 171px
 * 15번: top 141px, left 161px
 * 16번: top 145px, left 150px
 */

export const boothData = [
  //모두 저녁장사 메뉴만 기입
  //낮 장사만 하는 경우 낮 장사 메뉴 + 기입해주면 좋을 듯

  {//이공대
    id: 1,
    boothNumber: 1,
    boothName: '불패무적이공대',
    major: 'NATURAL SCIENCE & ENGINEERING',
    intro: 'test',
    menu: {
      슬러쉬: '-원',
      미니게임: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_33rd_undefeated/'
  },
  {//금공
    id: 2,
    boothNumber: 2,
    boothName: '금융정보공학과',
    major: 'Financial Information Engineering',
    intro: 'test',
    menu: {
      해물야끼우동: '-원',
      소시지야채볶음: '-원',
      김치전: '-원',
      오뎅탕: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_fie/'
  },
  {//전컴
    id: 3,
    boothNumber: 3,
    boothName: '전자컴퓨터공학과',
    major: 'Electronic Computer Engineering',
    intro: 'test',
    menu: {
      닭꼬치: '-원',
      제육볶음: '-원',
      콘치즈: '-원',
      부대찌개: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_e.c.e/'
  },
  {//토목
    id: 4,
    boothNumber: 4,
    boothName: '토목공학과',
    major: 'Civil & Architectural Engineering',
    intro: 'test',
    menu: {
      콘치즈불닭: '-원',
      제육주먹밥: '-원',
      짬뽕탕: '-원',
      소세지: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_civil.archi/'
  },
  {//불어
    id: 5,
    boothNumber: 5,
    boothName: '불어전공',
    major: 'French Language',
    intro: 'test',
    menu: {
      대패숙주볶음: '-원',
      허니버터갈릭감자: '-원',
      양념감자: '-원',
      어묵탕: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_frenchfries/'
  },
  {//광홍콘 _ 낮 장사만
    id: 6,
    boothNumber: 6,
    boothName: '광고홍보콘텐츠학과',
    major: 'Advertising & Public Relations Contents',
    intro: 'test',
    menu: {
      닭꼬치: '-원',
      치즈닭꼬치: '-원',
      불닭마요닭꼬치: '-원',
      소세지: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_ad_bada/'
  },
  {//중어 _ 인스타 없음
    id: 7,
    boothNumber: 7,
    boothName: '중어전공',
    major: 'Chinese Language',
    intro: 'test',
    menu: {
      마라탕: '-원',
      꿔바로우: '-원',
      빙홍차: '-원',
    },
    account: '-',
    snsLink: ''
  },
  {//영어 _ 인스타 없음, 낮 장사만
    id: 8,
    boothNumber: 8,
    boothName: '영어전공',
    major: 'English Language',
    intro: 'test',
    menu: {
      버터비어: '-원',
      체리에이드: '-원',
      망고에이드: '-원',
      블루시럽에이드: '-원',
    },
    account: '-',
    snsLink: ''
  },
  {//노어
    id: 9,
    boothNumber: 9,
    boothName: '노어전공',
    major: 'Russian Language',
    intro: 'test',
    menu: {
      논알콜칵테일: '-원',
      피나콜라다: '-원',
      미도리샤워: '-원',
      피치크러쉬: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/skurussian/'
  },
  {//일어 _ 인스타 없음
    id: 10,
    boothNumber: 10,
    boothName: '일어전공',
    major: 'Japanese Language',
    intro: 'test',
    menu: {
      타코야끼: '-원',
      야끼소바: '-원',
      교자: '-원',
      가라아게: '-원',
    },
    account: '-',
    snsLink: ''
  },
  {//인문대_낮 장사만
    id: 11,
    boothNumber: 11,
    boothName: '새늘 인문과학대학',
    major: 'COLLEGE OF HUMANITIES',
    intro: 'test',
    menu: {
      구슬아이스크림: '-원',
      컵아이스크림: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_34th_saeneul/'
  },
  {//총학
    id: 12,
    boothNumber: 12,
    boothName: 'HANSUP 총학생회',
    major: 'skuhansup',
    intro: 'test',
    menu: {
      도레미파솔로시죠: '-원',
      반다나: '-원',
      야광팔찌: '-원',
      칭따오_맥주_프로모션: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_52nd_hansup/'
  },
  {//총동 _ 낮 장사만
    id: 13,
    boothNumber: 13,
    boothName: '총동아리연합회',
    major: '서로 총동아리연합회',
    intro: 'test',
    menu: {
      원조커피: '-원',
      아이스티: '-원',
      와플: '-원',
      폴라로이드: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_40th_seoro/'
  },
  {//신문사 _ 낮 장사만
    id: 14,
    boothNumber: 14,
    boothName: '신문사',
    major: 'sku_newspaper',
    intro: 'test',
    menu: {
      페이스페인팅: '-원',
      디토카메라_사진촬영: '-원',
      비눗방울: '-원',
      솜사탕: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_newspaper/'
  },
  {//실음
    id: 15,
    boothNumber: 15,
    boothName: '실용음악학부',
    major: 'Division of Contemporary Music',
    intro: 'test',
    menu: {
      우삼겹숙주볶음: '-원',
      삼겹살: '-원',
      우동: '-원',
      화채: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/skucm_official/'
  },
  {//스텍 _ 인스타 없음
    id: 16,
    boothNumber: 16,
    boothName: '스포츠테크놀리지학과',
    major: '',
    intro: 'test',
    menu: {
      어묵탕: '-원',
      부대찌개: '-원',
      먹태구이: '-원',
      골뱅이소면: '-원',
    },
    account: '-',
    snsLink: ''
  },
  {//
    id: 17,
    boothNumber: 17,
    boothName: '영화영상학과',
    major: 'Film and Digital Media',
    intro: 'test',
    menu: {
      닭강정: '-원',
      짜파구리: '-원',
      라면: '-원',
      오꼬노미야끼: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_film/'
  },
  {//디자인
    id: 18,
    boothNumber: 18,
    boothName: '디자인학부',
    major: 'sku_woolim_art',
    intro: 'test',
    menu: {
      두부김치: '-원',
      김치전: '-원',
      수정과: '-원',
      수육: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku.design_/'
  },
  {//미예대
    id: 19,
    boothNumber: 19,
    boothName: '미용예술대학',
    major: 'COLLEGE OF BEUTY ART',
    intro: 'test',
    menu: {
      모듬소세지: '-원',
      불고기콘치즈: '-원',
      라면: '-원',
      옥수수전: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_beautyart/'
  },
  {//아텍
    id: 20,
    boothNumber: 20,
    boothName: '아트앤테크놀로지학과',
    major: '',
    intro: 'test',
    menu: {
      분수화채: '-원',
      해물깡: '-원',
      짜계치: '-원',
      커스텀슬러쉬: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku.artech/'
  },
  {//아동
    id: 21,
    boothNumber: 21,
    boothName: '아동청소년학과',
    major: '',
    intro: 'test',
    menu: {
      감자튀김: '-원',
      닭갈비: '-원',
      오뎅탕: '-원',
      주먹밥: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku__educare/'
  },
  {//경영
    id: 22,
    boothNumber: 22,
    boothName: '경영학부',
    major: 'Division of Business Administration',
    intro: 'test',
    menu: {
      팥빙수: '-원',
      마약옥수수: '-원',
      모듬전: '-원',
      황도: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_business/'
  },
  {//사과대 _ 낮 장사만
    id: 23,
    boothNumber: 23,
    boothName: '우연 사회과학대학',
    major: 'sku_26th_wooyeon',
    intro: 'test',
    menu: {
      츄러스: '-원',
      회오리감자: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_26th_wooyeon/'
  },
  {//공공
    id: 24,
    boothNumber: 24,
    boothName: '공공인재학부',
    major: 'School of Public Service',
    intro: 'test',
    menu: {
      짜파게티: '-원',
      두부김치: '-원',
      양념콜팝: '-원',
      건빵: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_public/'
  },
  {//군사
    id: 25,
    boothNumber: 25,
    boothName: '군사학과',
    major: 'Military Studies',
    intro: 'test',
    menu: {
      대패삼겹비빔면: '-원',
      비빔: '-원',
      부대찌개: '-원',
      새우볶음밥: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku__militaryscience/'
  },
  {//소웨
    id: 26,
    boothNumber: 26,
    boothName: '',
    major: '',
    intro: 'test',
    menu: {
      어묵세꼬치: '-원',
      오돌뼈주먹밥세트: '-원',
      어묵우동: '-원',
      황도: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_software/'
  },
  {//도공
    id: 27,
    boothNumber: 27,
    boothName: '도시공학과',
    major: 'Urban Planning & Engineering',
    intro: 'test',
    menu: {
      감튀세트: '-원',
      마른오징어: '-원',
      황도: '-원',
      커피땅콩: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_urban/'
  },
  {//물공
    id: 28,
    boothNumber: 28,
    boothName: '물류시스템공학과',
    major: 'Logistics System Engineering',
    intro: 'test',
    menu: {
      순두부열라면: '-원',
      치즈김치볶음밥: '-원',
      삼겹살꼬치: '-원',
      감자전: '-원',
    },
    account: '-',
    snsLink: 'https://www.instagram.com/sku_logistics/'
  },
  {//나화생
    id: 29,
    boothNumber: 29,
    boothName: '나노화학생명공학과',
    major: 'Nano-Chemical & Environmental Engineering',
    intro: 'test',
    menu: {
      짜계치: '-원',
      떡라면: '-원',
      스계후: '-원',
      묵사발: '-원',
    },
  },
];
