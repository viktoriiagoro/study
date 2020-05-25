import {
  HomeOutlined,
  FireOutlined,
  VideoCameraAddOutlined,
  PlaySquareOutlined,
  ClockCircleOutlined,
  DownOutlined,
  YoutubeOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  FlagOutlined,
  CommentOutlined,
} from '@ant-design/icons'

export const SIDER_MENU = [
  {
    title: null,
    menu: [
      {
        icon: HomeOutlined,
        title: 'Головна',
        isActive: true,
      },
      {
        icon: FireOutlined,
        title: 'Популярне',
      },
      {
        icon: VideoCameraAddOutlined,
        title: 'Підписки',
      },
    ],
  },
  {
    title: null,
    menu: [
      {
        icon: PlaySquareOutlined,
        title: 'Бібліотека',
      },
      {
        icon: ClockCircleOutlined,
        title: 'Історія',
      },
      {
        icon: DownOutlined,
        title: 'Ваші відео',
      },
      {
        icon: YoutubeOutlined,
        title: 'Переглянути пізніше',
      },
      {
        icon: HeartOutlined,
        title: 'Відео, які сподобались',
      },
      {
        icon: QuestionCircleOutlined,
        title: 'Показати більше',
      },
    ],
  },
  {
    title: 'ПІДПИСКИ',
    menu: [
      {
        icon: YoutubeOutlined,
        title: 'НТВ',
      },
      {
        icon: YoutubeOutlined,
        title: 'Новий канал',
      },
      {
        icon: YoutubeOutlined,
        title: 'DKA-DEVELOP',
      },
      {
        icon: YoutubeOutlined,
        title: 'Типичний вер...',
      },
      {
        icon: YoutubeOutlined,
        title: 'Говорить україна',
      },
      {
        icon: YoutubeOutlined,
        title: 'ICTV',
      },
      {
        icon: YoutubeOutlined,
        title: 'Андрей Андр...',
      },
      {
        icon: YoutubeOutlined,
        title: 'Показати ще 51',
      },
    ],
  },
  {
    title: 'БІЛЬШЕ З YOUTUBE',
    menu: [
      {
        icon: YoutubeOutlined,
        title: 'YouTube Premium',
      },
      {
        icon: FlagOutlined,
        title: 'Фільми YouTube',
      },
      {
        icon: CommentOutlined,
        title: 'Ігри',
      },
      {
        icon: CommentOutlined,
        title: 'Прямі трансляції',
      },
    ],
  },
  {
    title: null,
    menu: [
      {
        icon: YoutubeOutlined,
        title: 'Налаштування',
      },
      {
        icon: FlagOutlined,
        title: 'Історія скарг',
      },
      {
        icon: CommentOutlined,
        title: 'Довідка',
      },
      {
        icon: CommentOutlined,
        title: 'Надіслати відгук',
      },
    ],
  },
]
