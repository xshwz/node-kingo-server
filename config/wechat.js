module.exports.wechat = {
  commands: [
    {
      name: '帮助',
      description: '查看帮助信息'
    },
    {
      name: '关于',
      description: '关于相思青果'
    },
    {
      name: '学籍',
      description: '查看个人学籍档案'
    },
    {
      name: '课表',
      description: '查看一周课表'
    },
    {
      name: '课程',
      description: '默认返回当天课程，可带参数，比如 <code>课程3</code> 返回星期三的课程'
    },
    {
      name: '成绩',
      description: '默认返回最近一个学期的成绩，可带参数，比如 <code>成绩1</code> 返回第一个学期的成绩'
    },
    {
      name: '等级考试',
      description: '查看等级考试成绩'
    },
    {
      name: '考试安排',
      description: '查看考试安排'
    },
    {
      name: '绑定',
      description: '与微信进行绑定'
    },
    {
      name: '取消绑定',
      description: '取消与微信的绑定，若要绑定其他学号，请先点击右上角退出登录'
    }
  ]
};
