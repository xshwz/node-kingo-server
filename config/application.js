module.exports = {
  appName: '相思青果',
  menu: {
    public: [
      {
        name: '帮助',
        items: [
          {
            label: '常见问题',
            icon: 'question-sign',
            url: '/faq',
          },
          {
            label: '反馈',
            icon: 'comment',
            url: '/feedback',
          },
          {
            label: '关于',
            icon: 'info-sign',
            url: '/about',
          },
        ],
      },
      {
        name: '其他',
        items: [
          {
            label: '微信',
            icon: 'phone',
            url: '/wechat',
          },
        ],
      },
    ],
    student: [],
    admin: [],
  },
};
