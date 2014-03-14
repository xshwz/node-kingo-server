module.exports = {
  appName: '相思青果',
  keywords: ['相思青果', '相思湖网站', '广西民族大学', '教务系统'],
  description:
    '相思青果是由相思湖网站开发的，广西民族大学教务系统代理。' +
    '在这里，你可以不受校园网限制，方便的使用教务系统。',
  kingoUrl: 'http://ams.gxun.edu.cn/',
  menu: {
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
      }
    ]
  },
  wechat: {
    commands: [
      {
        name: '帮助',
        description: '查看帮助信息',
      },
      {
        name: '关于',
        description: '关于相思青果',
      },
      {
        name: '学籍',
        description: '查看个人学籍档案',
      },
      {
        name: '课表',
        description: '查看一周课表',
      },
      {
        name: '课程',
        description: '默认返回当天课程，可带参数，比如 <code>课程3</code> 返回星期三的课程',
      },
      {
        name: '成绩',
        description: '默认返回最近一个学期的成绩，可带参数，比如 <code>成绩1</code> 返回第一个学期的成绩',
      },
      {
        name: '等级考试',
        description: '查看等级考试成绩',
      },
      {
        name: '考试安排',
        description: '查看考试安排',
      },
      {
        name: '绑定',
        description: '与微信进行绑定',
      },
      {
        name: '取消绑定',
        description: '取消与微信的绑定，若要绑定其他学号，请先点击右上角退出登录',
      }
    ]
  }
};
