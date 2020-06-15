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
    createdAt: '3 дні тому',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/JfvHa2XUUJ4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLARFSI1JCmIh0Xj2hX6YOnTdf0U9A',
    avatar: 'https://yt3.ggpht.com/a-/AOh14Gjp2i8C1rYlFUScH3QxHLfzoT3LgBfK4HKfmA=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 922,
    createdAt: '5 дні тому',
    channelName: 'Egor Negoda',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/YwWayYiz9dg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCB_7wlPhGvUjzxYygW2YGOBU7jUg',
    avatar: 'https://yt3.ggpht.com/a-/AOh14Gihl7i0cXlKsRV_aFLra3Nb1VhQ0shDol6h-A=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 8005,
    createdAt: '1 тиждень тому',
    channelName: 'NCY',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/z2mixZ6E1JQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4ZfK6VsngbAFcp1lcBWH3rM9-Jw',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GiuPY7VpzXx-w82HyF8cTfxSnbT3GkytoTArQ=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 9543,
    createdAt: '5 місяців тому',
    channelName: 'Українська правда',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/nMm2g6TOdr8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB6J5pR3Es8x8OaXGbDASTImZ0enQ',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '5 місяців тому',
    channelName: 'WebDeV',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/hCghOJBJZnQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDA_KhHTQb5LSxHCdbo1ltituyz7w',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '8 місяців тому',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/H8XZ-Es4MlU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCZZom_9wYxyIHvhRu4l8t4Q9Wp7g',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '10 місяців тому',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/vkI4LaX1ip8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAVj7iOSjH2GA2uyL97Vj66ZLQX0w',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '5 тижнів тому',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/JfvHa2XUUJ4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLARFSI1JCmIh0Xj2hX6YOnTdf0U9A',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/NVxrvtepXfg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDXp7SMBSmmAPVZa_v_FkTQ1imB5A',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: 'ХОЛОСТЯК-10. МАКС МИХАЙЛЮК. Первое интервью после проекта. Сценарий на шоу, первая любовь, Даша.',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/5Ir_XXKKEbI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAZJo6QjfmtobckMaXPa6mfdBnpEg',
    avatar: 'https://yt3.ggpht.com/a-/AOh14GhjBEVKZnvnp5_pLy_Uv8OYwk-7zFVKyQ21Zg=s68-c-k-c0x00ffffff-no-rj-mo',
    title: '25 невероятных фактов о съемках Гарри Поттера',
    numberOfViews: 17098,
    createdAt: '25/05/2020 13:05',
    channelName: 'Новий канал',
    videoDuration: '50:12',
  },
  {
    videoPreview:
      'https://i.ytimg.com/vi/H79B2_VwlmQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC-k7ddY-E2pF8LsqL4454vqfTypA',
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
