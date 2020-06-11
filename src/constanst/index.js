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
        action: () => {
          window.location = 'http://google.com'
        },
      },
      {
        icon: FireOutlined,
        title: 'Популярне',
        action: () => {
          window.location = 'http://facebook.com'
        },
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
        isBroadcasting: true,
      },
      {
        icon: YoutubeOutlined,
        title: 'Новий канал',
        isOnline: true,
      },
      {
        icon: YoutubeOutlined,
        title: 'DKA-DEVELOP',
      },
      {
        icon: YoutubeOutlined,
        title: 'Типичний вер...',
        isOnline: true,
      },
      {
        icon: YoutubeOutlined,
        title: 'Говорить україна',
        isOnline: true,
      },
      {
        icon: YoutubeOutlined,
        title: 'ICTV',
        isOnline: true,
        isBroadcasting: true,
      },
      {
        icon: YoutubeOutlined,
        title: 'Андрей Андр...',
        isOnline: true,
      },
      {
        icon: DownOutlined,
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
        icon: HeartOutlined,
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
export const VIDEOS_CONTENT = [
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 809213,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 922,
    createdAt: '25/05/2020 13:05',
    channelName: 'Egor Negoda',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 809213524,
    createdAt: '25/05/2020 13:05',
    channelName: 'NCY',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 9543,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/1AWc5OJjhpA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAzrPFdHNEtkXL_Wnwx9jA4q7N5WA',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
]
