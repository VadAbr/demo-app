import { Accessibility, MarkerType, TMarker } from '@pages/map/store/types';

import img1 from '../../../../assets/images/1.jpg';
import img2 from '../../../../assets/images/2.jpg';
import img3 from '../../../../assets/images/3.jpg';
import img4 from '../../../../assets/images/4.jpg';
import img5 from '../../../../assets/images/5.jpg';
import img6 from '../../../../assets/images/6.jpg';
import img7 from '../../../../assets/images/7.jpg';
import img8 from '../../../../assets/images/8.jpg';
import img9 from '../../../../assets/images/9.jpg';
import img10 from '../../../../assets/images/10.jpg';
import img11 from '../../../../assets/images/11.jpg';
import img12 from '../../../../assets/images/12.jpg';
import img13 from '../../../../assets/images/13.jpg';
import img14 from '../../../../assets/images/14.jpg';
import img15 from '../../../../assets/images/15.jpg';
import img16 from '../../../../assets/images/16.jpg';
import img18 from '../../../../assets/images/18.png';
import img19 from '../../../../assets/images/19.jpg';
import img20 from '../../../../assets/images/20.jpg';
import img21 from '../../../../assets/images/21.jpg';
import img22 from '../../../../assets/images/22.jpg';
import img23 from '../../../../assets/images/23.jpg';
import img24 from '../../../../assets/images/24.jpg';
import img25 from '../../../../assets/images/25.jpg';
import img26 from '../../../../assets/images/26.jpg';
import img27 from '../../../../assets/images/27.jpg';
import img28 from '../../../../assets/images/28.jpg';
import img29 from '../../../../assets/images/29.jpg';
import img30 from '../../../../assets/images/30.jpg';
import img31 from '../../../../assets/images/31.jpg';

