import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'


const nav: ThemeConfig['nav'] = [
  {
    text: '导图',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '辩证唯物论', link: '/drive/Dialectics' },
      { text: '化学', link: '/drive/customers'},
      { text: '常用公式', link: '/drive/one' },
      { text: '词义辨析', link: '/drive/meet' },
      { text: '概率问题', link: '/drive/chat' },
      { text: '工程问题', link: '/drive/1' },
      { text: '和差倍比', link: '/drive/2' },
      { text: '几何问题', link: '/drive/3' },
      { text: '类比推理', link: '/drive/4' },
      { text: '利润问题', link: '/drive/5' },
      { text: '认识论', link: '/drive/6' },
      { text: '生物', link: '/drive/7' },
      { text: '数字推理', link: '/drive/8' },
      { text: '图形推理', link: '/drive/9' },
      { text: '唯物辩证法', link: '/drive/10' },
      { text: '物理', link: '/drive/11' },
      { text: '行程问题', link: '/drive/12' },
      { text: '哲学', link: '/drive/13' },
      { text: '资料分析', link: '/drive/14' },
      { text: '面试', link: '/drive/15' },
      { text: '申论', link: '/drive/16' },
      { text: '反不正当竞争法', link: '/drive/17' },
      { text: '婚姻法', link: '/drive/18' },
      { text: '监察法', link: '/drive/19' },
      { text: '民法', link: '/drive/20' },
      { text: '宪法', link: '/drive/21' },
      { text: '新公务员法', link: '/drive/22' },
      { text: '刑法', link: '/drive/23' },
      { text: '行政法', link: '/drive/24' },
      { text: '大气降水和洋流运动', link: '/drive/25' },
      { text: '地表塑造', link: '/drive/26' },
      { text: '地球运动', link: '/drive/27' },
      { text: '气候类型', link: '/drive/28' },
      { text: '世界地理', link: '/drive/29' },
      { text: '天体运行', link: '/drive/30' },
      { text: '中国地理', link: '/drive/31' },
      { text: '常考的经济学名词', link: '/drive/32' },
      { text: '国际组织', link: '/drive/33' },
      { text: '宏观调控', link: '/drive/34' },
      { text: '货币的相关知识', link: '/drive/35' },
      { text: '航天史及古代天文历法', link: '/drive/36' },
      { text: '生活常识', link: '/drive/37' },
      { text: '生物常识', link: '/drive/38' },
      { text: '物理常识', link: '/drive/39' },
      { text: '民族节日及文化习俗', link: '/drive/40' },
      { text: '四大文明古国及主要成就', link: '/drive/41' },
      { text: '音乐与戏曲', link: '/drive/42' },
      { text: '中国的帝王将相', link: '/drive/43' },
      { text: '中国的古代制度', link: '/drive/44' },
      { text: '中国古代建筑及园林', link: '/drive/45' },
      { text: '中国古代重要战争', link: '/drive/46' },
      { text: '中国古典诗词', link: '/drive/47' },
      { text: '中国古典文曲', link: '/drive/48' },
      { text: '中国绘画艺术', link: '/drive/49' },
      { text: '中国近现代战争', link: '/drive/50' },
      { text: '中国历史事件排序', link: '/drive/51' },
      { text: '中国书法艺术', link: '/drive/52' },
      { text: '中医常识', link: '/drive/53' },
      { text: '诸子百家', link: '/drive/54' },
      { text: '党史回顾', link: '/drive/55' },
      { text: '马克思主义哲学', link: '/drive/56' },
      { text: '定义判断', link: '/drive/57' },
      { text: '类比推理2', link: '/drive/58' },
      { text: '逻辑判断', link: '/drive/59' },
      { text: '图形推理', link: '/drive/60' },
      { text: '数量关系', link: '/drive/61' },
      { text: '逻辑填空', link: '/drive/62' },
      { text: '语句表达', link: '/drive/63' },
      { text: '阅读理解', link: '/drive/64' },
      { text: '资料分析2', link: '/drive/65' },
    ]
  },
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '指南', link: '/guide/introduction' },
      { text: '项目必看', link: '/guide/quick-start' },
      // { text: 'Style Guide', link: '/style-guide/' },
      { text: '考试云盘', link: '/glossary/' },
      { text: '相关资料', link: '/error-reference/' },
      { text: '加密货币', link: '/drive/team' },
      {
        text: '434.com',
        link: 'https://www.434x.com'
      }
    ]
  },
  {
    text: '问题',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: '攻略',
    activeMatch: `^/rclone/`,
    link: '/rclone/'
  },
  {
    text: '答题',
    activeMatch: `^/flutter/`,
    link: '/flutter/'
  },
  {
    text: '环境',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: '配置',
        items: [
          { text: '加密货币', link: '/drive/team' },
          { text: '合作伙伴', link: '/partners/' },
          { text: '543x.com', link: 'https://a.543x.com' },
        ]
      },
    ]
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    items: [
      { text: '答题', link: '/about/faq' },
      { text: '团队', link: '/about/team' },
    ]
  },
  {
    text: '展示',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '现在开始',
      items: [
        { text: '网站介绍', link: '/guide/introduction' },
        {
          text: '快速开始',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: '体制问答',
      items: [
        {
          text: '工作环境',
          link: '/guide/material/building-from-source'
        },
        {
          text: '工作内容',
          link: '/guide/material/catalog-app'
        },
        {
          text: '公考是什么',
          link: '/guide/material/contributing'
        },
        {
          text: '公考资源分享',
          link: '/guide/material/directorystructure'
        },
        {
          text: '核心竞争力',
          link: '/guide/material/getting-started'
        },
        {
          text: '晋升路径',
          link: '/guide/material/theming'
        },
        {
          text: '人际关系',
          link: '/guide/material/using-snapshot-version'
        },
        {
          text: '项目愿景',
          link: '/guide/material/CanonicalLayouts'
        },
        {
          text: '薪资待遇',
          link: '/guide/material/PredictiveBack'
        },
        {
          text: '怎么高效准备',
          link: '/guide/material/Predictive'
        }
      ]
    },
    {
      text: '问题多多',
      items: [
        {
          text: '大家偷偷的备考不好么？已经够卷了',
          link: '/guide/theming/Color'
        },
        {
          text: '公考真实的难度到底怎么样？',
          link: '/guide/theming/Dark'
        },
        {
          text: '体制内的薪资待遇好吗？',
          link: '/guide/theming/Motion'
        },
        {
          text: '忘记打准考证、准考证掉了、忘带了，怎么办',
          link: '/guide/theming/Shape'
        },
        {
          text: '为什么参加公考？进入体制内意义何在？',
          link: '/guide/theming/Typography'
        },
        {
          text: '我参加公考好几年了，还没有上岸，心态快崩了',
          link: '/guide/theming/Typog'
        }
      ]
    },
     {
      text: '说明手册',
      items: [
        {
          text: 'D2G项目21年12月24日会议纪要',
          link: '/guide/components/async'
        },
        {
          text: '编制概述：行政编、事业编、参公事业编、三支一扶、人事代理、公益岗位等',
          link: '/guide/components/attrs'
        },
        {
          text: '程序员其实挺适合进体制内的',
          link: '/guide/components/BadgeDrawable'
        },
        {
          text: '公考概述、思想建设以及物质准备',
          link: '/guide/components/Banner'
        },
        {
          text: '公务员工资福利待遇组成',
          link: '/guide/components/BottomAppBar'
        },
        {
          text: '关于公考和 G2D项目一些想说的',
          link: '/guide/components/BottomNavigation'
        },
        {
          text: '考察的最佳实践、注意事项',
          link: '/guide/components/BottomSheet'
        },
        {
          text: '明明相爱，为什么分开',
          link: '/guide/components/Button'
        },
        {
          text: '上岸整套流程概述',
          link: '/guide/components/Card'
        },
        {
          text: '申论知识模块清单',
          link: '/guide/components/Carousel'
        },
        {
          text: '体检的最佳实践、注意事项',
          link: '/guide/components/Checkbox'
        },
        {
          text: '体能的最佳手册（针对公安等需要体侧岗位）、注意事项',
          link: '/guide/components/Chip'
        },
        {
          text: '体制对普通女孩是真的不错',
          link: '/guide/components/DataTable'
        },
        {
          text: '体制内工作需要跪舔领导么？',
          link: '/guide/components/DatePicker'
        },
        {
          text: '体制内情况概述',
          link: '/guide/components/Dialog'
        },
        {
          text: '体制内是否能够做副业',
          link: '/guide/components/Divider'
        },
        {
          text: '行测知识模块清单',
          link: '/guide/components/events'
        },
        {
          text: '招考岗位解读',
          link: '/guide/components/FloatingActionButton'
        },
        {
          text: '政审的最佳实践、注意事项',
          link: '/guide/components/ImageList'
        },
        {
          text: '指南',
          link: '/guide/components/List'
        }
      ]
    },
  ],
  '/api/': [

    {
      text: '上岸难度',
      items: [
        {
          text: '公考是选择上岸难度较小的乡镇？还是继续考自己心仪的岗位？',
          link: '/api/theming/color'
        },
        {
          text: '是一毕业就进体制内，还是先工作？',
          link: '/api/theming/intro'
        },
        {
          text: '行测碰到瓶颈（卡在 65 分左右、某一模块迟迟得不到提高），怎么办？',
          link: '/api/theming/quick-start'
        },
        {
          text: '体制内脱单手册 ',
          link: '/api/theming/README'
        },
        {
          text: '是一毕业就进体制内，还是先工作',
          link: '/api/theming/roadmap'
        },
        {
          text: '在职人员，怎么平衡工作与备考？',
          link: '/api/theming/shape'
        },
        {
          text: '体制内人员如何参与此项目？',
          link: '/api/theming/size'
        },
        {
          text: '备考人员如何参与项目？',
          link: '/api/theming/support'
        },
        {
          text: '如何保证内容的真实可靠性？',
          link: '/api/theming/typography'
        }
      ]
    },

  ],
'/rclone/': [
    {
      text: '更新进度',
      items: [
        {
          text: '更新进度为什么这么慢？',
          link: '/rclone/commands/rclone'
        },
        {
          text: 'D2G 项目的初心以及真实目的',
          link: '/rclone/commands/rclone_about'
        },
        {
          text: '如何分享培训机构课程？收费吗？是最新的吗？',
          link: '/rclone/commands/rclone_authorize'
        },
        {
          text: '常识',
          link: '/rclone/commands/rclone_backend'
        },
        {
          text: '地理自然',
          link: '/rclone/commands/rclone_bisync'
        },
        {
          text: '福建省情',
          link: '/rclone/commands/rclone_cat'
        },
        {
          text: '高新科技',
          link: '/rclone/commands/rclone_check'
        },
        {
          text: '公文',
          link: '/rclone/commands/rclone_checksum'
        },
        {
          text: '国情概况',
          link: '/rclone/commands/rclone_cleanup'
        },
        {
          text: '理科常识',
          link: '/rclone/commands/rclone_completion_bash'
        },
        {
          text: '人文历史',
          link: '/rclone/commands/rclone_completion_fish'
        },
        {
          text: '世界常识',
          link: '/rclone/commands/rclone_completion_powershell'
        },
        {
          text: '政治哲学',
          link: '/rclone/commands/rclone_completion_zsh'
        },
        {
          text: '考试题型',
          link: '/rclone/commands/rclone_completion'
        },
        {
          text: '网站汇总',
          link: '/rclone/commands/rclone_config_create'
        },
        {
          text: '薪资计算',
          link: '/rclone/commands/rclone_config_delete'
        },
        {
          text: '信息整理',
          link: '/rclone/commands/rclone_config_disconnect'
        },
        {
          text: '定义判断',
          link: '/rclone/commands/rclone_config_dump'
        },
        {
          text: '类比推理',
          link: '/rclone/commands/rclone_config_edit'
        },
        {
          text: '事件排序',
          link: '/rclone/commands/rclone_config_encryption'
        },
        {
          text: '图形推理',
          link: '/rclone/commands/rclone_config_encryption_check'
        },
        {
          text: '数学运算',
          link: '/rclone/commands/rclone_config_encryption_remove'
        },
        {
          text: '数字推理',
          link: '/rclone/commands/rclone_config_encryption_set'
        },
        {
          text: '词汇积累',
          link: '/rclone/commands/rclone_config_file'
        },
        {
          text: '词义辨析',
          link: '/rclone/commands/rclone_config_password'
        },
        {
          text: '语法语用',
          link: '/rclone/commands/rclone_config_paths'
        },
        {
          text: '语句连贯',
          link: '/rclone/commands/rclone_config_providers'
        },
        {
          text: '法学大类',
          link: '/rclone/commands/rclone_config_reconnect'
        },
        {
          text: '教育学大类',
          link: '/rclone/commands/rclone_config_redacted'
        },
        {
          text: '经济学、管理学大类',
          link: '/rclone/commands/rclone_config_show'
        },
        {
          text: '理科、工学、医科大类',
          link: '/rclone/commands/rclone_config_touch'
        },
        {
          text: '农学大类',
          link: '/rclone/commands/rclone_config_update'
        },
        {
          text: '使用指南',
          link: '/rclone/commands/rclone_config_userinfo'
        },
        {
          text: '哲学、文学、历史学大类',
          link: '/rclone/commands/rclone_copy'
        },
                {
          text: '资料分析',
          link: '/rclone/commands/rclone_copyto'
        },
        {
          text: '程序员考公指南',
          link: '/rclone/commands/rclone_copyurl'
        },
        {
          text: '基本认识',
          link: '/rclone/commands/rclone_cryptcheck'
        },
        {
          text: '上岸经历',
          link: '/rclone/commands/rclone_cryptdecode'
        },
        {
          text: '相关',
          link: '/rclone/commands/rclone_dedupe'
        },
        {
          text: '遇到问题',
          link: '/rclone/commands/rclone_delete'
        },
        {
          text: '最佳实践',
          link: '/rclone/commands/rclone_deletefile'
        },
                {
          text: '申论',
          link: '/rclone/commands/rclone_gendocs'
        },
        {
          text: '推理判断',
          link: '/rclone/commands/rclone_gitannex'
        },        {
          text: '言语',
          link: '/rclone/commands/rclone_hashsum'
        },

        {
          text: '资料分析',
          link: '/rclone/commands/rclone_link'
        },
        {
          text: '时间&职位',
          link: '/rclone/commands/rclone_listremotes'
        },

        {
          text: '复盘',
          link: '/rclone/commands/rclone_ls'
        },
        {
          text: '备考复盘',
          link: '/rclone/commands/rclone_lsd'
        },
        {
          text: '定义判断',
          link: '/rclone/commands/rclone_lsf'
        },
        {
          text: '类比推理',
          link: '/rclone/commands/rclone_lsjson'
        },
        {
          text: '加强削弱',
          link: '/rclone/commands/rclone_lsl'
        },
        {
          text: '逻辑判断',
          link: '/rclone/commands/rclone_md5sum'
        },
        {
          text: '事件排序',
          link: '/rclone/commands/rclone_mkdir'
        },
        {
          text: '图形推理',
          link: '/rclone/commands/rclone_mount'
        },
        {
          text: '真假推理',
          link: '/rclone/commands/rclone_move'
        },
        {
          text: '判断推理',
          link: '/rclone/commands/rclone_moveto'
        },
        {
          text: '言语理解',
          link: '/rclone/commands/rclone_ncdu'
        },
        {
          text: '资料分析',
          link: '/rclone/commands/rclone_nfsmount'
        },
        {
          text: '除法',
          link: '/rclone/commands/rclone_obscure'
        },
        {
          text: '乘法',
          link: '/rclone/commands/rclone_purge'
        },
        {
          text: '分数比较',
          link: '/rclone/commands/rclone_rc'
        },
        {
          text: '事业编',
          link: '/rclone/commands/rclone_rcat'
        },
        {
          text: '准备&时间',
          link: '/rclone/commands/rclone_rcd'
        },
        {
          text: '最全事业编',
          link: '/rclone/commands/rclone_rmdir'
        },
        {
          text: '申论练笔',
          link: '/rclone/commands/rclone_rmdirs'
        },
        {
          text: '速算技巧',
          link: '/rclone/commands/rclone_selfupdate'
        },
        {
          text: '1.社会问题的原因',
          link: '/rclone/commands/rclone_serve'
        },

        {
          text: '2.基层治理话题',
          link: '/rclone/commands/rclone_serve_dlna'
        },
        {
          text: '3.文化话题',
          link: '/rclone/commands/rclone_serve_docker'
        },
        {
          text: '4.就业话题',
          link: '/rclone/commands/rclone_serve_ftp'
        },

        {
          text: '5.教育话题',
          link: '/rclone/commands/rclone_serve_http'
        },
        {
          text: '6.生态文明话题',
          link: '/rclone/commands/rclone_serve_nfs'
        },
        {
          text: '7.旅游话题',
          link: '/rclone/commands/rclone_serve_restic'
        },
        {
          text: '8.互联网话题',
          link: '/rclone/commands/rclone_serve_s3'
        },
        {
          text: '9.职业教育话题',
          link: '/rclone/commands/rclone_serve_sftp'
        },
        {
          text: '10农民工维权',
          link: '/rclone/commands/rclone_serve_webdav'
        },

        {
          text: '11.调研话题',
          link: '/rclone/commands/rclone_settier'
        },
        {
          text: '12.消费话题',
          link: '/rclone/commands/rclone_sha1sum'
        },
        {
          text: '13.养老话题',
          link: '/rclone/commands/rclone_size'
        },
        {
          text: '14.生育话题',
          link: '/rclone/commands/rclone_sync'
        },
        {
          text: '15.乡村振兴话题',
          link: '/rclone/commands/rclone_test'
        },

        {
          text: '16.高质量发展话题',
          link: '/rclone/commands/rclone_test_changenotify'
        },
        {
          text: '17.组织话题',
          link: '/rclone/commands/rclone_test_histogram'
        },
        {
          text: '18.民生实事',
          link: '/rclone/commands/rclone_test_makefile'
        }
      ]
    },
    {
      text: '关于考公',
      items: [
        {
          text: '0.自由讨论',
          link: '/rclone/oracleobject/onedrive'
        },
        {
          text: '1.关于人才',
          link: '/rclone/oracleobject/opendrive'
        },
        {
          text: '02关于影响',
          link: '/rclone/oracleobject/overview'
        },
        {
          text: '2.关于资金',
          link: '/rclone/oracleobject/pcloud'
        },
        {
          text: '3.关于党建',
          link: '/rclone/oracleobject/pikpak'
        },
        {
          text: '4.关于制度',
          link: '/rclone/oracleobject/pixeldrain'
        },
        {
          text: '5.关于监督管理',
          link: '/rclone/oracleobject/premiumizeme'
        },
        {
          text: '6.关于宣传',
          link: '/rclone/oracleobject/privacy'
        },
        {
          text: '7.关于创新',
          link: '/rclone/oracleobject/protondrive'
        },
        {
          text: '8.关于基础设施',
          link: '/rclone/oracleobject/putio'
        },
        {
          text: '9.关于处罚',
          link: '/rclone/oracleobject/qingstor'
        },

        {
          text: '常识错题积累',
          link: '/rclone/oracleobject/release_signing'
        },
        {
          text: '行测判断',
          link: '/rclone/oracleobject/remote_setup'
        },
        {
          text: '行测笔记',
          link: '/rclone/oracleobject/s3'
        },
        {
          text: '逻辑填空',
          link: '/rclone/oracleobject/seafile'
        },
        {
          text: '唐诗',
          link: '/rclone/oracleobject/sftp'
        },
        {
          text: '中心理解题',
          link: '/rclone/oracleobject/sia'
        },
        {
          text: '为什么考公？',
          link: '/rclone/oracleobject/smb'
        },
        {
          text: '学习推荐',
          link: '/rclone/oracleobject/sponsor'
        },
        {
          text: '常见题型',
          link: '/rclone/oracleobject/storj'
        },
        {
          text: '类比推理',
          link: '/rclone/oracleobject/swift'
        },
        {
          text: '逻辑判断',
          link: '/rclone/oracleobject/tutorial_mount'
        },
        {
          text: '数量关系',
          link: '/rclone/oracleobject/union'
        },
        {
          text: '逻辑填空',
          link: '/rclone/oracleobject/uptobox'
        },
        {
          text: '语句表达',
          link: '/rclone/oracleobject/webdav'
        },
        {
          text: '阅读理解',
          link: '/rclone/oracleobject/yandex'
        },
        {
          text: '资料分析',
          link: '/rclone/oracleobject/zoho'
        }
      ]
    },
    {
      text: '资料分析',
      items: [
        {
          text: '类型逻辑推理',
          link: '/rclone/storage/alias'
        },
        {
          text: '数据结构',
          link: '/rclone/storage/amazonclouddrive'
        },
        {
          text: '算法',
          link: '/rclone/storage/azureblob'
        },

        {
          text: '英语',
          link: '/rclone/storage/b2'
        },
        {
          text: '金手指职场学院_笔记',
          link: '/rclone/storage/bisync'
        },
        {
          text: '程序员面试知识索引_进度追踪',
          link: '/rclone/storage/box'
        },
        {
          text: '公务员考试索引_进度追踪',
          link: '/rclone/storage/bugs'
        },


        {
          text: '喜哥行测进度追踪',
          link: '/rclone/storage/chunker'
        },
        {
          text: '程序员面试知识索引',
          link: '/rclone/storage/combine'
        },

        {
          text: '公务员考试索引',
          link: '/rclone/storage/compress'
        },
        {
          text: '金手指职场学院_知识索引',
          link: '/rclone/storage/contact'
        },
        {
          text: '了解全国两会',
          link: '/rclone/storage/crypt'
        },
        {
          text: '我国的政治制度',
          link: '/rclone/storage/docker'
        },
        {
          text: '投身大革命的洪流',
          link: '/rclone/storage/docs'
        },

        {
          text: '掀起土地改革的风暴',
          link: '/rclone/storage/drive'
        },
        {
          text: '全民族抗日战争的中流砥柱',
          link: '/rclone/storage/dropbox'
        },
        {
          text: '0.简介',
          link: '/rclone/storage/faq'
        },
        {
          text: '中国共产党的创建',
          link: '/rclone/storage/fichier'
        },
        {
          text: '掀起土地改革的风暴',
          link: '/rclone/storage/filefabric'
        },
        {
          text: '全民族抗日战争的中流砥柱',
          link: '/rclone/storage/filescom'
        },

        {
          text: '夺取新民主主义革命的全国性胜利',
          link: '/rclone/storage/flags'
        },
        {
          text: '为什么西方讨厌共产主义？',
          link: '/rclone/storage/ftp'
        },
        {
          text: '全球可持续发展的联合声明',
          link: '/rclone/storage/gofile'
        },
        {
          text: '阅读积累',
          link: '/rclone/storage/googlecloudstorage'
        },
        {
          text: '语言组织套路',
          link: '/rclone/storage/googlephotos'
        },
        {
          text: '时政',
          link: '/rclone/storage/gui'
        },
        {
          text: '申论',
          link: '/rclone/storage/hasher'
        },
        {
          text: '词汇积累-1',
          link: '/rclone/storage/hdfs'
        },
        {
          text: '词汇积累-2',
          link: '/rclone/storage/hidrive'
        },
        {
          text: '佳句积累',
          link: '/rclone/storage/http'
        },
        {
          text: '注意点',
          link: '/rclone/storage/imagekit'
        },
        {
          text: '大白的言语理解与逻辑',
          link: '/rclone/storage/jottacloud'
        },
        {
          text: '毒蛇老师的申论',
          link: '/rclone/storage/koofr'
        },
        {
          text: '毒蛇老师的申论大作文',
          link: '/rclone/storage/licence'
        },
        {
          text: '逻辑判断',
          link: '/rclone/storage/linkbox'
        },
        {
          text: '数量关系',
          link: '/rclone/storage/local'
        },
        {
          text: '言语理解与逻辑',
          link: '/rclone/storage/mailru'
        },
        {
          text: '资料分析',
          link: '/rclone/storage/mega'
        },
        {
          text: '申论',
          link: '/rclone/storage/memory'
        },
        {
          text: '数量关系',
          link: '/rclone/storage/netstorage'
        }
      ]
    },
  ],
'/flutter/': [
    {
      text: '复习',
      items: [
        {
          text: '推理判断',
          link: '/flutter/about/gdrive'
        },
        {
          text: '言语',
          link: '/flutter/about/FUSE filesystem over Google Drive'
        },
        {
          text: '资料分析',
          link: '/flutter/about/Google Apps'
        },
        {
          text: '资料术语',
          link: '/flutter/about/Unlimited Drive Storage'
        },
        {
          text: '贯策执行题',
          link: '/flutter/about/gdown'
        },
        {
          text: '归纳概括题',
          link: '/flutter/about/LLM App'
        },
        {
          text: '申论答题流程',
          link: '/flutter/about/Remotely Save'
        },
        {
          text: '申论考试常识',
          link: '/flutter/about/mirror-leech-telegram-bot'
        }
      ]
    },
    {
      text: '答题',
      items: [
        {
          text: '提出对策题',
          link: '/flutter/contributing/Grive2 0.5.3'
        },
        {
          text: '文章论述题',
          link: '/flutter/contributing/Google Drive Copy'
        },

        {
          text: '综合分析题',
          link: '/flutter/contributing/Files for Meteor.js'
        }
      ]
    },
  ],
}


export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://g.252x.com'
  },
  logo: '/images/logo.svg',
  lang: 'en-US',
  title: '公务员',
  description: 'Easy and secure access to your content',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://g.252x.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '公务员' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '公务员 - Easy and secure access to your content'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/logo.png'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@vuejs' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://f.543x.com'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/uwu.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: '公务员',
    nav,
    sidebar,


    localeLinks: [
      {
        link: 'https://g.543x.com',
        text: '简体中文',
        repo: 'https://github.com/hyaliyun/gongkao'
      },
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: '21cf9df0734770a2448a9da64a700c22',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyaliyun/gongkao/' },
    ],

    editLink: {
      repo: 'hyaliyun/gongkao',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://www.543x.com'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} gongkao`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
});
