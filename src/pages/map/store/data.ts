import { Accessibility, MarkerType, TMarker } from '@pages/map/store/types';

export const Markers: TMarker[] = [
  {
    name: 'Администрация муниципального образования-Клепиковский муниципальный район',
    coords: [55.131235, 40.176778],
    address: 'Рязанская область, город Спас-Клепики, площадь Ленина, 1',
    accessibility: Accessibility.full,
    type: MarkerType.government,
    image:
      'https://downloader.disk.yandex.ru/preview/b888e5b6c3ef69d460ee681b53ad0fa12b008351b861d52efef0afa8bfcaa71c/65e8e313/GyInrPTZYscNNkZ1el2hXEcA9OyWTLPhzrgC3qEhb6x9bc0p4MuC7MTW8_efi7FxTAW8qjfnk0Zh5x3fwVFpng%3D%3D?uid=0&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
  },
  {
    name: 'Администрация Муниципального - Криушинское Сельское Поселение Клепиковского Муници-пального района',
    coords: [54.949782, 39.959889],
    address: 'Рязанская область, Клепиковский район, село Криуша, улица 1 Мая, 2',
    accessibility: Accessibility.partially,
    type: MarkerType.government,
  },
  {
    name: 'Администрация Тумского городского поселения',
    coords: [55.146642, 40.550517],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 158',
    accessibility: Accessibility.partially,
    type: MarkerType.government,
  },
  {
    name: 'Администрация Муниципального образования Екшурское Сельское Поселение Клепиковского Муниципального района',
    coords: [55.112706, 40.217666],
    address: 'Рязанская область, Клепиковский район, село Екшур, улица Красный Октябрь, 1',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.government,
    image:
      'https://1.downloader.disk.yandex.ru/preview/df0a70d58cdbe7070e89e2ac40b238e655fff462563beb0b88ff7ce3cca6796c/inf/G5Mujm2y-w-vuo6QI9-jYPGVxS0e9cMz6UX4iKEv_fO6f_PGXxJpbw1c19t9EAmD3VlsPodh7tRn1zSwDZYr7g%3D%3D?uid=323542374&filename=2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Управление социальной защиты населения',
    coords: [55.129693, 40.175049],
    address: 'Рязанская область, город Спас-Клепики, площадь Ленина, 65А',
    accessibility: Accessibility.full,
    type: MarkerType.government,
    image:
      'https://1.downloader.disk.yandex.ru/preview/0dbf1d64e7904c314f8d3f21da6808d1fd250912fafecc33f89a97ed26728849/inf/eOvil-7PsVXlONhX3W75JoDfE3hVls22SpPi6O006Oj6wAdTbENejADW7KYUXciRTN7t8Yt0gLTyacXAYolXyg%3D%3D?uid=323542374&filename=3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Дом культуры',
    coords: [55.128865, 40.17132],
    address: 'Рязанская область, город Спас-Клепики, улица Есенина, 7',
    accessibility: Accessibility.full,
    type: MarkerType.culture,
    image:
      'https://3.downloader.disk.yandex.ru/preview/eb57476721efd3d41279fe61addd21c8090695a78a234094b59f2f6123e35bfd/inf/ZW6WHwa5D_VoACqFetXAVCPJ95lESusi2USuA1jgs5rnFETP5gkFeoLHRUacCnffP28vQkMuUU9Ph_1X3IhhCA%3D%3D?uid=323542374&filename=4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Центральная Клепиковская библиотека',
    coords: [55.12859, 40.171116],
    address: 'Рязанская область, город Спас-Клепики, улица Есенина, 6',
    accessibility: Accessibility.partially,
    type: MarkerType.culture,
    image:
      'https://1.downloader.disk.yandex.ru/preview/5a46c9a9bc318b479440c409531cb40d94883e2b36145966ba35c6d5fb5f82f5/inf/P-47gX1Haw2fOVORIt4MRfNR00ZPjIocc-3hDAXMoxxkBPbQWmtlIPJzti99Zc-om-yiNw4fjKBhS4H0Pxwpog%3D%3D?uid=323542374&filename=5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Детская библиотека',
    coords: [55.130138, 40.169856],
    address: 'Рязанская область, город Спас-Клепики, улица Свердлова, 16',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.culture,
    image:
      'https://4.downloader.disk.yandex.ru/preview/fbc54a7eeea67d2d3da0ace986bbeed3073806a718683722be5db1054f884089/inf/oUBL6-2OqyRM8IqToaXM8uW1U2BtzNXY3m2vsQBb4yvWBe8fFOfP3XHp5sYAFyvTmTY39KuArTW0ANHQvyJwIw%3D%3D?uid=323542374&filename=6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Дом творчества',
    coords: [55.128402, 40.18034],
    address: 'Рязанская область, город Спас-Клепики, улица Интернациональная, 26',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.culture,
  },
  {
    name: 'Православная библиотека',
    coords: [55.146105, 40.550984],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 145',
    accessibility: Accessibility.none,
    type: MarkerType.culture,
  },
  {
    name: 'Дом детского творчества',
    coords: [55.146599, 40.553145],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 133',
    accessibility: Accessibility.partially,
    type: MarkerType.culture,
    image:
      'https://3.downloader.disk.yandex.ru/preview/46975acdc753c82b89e1bf58e7b412bb89be292f825b15723e779255e1ecac82/inf/nNr6EMLtCFU8FwEWXyIPLNIyOKqEpVdZpUeO9l1lRAVwYM1R9886aZitprSVdxJXQxuOXPtV-UNV-4fObiJwoQ%3D%3D?uid=323542374&filename=7.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Сельский дом культуры',
    coords: [55.111263, 40.217125],
    address: 'Рязанская область, Клепиковский район, село Екшур, улица Красный Октябрь, 7',
    accessibility: Accessibility.full,
    type: MarkerType.culture,
    image:
      'https://2.downloader.disk.yandex.ru/preview/252784fa466bdbcbd19e154c34f9478de147a800ad9af2aa18df21f697d3143d/inf/K3lHAzclYZ0HukNbFH7NBb-Uv4yhQ1SQ1uNv46QsPF_d0OIpyIO58dM9sS4XHviOEWPw0bk1sFUXf6KLuLzfHg%3D%3D?uid=323542374&filename=8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Дом культуры',
    coords: [54.950909, 39.960683],
    address: 'Рязанская область, Клепиковский район, село Криуша, улица 1 Мая, 4',
    accessibility: Accessibility.full,
    type: MarkerType.culture,
    image:
      'https://1.downloader.disk.yandex.ru/preview/a702a2adcede3ce02cfddd17c0f1d44178a9dabf78260f20b903e5c81522606c/inf/nUq9vlJYYKfeyK2-XaNMj2yWMbg1YR240pLxiyUKTQuV_YMa68TGHZPhCn-BI2oxVEiM2RHPbnv-jo2g-HPQJA%3D%3D?uid=323542374&filename=9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Болонский сельский дом культуры Мещера',
    coords: [55.054355, 40.077578],
    address: 'Рязанская область, Клепиковский район, посёлок Болонь, улица Школьная, 4',
    accessibility: Accessibility.none,
    type: MarkerType.culture,
  },
  {
    name: 'Муниципальное общеобразовательное учреждение Болоньская средняя общеобразовательная школа',
    coords: [55.055058, 40.078495],
    address: 'Рязанская область, Клепиковский район, посёлок Болонь, улица Школьная, 5',
    accessibility: Accessibility.none,
    type: MarkerType.education,
    image:
      'https://2.downloader.disk.yandex.ru/preview/9441aec9f53e9eaf6f96b9e76b4f4f044f77a9e13af122f2bb07111d0fafda99/inf/ZMFjCJEBpbRnggbylj7e_GGw49rgWvxZM5FVy8bgLTfuOSRgi8u0859IKQg6l1-24ftPZdiRV4WOA7BxuNjS2A%3D%3D?uid=323542374&filename=10.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'МОУ Криушинская СОШ ',
    coords: [54.951052, 39.962138],
    address: 'Рязанская область, Клепиковский район, улица 1 Мая, 1Б',
    accessibility: Accessibility.partially,
    type: MarkerType.education,
    image:
      'https://2.downloader.disk.yandex.ru/preview/696fdfe7e8f68ef48503ff5a1fa33edec133d833ac5f577d61791efe9bdc614c/inf/T-Yl0ymHoKo52It6NObbVvTMG0ZQjq5T-b4pvqaf-SlzBvTQzleDbXCpRfG1x_B6L389Kc57FR5NF5KRqS00Fg%3D%3D?uid=323542374&filename=11.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'МОУ Екшурская СОШ',
    coords: [55.113224, 40.214675],
    address: 'Рязанская область, Клепиковский район, село Екшур, улица Красный Октябрь, 1А',
    accessibility: Accessibility.full,
    type: MarkerType.education,
    image:
      'https://1.downloader.disk.yandex.ru/preview/2b586db223645e74b74efb548c73c9b1b9c48cffe1abe8a5b56ddbc871034a84/inf/wlIE_yK_TIwx58sDMPgjUEqZVdkOGsPHwcHZjnBqNfe0-_7ftigQQTjtvabIjmLz4Qrwifj7T6VWPzABZPYl0g%3D%3D?uid=323542374&filename=12.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Тумская средняя школа N3',
    coords: [55.154311, 40.553307],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Энгельса, 33А',
    accessibility: Accessibility.partially,
    type: MarkerType.education,
    image:
      'https://2.downloader.disk.yandex.ru/preview/d2067f9364b6fa403ced73d1193e41e7b557a53f3edbfd3fb93e9f74c96e2bef/inf/E9qyJSGLR6VADROVdCcdzf0VC4iksozCA0paeBQm-Cmgk7iLcRzuZAhSQhjD590IyzOrQY-tT_rJJgrka6u2EA%3D%3D?uid=323542374&filename=13.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Тумская детская музыкальная школа ',
    coords: [55.149447, 40.56706],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 18',
    accessibility: Accessibility.partially,
    type: MarkerType.education,
  },
  {
    name: 'Тумская средняя школа N46',
    coords: [55.146033, 40.552015],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 141',
    accessibility: Accessibility.partially,
    type: MarkerType.education,
    image:
      'https://1.downloader.disk.yandex.ru/preview/35f600c72e8e8f0787c9a16ca4e7af980aabba870e705468694cc824c573b3a7/inf/wuhcbLXEVSEZEoKomGazwLUPuWUwv1EkNV3wA1P48Q68qnOQZDVn5rWMiTFheXG2FLHs6Hw9fNpx1S4Hl2GUBg%3D%3D?uid=323542374&filename=14.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'МОУ Клепиковский СОШ N1',
    coords: [55.138232, 40.193187],
    address: 'Рязанская область, город Спас-Клепики, улица Ленина, 88',
    accessibility: Accessibility.full,
    type: MarkerType.education,
    image:
      'https://1.downloader.disk.yandex.ru/preview/b7aa6a557065dca7b6be895ed27db3ceada7a1ec0f184cb2e9465b00ce08d903/inf/PU1wpN1znG7MPKleUzigJ60BWQF7tiB9iFPR3KfsyedoKYBuMxeTEeglepG4SH0XAee810FMiA-aRB-3AdEpfA%3D%3D?uid=323542374&filename=15.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Физкультурно-оздоровительный комплекс Триумф',
    coords: [55.140467, 40.167955],
    address: 'Рязанская область, город Спас-Клепики, улица Московская, 12',
    accessibility: Accessibility.partially,
    type: MarkerType.sport,
    image:
      'https://1.downloader.disk.yandex.ru/preview/e0669e8411ca914e51978c00e4d4db0e10e5223fe1d8a6e8caaca43cef1218b1/inf/D5IxiDDlZHJ9kEuHoMziypcpPvN45Od6GG6ZD2iDq_A4OldlW6oYwEB1EQnxPs7zWJKx88Kvglfl6fcpuYTCGQ%3D%3D?uid=323542374&filename=16.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'ГБУ РО Клепиковский РБ ',
    coords: [55.135442, 40.17425],
    address: 'Рязанская область, город Спас-Клепики, улица Бебеля, 3',
    accessibility: Accessibility.partially,
    type: MarkerType.medicine,
    image:
      'https://3.downloader.disk.yandex.ru/preview/cf587e72de97b50692cb14f7602df589780f173adf04cd7dafe756299821212e/inf/mDEgxNjf7osqkiKwn74SKQAFTjZHpD3XjyfjzwZA7KLmsqxHTpKIRO-pJ3vhkvQrCai1AybUFJW1-gcsDOEFUg%3D%3D?uid=323542374&filename=18.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Криушинская участковая больница',
    coords: [54.951151, 39.959343],
    address: 'Рязанская область, Клепиковский район, село Криуша, улица 1 Мая, 1Г',
    accessibility: Accessibility.full,
    type: MarkerType.medicine,
    image:
      'https://4.downloader.disk.yandex.ru/preview/3d356b0a95c5a3b9556d6d1d00aef90d88d2813d6646d21dcd77579bb5e60010/inf/MKa3j0fssY7hFbeWQmi3tc2t7O-XrPEderINGaOVza85U5Ctj2-YOWALvDOqqFkpPFQS5XLAgzZjWBBf33d-Lg%3D%3D?uid=323542374&filename=19.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'МУЗ Болонская участковая больница',
    coords: [55.056524, 40.074819],
    address: 'Рязанская область, Клепиковский район, посёлок Болонь, улица Школьная, 11',
    accessibility: Accessibility.partially,
    type: MarkerType.medicine,
  },
  {
    name: 'Центр психолого-медико-социальной службы Контакт',
    coords: [55.126828, 40.172422],
    address: 'Рязанская область, город Спас-Клепики, улица Просвещения, 21',
    accessibility: Accessibility.partially,
    type: MarkerType.medicine,
  },
  {
    name: 'Музей С.А. Есенина',
    coords: [55.131374, 40.167929],
    address: 'Рязанская область, город Спас-Клепики, улица Урицкого, 47',
    accessibility: Accessibility.partially,
    type: MarkerType.museum,
    description:
      'Музей С.А. Есенина, а правильное название музей "Второклассная церковно-приходская школа" расположен в школе, куда Сергей Есенин в возрасте 14 лет поступил и далее три года учился с 1909 по 1912 гг. Именно Спас-Клепики стали второй духовной родиной Есенина, ведь здесь он сформировался как творческая личность и здесь были написаны одни из его первых стихов. В музее бережно хранят наследие Есенина. На первом этаже здания воссозданы кухня и комнаты его преподавателей. На втором этаже стоит деревянная парта, где сидел будущий поэт. Школьное общежитие воспроизводит обстановку, в которой жили юноши, а стены выставочного зала укра-шают работы художников из Рязани и Москвы.',
    image:
      'https://2.downloader.disk.yandex.ru/preview/57038e46f1556c8ddc543fe4398bad40af13cad3dcb6f9440469679f5e8b2493/inf/DAqboGUiM-1fRSz-cOz7z2PzMY1374vHT0FouLPvbYonUaeAu-ALuuILjY0nlfuksmuC5DIP_DDgUHTc_MZ7kQ%3D%3D?uid=323542374&filename=20.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Постоялый двор на Касимовского тракте',
    coords: [55.149359, 40.566019],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 26',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.museum,
    description:
      'Постоялый двор на Касимовском тракте - это даже не музей, это историческое иммерсивное про-странство, которое с первых минут погружает в историю Мещёры, Тумы. Вы сразу становитесь участником событий. Ко всему можно прикоснуться, присесть и даже прилечь, предварительно выбрав перину пуховую или набитую сеном. Можно залезть на печку, попробовать себя в роли хо-зяйки, познакомиться со странинной утварью. Проект реализуют при поддержке Президентского фонда культурных инициатив.',
    image:
      'https://3.downloader.disk.yandex.ru/preview/c62d8b96359ffdaca17a413d48ed1442ff7f7fbeb197808855d789f7f1238a1c/inf/SRQ2P-xKciTLv8Tsk6CDw0OzuvCRiBbC0wEi3fQXpPhBHwoYEZXEHYJYH7Xsquedx893fHojFEI8WYKS8i9yag%3D%3D?uid=323542374&filename=21.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Дом-музей Тумского сказителя Были не были',
    coords: [55.150385, 40.554965],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Советская, 68',
    accessibility: Accessibility.none,
    type: MarkerType.museum,
    description:
      'Основная экспозиция музея состоит из двух частей. Первая – литературно-историческая, о писателях, чье творчество и жизнь были связаны с рязанской мещерой. Вторая часть – предметы крестьянского быта и промыслов, один шаг, и вы переноситесь в 19 век с самот-каными половичками, деревянной и глиняной утварью, сундуками разных мастей, станками и при-способлениями, и много еще разного необычного.',
    image:
      'https://2.downloader.disk.yandex.ru/preview/65f60a5bfc9b14a3bd6d1ebabe0e0f9c0e9dba55ca771400c6732dac27e8b5d1/inf/Uo4y1kn6QVj6J9AT3nBhbab705cZ4WSWX-2-RKaoBhNAY2Sup0hb7zfa9akkY47ozdPTPy9Z4maeKKHrZKFgWg%3D%3D?uid=323542374&filename=22.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Музей деревянного зодчества',
    coords: [55.190325, 40.162813],
    address:
      'Рязанская область, Клепиковский район, Ненашкинское сельское поселение, деревня Лункино',
    accessibility: Accessibility.partially,
    type: MarkerType.museum,
    description:
      'На сегодня Музей деревянного зодчества это целый комплекс, включающий  в себя:\n' +
      '- обширную поляну 3,5 Га с соснами и березами;\n' +
      '- 3 музейных здания, в которых в 15 залах находятся удивительные сказочные экспонаты;\n' +
      '- действующий детский игровой комплекс "Мещерская сказка" - результат пяти всероссий-ских фестивалей мастеров по садово-парковой скульптуре.',
    image:
      'https://2.downloader.disk.yandex.ru/preview/87cf2c85170038a5b3ab37eb11633c690421c93b341734e413059fa89947a777/inf/SU2MvUHMPJfVq9Rn5ziK6mwS64LQt9ILf_ey6MUMiMMY63nmLgZzADQeJ0tEp50-7FvrfHntHpeLnBANXNx8rg%3D%3D?uid=323542374&filename=23.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Парк-отель Фестиваль',
    coords: [55.196952, 40.371165],
    address: 'Рязанская область, Клепиковский район, Оськинское сельское поселение, посёлок Чулис',
    accessibility: Accessibility.partially,
    type: MarkerType.rest,
    description:
      'Парк-отель «Фестиваль» — это загородный комплекс европейского типа с охраняемой территори-ей. Расположился он прямо в заповедных лесах Рязани, между несколькими прудами и недалеко от Мещерского национального парка. Это один из самых уединенных уголков. Красивая природа, экологически чистый воздух, расслабляющая атмосфера — только небольшой перечень того, что вы найдете в парк-отеле «Фестиваль». А если к этому еще добавить современное оснащение ком-плекса, команду приятных в общении и профессиональных сотрудников, то ему не найдется рав-ных.',
    image:
      'https://4.downloader.disk.yandex.ru/preview/ee64002c5dbf9f4da178ad4be4d4355c7bd0b59c86ac67624349b54eed778381/inf/mGSo89wUGAeeV_SwwVeCEq28F3ve9k3RPWPSNEBQnN3zCLCOZXhF4yGSWzjHWy1qhFdLt6DkUBxqlLlQ4ZCALg%3D%3D?uid=323542374&filename=24.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'База отдыха Паруса',
    coords: [55.174543, 40.157698],
    address:
      'Рязанская область, Клепиковский район, Ненашкинское сельское поселение, деревня Батыково',
    accessibility: Accessibility.partially,
    type: MarkerType.rest,
    description:
      'Парк - отель находится в экологически чистом районе Рязанской области, в 60 километрах от Ряза-ни. 40 минут езды на машине и вы в уединенном уютном месте на берегу озера Белое. Разместиться можно как в гостиничном номере,так и снять отдельный домик.',
    image:
      'https://3.downloader.disk.yandex.ru/preview/0322a0f56e9052372725f4b6bb7dcde01b27927705f7eaf4279ad19c92a6a011/inf/7Tjk5s_WxMfxWr-yy6Xa9nhf2sQQy8DgFpq1i2dA1QG0cxD6Dc2zI2P-H_2zLxvBRdLPaMj6fOT4rHm0ZJLY2w%3D%3D?uid=323542374&filename=25.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'База отдыха Полушкино',
    coords: [55.123169, 40.128536],
    address:
      'Рязанская область, Клепиковский район, Екшурское сельское поселение, деревня Полушкино',
    accessibility: Accessibility.partially,
    type: MarkerType.rest,
    description:
      'База отдыха «Полушкино» находится всего в 180 км от Москвы и всего в 70 км от Рязани, в одном из самых живописных мест, где чистейшие озера соседствуют с великолепными густыми лесами. В течении всего года база готова предоставлять своим гостям возможность провести незабываемый отдых. Спектр услуг варьируется от умиротворяющей рыбалки на берегу реки Пра до активных видов спорта.',
    image:
      'https://4.downloader.disk.yandex.ru/preview/79f564ce43d20efe73b00c24bf522984fbedfb079bee54725073642ff08d6315/inf/kYhCL4vSdesfrlk3s_IATeU4dZ_B0gOcmfR088r4TnEEZ1vJHKGJXQ8b7RbTFrGL564d-oZBvhQUee-uH4_LwQ%3D%3D?uid=323542374&filename=26.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Кафе Паруса',
    coords: [55.17929, 40.154525],
    address: 'Рязанская область, Клепиковский район, Ненашкинское сельское поселение',
    accessibility: Accessibility.partially,
    type: MarkerType.cafe,
    description:
      'Ресторан "Паруса" находится в живописном месте у большого озера. Зал вместительный, места удобные. Есть столики вне помещения. Хорошее обслуживание. Тип кухни: Европейская, Русская.',
    image:
      'https://4.downloader.disk.yandex.ru/preview/451b71c21d6e492758dcc03ae3fadd5dc59d52c69170ec0d7184ec4b4f7c96ba/inf/upzluL_M7byZkG8hbuWRKlB0L77Jxd5gjD2MFc1Pl_Uxb9nVUO-Y8-6XRkpGH3r32vV1t8d5OgppWGWMa5O5iQ%3D%3D?uid=323542374&filename=27.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Ресторан Престиж-Холл',
    coords: [55.12334, 40.12824],
    address: 'Рязанская область, Клепиковский район, деревня Полушкино, 54',
    accessibility: Accessibility.partially,
    type: MarkerType.cafe,
    description:
      'Банкетный комплекс Престиж Холл– это 3 роскошных банкетных зала, собственная кухня и про-фессиональная банкетная служба. Здесь вы сможете провести идеально ваше торжество, а свежий воздух, живописные виды, профессионализм сотрудников позволит запомнить его надолго.',
    image:
      'https://1.downloader.disk.yandex.ru/preview/d023c412de10edd967abf3717ab5586aae67e94ec4c1c3ddb169a5c3e6dd33c9/inf/RChRpqy2TIWcXq_TIKHZX1qKtBNDyQMNbd1iC1JflIvI0azuPmpOUWmFbRLVNgdhLOjFjsAEOHYBIA75MeDIkQ%3D%3D?uid=323542374&filename=28.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Ресторан Сердце Парижа',
    coords: [55.197043, 40.371213],
    address: 'Рязанская область, Клепиковский район, Оськинское сельское поселение, посёлок Чулис',
    accessibility: Accessibility.partially,
    type: MarkerType.cafe,
    description:
      'Ресторан «Сердце Парижа» имеет 2 этажа и круговую планировку, сцену для развлекательных ме-роприятий. Он рассчитан на 600-650 посадочных мест, декорирован в стиле французского шика.',
    image:
      'https://1.downloader.disk.yandex.ru/preview/2f6126a26af787814a33b7ff254faa38ca56e20e3a5aced965828922252a695f/inf/TJ--F6Djs7SZc8Z8T6ICYw9bOooJGrT_5PtdOXQ4qeCndTrHqbiBhTCRtITZ8ubuEpDmg9bPCppjjxtMUNAA-Q%3D%3D?uid=323542374&filename=29.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Кафе Старый Хутор',
    coords: [55.127239, 40.170252],
    address: 'Рязанская область, город Спас-Клепики, улица Советская, 6',
    accessibility: Accessibility.none,
    type: MarkerType.cafe,
    description:
      'Кафе «Старый Хутор» – это атмосферное место с интересным интерьером, хорошей мебелью и вкусной едой.',
    image:
      'https://2.downloader.disk.yandex.ru/preview/d9e7bd41247b00bdd54ce15965281e19fb8de2c0921f0ccc997774fa9258f5b2/inf/Sq3_2zZiWMy9sdO_LW2H8FPwbXjr4IKoVSLjt_XZjr37I9SWZznEVj_s1U-7Hlky7W-zRdKj4C3swafuKhL59Q%3D%3D?uid=323542374&filename=30.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
  {
    name: 'Кафе Березка',
    coords: [55.143294, 40.61584],
    address: 'Рязанская область, Клепиковский район, Алексеевское сельское поселение',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.cafe,
    description:
      'Уютное семейное кафе, вкусная «домашняя еда». Вежливый персонал, обслуживание на высоте.',
    image:
      'https://2.downloader.disk.yandex.ru/preview/1a47aafbcbea28a903909f7391d6c2fb7da568c92b835baa412889f257b6139b/inf/rvZp1foLk9sBzHItu2G3TQGaSbnUwEp12Di_0pw597oYgJm6qBcPf2k_Uf-hvfQEN-3q8rFfxmwHMFjdT_13HA%3D%3D?uid=323542374&filename=31.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=323542374&tknv=v2&size=941x909',
  },
];