export const Markers: TMarker[] = [
  {
    name: 'Администрация муниципального образования-Клепиковский муниципальный район',
    coords: [55.131235, 40.176778],
    address: 'Рязанская область, город Спас-Клепики, площадь Ленина, 1',
    accessibility: Accessibility.full,
    type: MarkerType.government,
    image: img1,
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
    image: img2,
  },
  {
    name: 'Управление социальной защиты населения',
    coords: [55.129693, 40.175049],
    address: 'Рязанская область, город Спас-Клепики, площадь Ленина, 65А',
    accessibility: Accessibility.full,
    type: MarkerType.government,
    image: img3,
  },
  {
    name: 'Дом культуры',
    coords: [55.128865, 40.17132],
    address: 'Рязанская область, город Спас-Клепики, улица Есенина, 7',
    accessibility: Accessibility.full,
    type: MarkerType.culture,
    image: img4,
  },
  {
    name: 'Центральная Клепиковская библиотека',
    coords: [55.12859, 40.171116],
    address: 'Рязанская область, город Спас-Клепики, улица Есенина, 6',
    accessibility: Accessibility.partially,
    type: MarkerType.culture,
    image: img5,
  },
  {
    name: 'Детская библиотека',
    coords: [55.130138, 40.169856],
    address: 'Рязанская область, город Спас-Клепики, улица Свердлова, 16',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.culture,
    image: img6,
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
    image: img7,
  },
  {
    name: 'Сельский дом культуры',
    coords: [55.111263, 40.217125],
    address: 'Рязанская область, Клепиковский район, село Екшур, улица Красный Октябрь, 7',
    accessibility: Accessibility.full,
    type: MarkerType.culture,
    image: img8,
  },
  {
    name: 'Дом культуры',
    coords: [54.950909, 39.960683],
    address: 'Рязанская область, Клепиковский район, село Криуша, улица 1 Мая, 4',
    accessibility: Accessibility.full,
    type: MarkerType.culture,
    image: img9,
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
    image: img10,
  },
  {
    name: 'МОУ Криушинская СОШ ',
    coords: [54.951052, 39.962138],
    address: 'Рязанская область, Клепиковский район, улица 1 Мая, 1Б',
    accessibility: Accessibility.partially,
    type: MarkerType.education,
    image: img11,
  },
  {
    name: 'МОУ Екшурская СОШ',
    coords: [55.113224, 40.214675],
    address: 'Рязанская область, Клепиковский район, село Екшур, улица Красный Октябрь, 1А',
    accessibility: Accessibility.full,
    type: MarkerType.education,
    image: img12,
  },
  {
    name: 'Тумская средняя школа N3',
    coords: [55.154311, 40.553307],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Энгельса, 33А',
    accessibility: Accessibility.partially,
    type: MarkerType.education,
    image: img13,
  },
  {
    name: 'Тумская детская музыкальная школа',
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
    image: img14,
  },
  {
    name: 'МОУ Клепиковский СОШ N1',
    coords: [55.138232, 40.193187],
    address: 'Рязанская область, город Спас-Клепики, улица Ленина, 88',
    accessibility: Accessibility.full,
    type: MarkerType.education,
    image: img15,
  },
  {
    name: 'Физкультурно-оздоровительный комплекс Триумф',
    coords: [55.140467, 40.167955],
    address: 'Рязанская область, город Спас-Клепики, улица Московская, 12',
    accessibility: Accessibility.partially,
    type: MarkerType.sport,
    image: img16,
  },
  {
    name: 'ГБУ РО Клепиковский РБ ',
    coords: [55.135442, 40.17425],
    address: 'Рязанская область, город Спас-Клепики, улица Бебеля, 3',
    accessibility: Accessibility.partially,
    type: MarkerType.medicine,
    image: img18,
  },
  {
    name: 'Криушинская участковая больница',
    coords: [54.951151, 39.959343],
    address: 'Рязанская область, Клепиковский район, село Криуша, улица 1 Мая, 1Г',
    accessibility: Accessibility.full,
    type: MarkerType.medicine,
    image: img19,
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
    image: img20,
  },
  {
    name: 'Постоялый двор на Касимовского тракте',
    coords: [55.149359, 40.566019],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Ленина, 26',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.museum,
    description:
      'Постоялый двор на Касимовском тракте - это даже не музей, это историческое иммерсивное про-странство, которое с первых минут погружает в историю Мещёры, Тумы. Вы сразу становитесь участником событий. Ко всему можно прикоснуться, присесть и даже прилечь, предварительно выбрав перину пуховую или набитую сеном. Можно залезть на печку, попробовать себя в роли хо-зяйки, познакомиться со странинной утварью. Проект реализуют при поддержке Президентского фонда культурных инициатив.',
    image: img21,
  },
  {
    name: 'Дом-музей Тумского сказителя Были не были',
    coords: [55.150385, 40.554965],
    address: 'Рязанская область, Клепиковский район, рабочий посёлок Тума, улица Советская, 68',
    accessibility: Accessibility.none,
    type: MarkerType.museum,
    description:
      'Основная экспозиция музея состоит из двух частей. Первая – литературно-историческая, о писателях, чье творчество и жизнь были связаны с рязанской мещерой. Вторая часть – предметы крестьянского быта и промыслов, один шаг, и вы переноситесь в 19 век с самот-каными половичками, деревянной и глиняной утварью, сундуками разных мастей, станками и при-способлениями, и много еще разного необычного.',
    image: img22,
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
    image: img23,
  },
  {
    name: 'Парк-отель Фестиваль',
    coords: [55.196952, 40.371165],
    address: 'Рязанская область, Клепиковский район, Оськинское сельское поселение, посёлок Чулис',
    accessibility: Accessibility.partially,
    type: MarkerType.rest,
    description:
      'Парк-отель «Фестиваль» — это загородный комплекс европейского типа с охраняемой территори-ей. Расположился он прямо в заповедных лесах Рязани, между несколькими прудами и недалеко от Мещерского национального парка. Это один из самых уединенных уголков. Красивая природа, экологически чистый воздух, расслабляющая атмосфера — только небольшой перечень того, что вы найдете в парк-отеле «Фестиваль». А если к этому еще добавить современное оснащение ком-плекса, команду приятных в общении и профессиональных сотрудников, то ему не найдется рав-ных.',
    image: img24,
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
    image: img25,
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
    image: img26,
  },
  {
    name: 'Кафе Паруса',
    coords: [55.17929, 40.154525],
    address: 'Рязанская область, Клепиковский район, Ненашкинское сельское поселение',
    accessibility: Accessibility.partially,
    type: MarkerType.cafe,
    description:
      'Ресторан "Паруса" находится в живописном месте у большого озера. Зал вместительный, места удобные. Есть столики вне помещения. Хорошее обслуживание. Тип кухни: Европейская, Русская.',
    image: img27,
  },
  {
    name: 'Ресторан Престиж-Холл',
    coords: [55.12334, 40.12824],
    address: 'Рязанская область, Клепиковский район, деревня Полушкино, 54',
    accessibility: Accessibility.partially,
    type: MarkerType.cafe,
    description:
      'Банкетный комплекс Престиж Холл– это 3 роскошных банкетных зала, собственная кухня и про-фессиональная банкетная служба. Здесь вы сможете провести идеально ваше торжество, а свежий воздух, живописные виды, профессионализм сотрудников позволит запомнить его надолго.',
    image: img28,
  },
  {
    name: 'Ресторан Сердце Парижа',
    coords: [55.197043, 40.371213],
    address: 'Рязанская область, Клепиковский район, Оськинское сельское поселение, посёлок Чулис',
    accessibility: Accessibility.partially,
    type: MarkerType.cafe,
    description:
      'Ресторан «Сердце Парижа» имеет 2 этажа и круговую планировку, сцену для развлекательных ме-роприятий. Он рассчитан на 600-650 посадочных мест, декорирован в стиле французского шика.',
    image: img29,
  },
  {
    name: 'Кафе Старый Хутор',
    coords: [55.127239, 40.170252],
    address: 'Рязанская область, город Спас-Клепики, улица Советская, 6',
    accessibility: Accessibility.none,
    type: MarkerType.cafe,
    description:
      'Кафе «Старый Хутор» – это атмосферное место с интересным интерьером, хорошей мебелью и вкусной едой.',
    image: img30,
  },
  {
    name: 'Кафе Березка',
    coords: [55.143294, 40.61584],
    address: 'Рязанская область, Клепиковский район, Алексеевское сельское поселение',
    accessibility: Accessibility.temporarily_unavailable,
    type: MarkerType.cafe,
    description:
      'Уютное семейное кафе, вкусная «домашняя еда». Вежливый персонал, обслуживание на высоте.',
    image: img31,
  },
];
