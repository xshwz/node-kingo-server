module.exports.menu = {
  common: [
    {
      name: '帮助',
      items: [
        {
          label: '常见问题',
          icon: 'question-sign',
          url: 'faq'
        },
        {
          label: '反馈',
          icon: 'comment',
          url: 'feedback'
        },
        {
          label: '关于',
          icon: 'info-sign',
          url: 'about'
        }
      ]
    },
    {
      name: '其他',
      items: [
        {
          label: '微信',
          icon: 'phone',
          url: 'wechat'
        }
      ]
    }
  ],
  student: [
    {
      name: '个人',
      items: [
        {
          label: '学籍档案',
          icon: 'user',
          url: 'student/archives'
        }
      ]
    },
    {
      name: '成绩',
      items: [
        {
          label: '统计',
          icon: 'stats',
          url: 'student/scores_stats'
        },
        {
          label: '有效成绩',
          icon: 'check',
          url: 'student/effective_scores'
        },
        {
          label: '原始成绩',
          icon: 'unchecked',
          url: 'student/original_scores'
        }
      ]
    },
    {
      name: '课程',
      items: [
        {
          label: '今日课程',
          icon: 'list',
          url: 'student/today_courses'
        },
        {
          label: '课程表',
          icon: 'th',
          url: 'student/curriculum'
        }
      ]
    }
  ]
};
