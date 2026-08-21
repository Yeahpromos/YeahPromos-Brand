const LOCALE_STORAGE_KEY = 'yeahpromos-demo1-locale';
const CHINESE_LOCALE = 'zh-CN';

const translations = {
  'shell.primaryNavigation': '主导航',
  'shell.merchantWorkspace': '商家工作台',
  'page.overview.title': '业务概览',
  'page.overview.description': '查看联盟计划表现与合作伙伴动态。',
  'document.title': '业务概览 · YeahPromos',
  'document.description': 'YeahPromos 商家经营概览演示',
};

const navigationTranslations = {
  overview: '概览',
  'recruitment-partners': '招募与合作伙伴',
  'discover-influencers': '发现影响者',
  'discover-publishers': '发现发布者',
  'my-partners': '我的合作伙伴',
  applications: '申请',
  'invite-history': '邀请记录',
  campaigns: '活动',
  'all-campaigns': '全部活动',
  'affiliate-programs': '联盟计划',
  'influencer-campaigns': '影响者活动',
  'products-assets': '商品与素材',
  'product-feed': '商品数据源',
  coupons: '优惠券',
  'banners-images': '横幅与图片',
  videos: '视频',
  'commission-rules': '佣金与规则',
  'commission-rules-list': '佣金规则',
  'attribution-rules': '归因规则',
  'restriction-rules': '限制规则',
  ppc: 'PPC',
  'data-transactions': '数据与交易',
  performance: '表现',
  'performance-brand': '按品牌查看表现',
  transactions: '交易',
  'amazon-brb': 'Amazon BRB',
  finance: '财务',
  'balance-payments': '余额与付款',
  'transaction-history': '交易记录',
  payouts: '付款',
  invoices: '发票',
  'payment-methods': '付款方式',
  'messages-notifications': '消息与通知',
  'all-messages': '全部消息',
  'partner-messages': '合作伙伴消息',
  'system-alerts': '系统提醒',
  archived: '已归档',
  settings: '集成与设置',
  'team-accounts': '团队账户',
  permissions: '权限',
  'recruitment-page': '招募页面',
  'brand-integration': '品牌集成',
  'api-credentials': 'API 凭证',
  'help-center': '帮助中心',
};

const textTranslations = new Map(Object.entries({
  'Merchant workspace': '商家工作台',
  'Business overview': '业务概览',
  'Track performance, partner growth, and revenue across your affiliate programs.': '跟踪联盟计划中的表现、合作伙伴增长和收入。',
  'Monitor your affiliate program performance and partner activity.': '查看联盟计划表现与合作伙伴动态。',
  'Scope: All partners and campaigns': '范围：所有合作伙伴和活动',
  'Help center': '帮助中心',
  Settings: '设置',
  Messages: '消息',
  Notifications: '通知',
  'Download center': '下载中心',
  'Demo state': '演示状态',
  'Normal data': '正常数据',
  'Empty state': '空数据状态',
  'Load error': '加载错误',
  'Permission limited': '权限受限',
  Syncing: '同步中',
  Overview: '概览',
  'Recruitment & Partners': '招募与合作伙伴',
  'Discover influencers': '发现影响者',
  'Discover publishers': '发现发布者',
  'My partners': '我的合作伙伴',
  Applications: '申请',
  'Invite history': '邀请记录',
  Campaigns: '活动',
  'All campaigns': '全部活动',
  'Affiliate programs': '联盟计划',
  'Influencer campaigns': '影响者活动',
  'Products & Assets': '商品与素材',
  'Product feed': '商品数据源',
  Coupons: '优惠券',
  'Banners & images': '横幅与图片',
  Videos: '视频',
  'Commission & Rules': '佣金与规则',
  'Commission rules': '佣金规则',
  'Attribution rules': '归因规则',
  'Restriction rules': '限制规则',
  'Data & Transactions': '数据与交易',
  Performance: '表现',
  'Performance by brand': '按品牌查看表现',
  Transactions: '交易',
  Finance: '财务',
  'Balance & payments': '余额与付款',
  'Transaction history': '交易记录',
  Payouts: '付款',
  Invoices: '发票',
  'Payment methods': '付款方式',
  'Messages & Notifications': '消息与通知',
  'All Messages': '全部消息',
  'Partner Messages': '合作伙伴消息',
  'System Alerts': '系统提醒',
  Archived: '已归档',
  'Integrations & Settings': '集成与设置',
  'Team accounts': '团队账户',
  Permissions: '权限',
  'Recruitment page': '招募页面',
  'Brand integration': '品牌集成',
  'API credentials': 'API 凭证',
  Clicks: '点击量',
  Orders: '订单量',
  'Gross sales': '销售总额',
  'Net sales': '净销售额',
  Commission: '佣金',
  Conversion: '转化率',
  'Total payout': '总支出',
  'Pending payout': '待付款项',
  'vs previous period': '较上一周期',
  'vs Apr 28 – May 04': '较 4 月 28 日-5 月 4 日',
  'completed orders': '已完成订单',
  'before adjustments': '调整前',
  'after returns & voids': '扣除退货和作废后',
  'approved this period': '本周期已批准',
  'click-to-order rate': '点击到下单转化率',
  'commission + fees': '佣金加服务费',
  'Performance tracking': '表现跟踪',
  'Performance overview': '表现概览',
  Daily: '每日',
  Weekly: '每周',
  Monthly: '每月',
  'Partner performance': '合作伙伴表现',
  'Top performing partners': '表现最佳的合作伙伴',
  'View all': '查看全部',
  Rank: '排名',
  Partner: '合作伙伴',
  Conversions: '转化次数',
  'Settlement snapshot': '结算快照',
  'Commission summary': '佣金汇总',
  Approved: '已批准',
  'Pending approval': '待批准',
  'Total paid': '已付总额',
  'Total commission': '佣金总额',
  'Payouts this period': '本周期付款',
  Pending: '待处理',
  Declined: '已拒绝',
  'Partner status': '合作伙伴状态',
  'In relationship': '已建立合作关系',
  'New partners': '新增合作伙伴',
  'Pending review': '待审核',
  'Partner relationship': '合作伙伴关系',
  'Active partners': '活跃合作伙伴',
  'Applications pending': '待处理申请',
  'Invitations sent': '已发邀请',
  'Action center': '操作中心',
  '2 tasks': '2 项任务',
  '18 new partner applications': '18 个新的合作伙伴申请',
  'Review and respond to new applications.': '审核并回复新的申请。',
  'Open 18 new partner applications': '打开 18 个新的合作伙伴申请',
  '3 campaigns nearing budget limit': '3 个活动即将达到预算上限',
  'Review and adjust campaign budgets.': '审核并调整活动预算。',
  'Open 3 campaigns nearing budget limit': '打开 3 个即将达到预算上限的活动',
  'Shortcuts': '快捷操作',
  'Invite partners': '邀请合作伙伴',
  'Invite partner': '邀请合作伙伴',
  'Create campaign': '创建活动',
  'Add product': '添加商品',
  'Add coupon': '添加优惠券',
  'Export report': '导出报告',
  'Select a period': '选择周期',
  'Last 7 days': '最近 7 天',
  'Last 30 days': '最近 30 天',
  'Last 90 days': '最近 90 天',
  'May 05 – May 12, 2025': '2025 年 5 月 05 日-5 月 12 日',
  'Apr 28 – May 04': '4 月 28 日-5 月 4 日',
  'No data': '暂无数据',
  'No activity in this range': '该时间范围内暂无活动',
  'No partner performance yet': '暂无合作伙伴表现',
  'Partner results will appear after tracked orders are recorded.': '记录跟踪订单后将显示合作伙伴表现。',
  'Demo Admin': '演示管理员',
  'Demo Admin · Demo Store': '演示管理员 / 演示店铺',
  Reports: '报表',
  'YeahPromos Merchant Workspace': 'YeahPromos 商家工作台',
  'Framework demo · 2026': '框架演示 2026',
}));

const attributeTranslations = new Map(Object.entries({
  'Primary navigation': '主导航',
  'Workspace utilities': '工作区工具',
  'Open help center': '打开帮助中心',
  'Open workspace settings': '打开工作区设置',
  'Open account menu': '打开账户菜单',
  Messages: '消息',
  Notifications: '通知',
  'Download center': '下载中心',
  'Choose demo state': '选择演示状态',
  'Collapse sidebar': '收起侧边栏',
  'Open menu': '打开菜单',
  'Close menu': '关闭菜单',
  Breadcrumb: '面包屑导航',
  'Key performance metrics': '关键绩效指标',
  'Performance and partner insights': '表现与合作伙伴洞察',
  'Performance metric': '表现指标',
  'Chart interval': '图表间隔',
  'Performance trend chart': '表现趋势图',
  'Commission, partner status and action center': '佣金、合作伙伴状态与操作中心',
  'Dismiss partner details overlay': '关闭合作伙伴详情浮层',
}));

const phraseTranslations = new Map(Object.entries({
  'Skip to main content': '跳转到主要内容',
  'Followed': '已关注',
  'Invited': '已邀请',
  'Joined': '已加入',
  'Sent': '已发送',
  'Accepted': '已接受',
  'Expired': '已过期',
  'All': '全部',
  'Allow': '允许',
  'All matches': '全部匹配',
  'All status': '全部状态',
  'All statuses': '全部状态',
  'All channels': '全部渠道',
  'All methods': '全部方式',
  'All owners': '全部负责人',
  'All partners': '所有合作伙伴',
  'All platforms': '全部平台',
  'All products': '全部商品',
  'All types': '全部类型',
  'All categories': '全部分类',
  'All countries': '全部国家/地区',
  'All assets': '全部素材',
  'All folders': '全部文件夹',
  'All brands': '全部品牌',
  'All regions': '全部地区',
  'All policies': '全部政策',
  'Any budget': '任意预算',
  'Active': '进行中',
  'Paused': '已暂停',
  'Draft': '草稿',
  'Completed': '已完成',
  'Closed': '已关闭',
  'Live': '进行中',
  'Upcoming': '即将开始',
  'Awaiting approval': '等待审批',
  'Under review': '审核中',
  'Declined': '已拒绝',
  'Failed': '失败',
  'In use': '使用中',
  'Inactive': '未启用',
  'Scheduled': '已排期',
  'Active programs': '进行中的计划',
  'Active campaigns': '进行中的活动',
  'Active rules': '生效规则',
  'Active restrictions': '生效限制',
  'Active model': '当前模型',
  'Active model summary': '当前模型摘要',
  'All selected (3)': '已全选（3）',
  'All selected (4)': '已全选（4）',
  'All selected (7)': '已全选（7）',
  'New applications': '新申请',
  'Blocked': '已屏蔽',
  'Sync partners': '同步合作伙伴',
  'Relationship workspace': '合作关系工作区',
  'Recommended': '推荐',
  'Name': '名称',
  'Category': '分类',
  'Budget': '预算',
  'Campaign': '活动',
  'Campaign directory': '活动目录',
  'Partner group': '合作伙伴分组',
  'Promotion method': '推广方式',
  'Customer reach': '客户覆盖范围',
  'Language': '语言',
  'Message': '消息',
  'Follow': '关注',
  'Email': '邮件',
  'Referral': '推荐',
  'Platform': '平台',
  'Multi-channel': '多渠道',
  'Selected': '已选中',
  'selected': '已选中',
  'Saved view': '已保存视图',
  'My campaigns': '我的活动',
  'Click-throughs': '点击量',
  'Sales': '销售额',
  'Co-op': '合作推广',
  'MDF': '市场开发基金',
  'Event': '事件',
  'Enablement': '赋能',
  'Affiliate': '联盟',
  'On track': '进展正常',
  'Stage': '阶段',
  'Progress': '进度',
  'Next action': '下一步操作',
  'Execution': '执行中',
  'No action required': '无需操作',
  'Creator campaigns': '创作者活动',
  'Invitation activity': '邀请动态',
  'Application queue': '申请队列',
  'Commission management': '佣金管理',
  'Creative library': '素材库',
  'Data operations': '数据操作',
  'PPC business rules': 'PPC 业务规则',
  'PPC policy management': 'PPC 政策管理',
  'Billing records': '账单记录',
  'Banners': '横幅',
  'Images': '图片',
  'Logos': 'Logo',
  'Icons': '图标',
  'GIFs': 'GIF',
  'Newest': '最新',
  'Oldest': '最早',
  'Affiliate Program': '联盟计划',
  'Attribution': '归因',
  'Conversion rate': '转化率',
  'Commission paid': '已付佣金',
  'Total partners': '合作伙伴总数',
  'Recently updated': '最近更新',
  'Most partners': '合作伙伴最多',
  'Highest commission': '佣金最高',
  'Reset': '重置',
  'Under $5,000': '低于 $5,000',
  'Over $10,000': '高于 $10,000',
  '$5,000 – $10,000': '$5,000–$10,000',
  '30-day attribution window': '30 天归因窗口',
  'Bulk approve': '批量批准',
  'Total sales': '销售总额',
  'Locked commission': '锁定佣金',
  'Estimated commission': '预计佣金',
  'This quarter': '本季度',
  'Paid': '已付款',
  'Void': '作废',
  'Sale': '销售',
  'Return': '退货',
  'Find a campaign': '查找活动',
  'Product detail views': '商品详情页浏览量',
  'Add-to-carts': '加入购物车次数',
  'Purchases': '购买次数',
  'Product sales': '商品销售额',
  'AMAZON BRAND REFERRAL': 'Amazon 品牌引荐',
  'Amazon brand referral': 'Amazon 品牌引荐',
  'Invoice date range': '发票日期范围',
  'Payment method': '付款方式',
  'Account credits': '账户余额',
  'Credit card': '信用卡',
  'Bank transfer': '银行转账',
  'Payment type': '付款类型',
  'Publisher payout': '发布者付款',
  'Price plan fee': '套餐费用',
  'Account deposit': '账户充值',
  'Details': '详情',
  'Compose Message': '撰写消息',
  'Notification preferences': '通知偏好',
  'Unread only': '仅看未读',
  'System alerts': '系统提醒',
  'Unread': '未读',
  'Conversation Info': '会话信息',
  'Conversation ID': '会话 ID',
  'Conversation': '会话',
  'Reply': '回复',
  'Select date range': '选择日期范围',
  'Year 2025': '2025 年',
  '% rate': '% 比例',
  'Click': '点击',
  'Rule name': '规则名称',
  'Scope': '范围',
  'Base commission': '基础佣金',
  'Bonus': '奖励',
  'Lookback window': '回溯窗口',
  'Search terms': '搜索词',
  'Need policy confirmation': '需要确认政策',
  'Policy': '政策',
  'Block': '屏蔽',
  'Region': '地区',
  'Paid search': '付费搜索',
  'Google Ads': 'Google Ads',
  'Select': '选择',
  'All dates': '全部日期',
  'Manage and collaborate with your partners across the entire partnership lifecycle.': '管理合作伙伴，覆盖从建立关系到持续协作的完整生命周期。',
  'Review and manage partner applications to grow your program network.': '审核并管理合作伙伴申请，拓展计划合作网络。',
  'Track and manage all partner invitations you have sent.': '跟踪并管理已发送的所有合作伙伴邀请。',
  'View, manage, and analyze all your campaigns in one place.': '在一个页面查看、管理并分析所有活动。',
  'Create and manage your affiliate programs. Invite partners and track program performance.': '创建并管理联盟计划，邀请合作伙伴并跟踪计划表现。',
  'Create, organize, and optimize the programs your partners promote.': '创建、整理并优化合作伙伴推广的计划。',
  'Plan creator partnerships, track deliverables, and keep campaign spend visible.': '规划创作者合作、跟踪交付项，并清晰掌握活动支出。',
  'Manage your creative assets and organize them into folders for easy access and use across campaigns.': '管理创意素材并整理到文件夹中，方便在各项活动中访问和使用。',
  'Review, approve, and export the transactions generated by your affiliate program.': '审核、批准并导出联盟计划产生的交易。',
  'Monitor campaign-level Amazon traffic and product activity.': '监控活动级 Amazon 流量与商品动态。',
  'Monitor Amazon brand referral performance and campaign-level product activity.': '监控 Amazon 品牌引荐表现与活动级商品动态。',
  'Review, filter, and download demo invoice records for the selected workspace.': '查看、筛选并下载当前工作区的演示发票记录。',
  'Stay connected with your partners and never miss an important update.': '与合作伙伴保持联系，不错过任何重要更新。',
  'Search': '搜索',
  'Search campaigns': '搜索活动',
  'Search programs': '搜索计划',
  'Search invoices': '搜索发票',
  'Search messages': '搜索消息',
  'Search assets by name or tag': '按名称或标签搜索素材',
  'Search order, partner or SKU': '搜索订单、合作伙伴或 SKU',
  'Search PPC rules': '搜索 PPC 规则',
  'Search restriction rules': '搜索限制规则',
  'Search rules': '搜索规则',
  'Search brands': '搜索品牌',
  'Search by name or keyword': '按名称或关键词搜索',
  'Use filters or search to narrow the partner set': '使用筛选器或搜索缩小合作伙伴范围',
  'Clear search': '清除搜索',
  'Apply search': '应用搜索',
  'Open campaign details': '打开活动详情',
  'Create affiliate program': '创建联盟计划',
  'Create rule': '创建规则',
  'Add folder': '添加文件夹',
  'Add transaction': '添加交易',
  'Upload asset': '上传素材',
  'Filter': '筛选',
  'Filters': '筛选器',
  'Filter focus': '筛选重点',
  'Filter messages': '筛选消息',
  'Filter by campaign': '按活动筛选',
  'Filter by folder': '按文件夹筛选',
  'Filter by status': '按状态筛选',
  'More filters': '更多筛选',
  'View campaign': '查看活动',
  'View': '查看',
  'View full history': '查看完整记录',
  'View model performance': '查看模型表现',
  'View partner profile': '查看合作伙伴资料',
  'Manage': '管理',
  'Review': '审核',
  'Review assets': '审核素材',
  'Edit': '编辑',
  'Delete': '删除',
  'Archive': '归档',
  'Assign': '分配',
  'Change status': '更改状态',
  'Clear selection': '清除选择',
  'Select': '选择',
  'Export': '导出',
  'Export CSV': '导出 CSV',
  'Approve': '批准',
  'Approve budget': '批准预算',
  'Decline': '拒绝',
  'Resend': '重新发送',
  'Send reply': '发送回复',
  'Save changes': '保存更改',
  'Cancel': '取消',
  'Back to overview': '返回概览',
  'Leave product feedback': '提交产品反馈',
  'Shop Now': '立即购买',
  'Show more': '显示更多',
  'Previous period': '上一周期',
  'Current period vs previous period': '本周期与上一周期对比',
  'Across all partner groups': '覆盖所有合作伙伴分组',
  'Partner programs': '合作伙伴计划',
  'Campaign performance': '活动表现',
  'Amazon BRB campaigns': 'Amazon BRB 活动',
  'Type': '类型',
  'Date': '日期',
  'Date range': '日期范围',
  'Interval': '间隔',
  'Time range': '时间范围',
  'Order status': '订单状态',
  'Transaction type': '交易类型',
  'Country': '国家/地区',
  'Brand': '品牌',
  'Partner type': '合作伙伴类型',
  'Channel': '渠道',
  'Effective date': '生效日期',
  'Owner': '负责人',
  'Sort by': '排序方式',
  'Sort by:': '排序方式：',
  'Rows': '行数',
  'Audience': '受众',
  'Audience size': '受众规模',
  'Reach': '触达人数',
  'Partners': '合作伙伴',
  'Partner group': '合作伙伴分组',
  'Profile': '资料',
  'Attachments': '附件',
  'Replies': '回复',
  'From': '发件人',
  'To': '收件人',
  'Status': '状态',
  'Actions': '操作',
  'CATEGORY': '分类',
  'PARTNER GROUP': '合作伙伴分组',
  'PARTNER TYPE': '合作伙伴类型',
  'PROMOTION METHOD': '推广方式',
  'CUSTOMER REACH': '客户覆盖范围',
  'PLATFORM': '平台',
  'LANGUAGE': '语言',
  'SEARCH': '搜索',
  'STATUS': '状态',
  'CHANNEL': '渠道',
  'BUDGET': '预算',
  'DATE': '日期',
  'ORDER': '订单',
  'BRAND / SKU': '品牌 / SKU',
  'CAMPAIGN': '活动',
  'CAMPAIGN DIRECTORY': '活动目录',
  'CREATOR CAMPAIGNS': '创作者活动',
  'PARTNER PROGRAMS': '合作伙伴计划',
  'RELATIONSHIP WORKSPACE': '合作关系工作区',
  'INVITATION ACTIVITY': '邀请动态',
  'APPLICATION QUEUE': '申请队列',
  'COMMISSION MANAGEMENT': '佣金管理',
  'CREATIVE LIBRARY': '素材库',
  'DATA OPERATIONS': '数据操作',
  'PPC BUSINESS RULES': 'PPC 业务规则',
  'PPC POLICY MANAGEMENT': 'PPC 政策管理',
  'BILLING RECORDS': '账单记录',
  'Content/Blog': '内容/博客',
  'Content / Blog': '内容 / 博客',
  'Coupon/Discount': '优惠券/折扣',
  'Deal': '优惠',
  'Social': '社交媒体',
  'Website': '网站',
  'Newsletter': '邮件简报',
  'Publisher': '发布者',
  'Influencer': '影响者',
  'English': '英语',
  'German': '德语',
  'French': '法语',
  'United States': '美国',
  'United Kingdom': '英国',
  'Canada': '加拿大',
  'Australia': '澳大利亚',
  'Germany': '德国',
  'North America': '北美洲',
  'Beauty & Personal Care': '美妆与个护',
  'Health & Fitness': '健康与健身',
  'Fashion': '时尚',
  'Tech & Electronics': '科技与电子',
  'Technology': '科技',
  'Travel': '旅行',
  'Food & Beverage': '食品与饮料',
  'Food & Drink': '食品与饮品',
  'Photography': '摄影',
  'Home & Living': '家居与生活',
  'Computer & Electronics': '电脑与电子产品',
  'Gadgets': '数码产品',
  'Other': '其他',
  'creators': '创作者',
  'deliverables': '交付项',
  'budget': '预算',
  'Budget used': '预算使用情况',
  'Campaigns': '活动',
  'campaigns': '活动',
  'partners': '合作伙伴',
  'assets': '素材',
  'messages': '消息',
  'transactions': '交易',
  'invoices': '发票',
  'orders': '订单',
  'monthly visits': '月访问量',
  'followers': '粉丝',
  'days': '天',
  'results': '结果',
  'messages': '消息',
  'invoices': '发票',
  'transactions': '交易',
  'vs previous period': '较上一周期',
  'this period': '本周期',
  'this month': '本月',
  'this week': '本周',
  'acceptance rate': '接受率',
  'attribution window': '归因窗口',
  'of total partners': '占合作伙伴总数',
  'of total': '占总数',
  'awaiting approval': '待审批',
  'added this month': '本月新增',
  'Updated': '更新于',
  'a few minutes ago': '几分钟前',
  'lookback window': '回溯窗口',
  'by': '由',

  // 动态页面完整短语：优先整句翻译，避免出现“中文 + 半句英文”。
  'View profile': '查看资料',
  'Monthly reach': '每月访问量',
  'Search influencers': '搜索影响者',
  'Influencer directory': '影响者目录',
  'Updated today': '今日更新',
  'Review applications with the same audit trail as the detail view.': '按照与详情视图相同的审计轨迹审核申请。',
  'View partner record': '查看合作伙伴记录',
  'Affiliate program': '联盟计划',
  'Campaign views': '活动视图',
  'Partner scope': '合作伙伴范围',
  'Total clicks': '点击总数',
  'Total orders': '订单总数',
  'Total commission': '佣金总额',
  'Gross sales': '销售总额',
  'Net sales': '净销售额',
  Voids: '作废金额',
  'Sale amount': '销售金额',
  'Brand performance trend': '品牌表现趋势',
  'Performance tracking': '表现跟踪',
  'Performance overview': '表现概览',
  'Performance chart': '表现图表',
  'Compare daily performance across your affiliate program and partner channels.': '比较联盟计划和合作伙伴渠道的每日表现。',
  'Compare performance across brands, stores, and partner channels.': '比较不同品牌、店铺和合作伙伴渠道的表现。',
  'Compared with previous period': '与上一周期对比',
  'Current period': '当前周期',
  'Metric tabs': '指标选项卡',
  'Partner programs': '合作伙伴计划',
  'Create, organize, and optimize the programs your partners promote.': '创建、整理并优化合作伙伴推广的计划。',
  'Shape the view without leaving the workspace': '无需离开工作区即可调整视图',
  'Sort emphasis': '排序重点',
  Recent: '最近更新',
  'Budget focus': '预算重点',
  'Close filters': '关闭筛选器',
  Filters: '筛选器',
  Invite: '邀请',
  'Invite partner': '邀请合作伙伴',
  Following: '已关注',
  'Show less': '显示较少',
  'Featured matches carousel': '精选匹配轮播',
  'Previous featured matches': '上一组精选匹配',
  'Next featured matches': '下一组精选匹配',
  'content preview': '内容预览',
  Categories: '分类',
  Resent: '已重新发送',
  'No invitations found': '未找到邀请记录',
  'Try clearing a filter or searching another partner.': '请清除筛选条件或搜索其他合作伙伴。',
  'Related videos': '相关视频',
  'No programs match these filters': '没有符合这些筛选条件的计划',
  'No influencer campaigns match these filters': '没有符合这些筛选条件的影响者活动',
  'Try clearing a filter or using a broader search.': '请清除筛选条件或扩大搜索范围。',
  'Workspace control': '工作区管理',
  'Workspace settings': '工作区设置',
  'Manage your workspace profile, regional defaults, and notification preferences.': '管理工作区资料、区域默认设置和通知偏好。',
  'Settings sections': '设置分区',
  'Profile details': '资料详情',
  'Workspace profile': '工作区资料',
  'Workspace name': '工作区名称',
  'Store name': '店铺名称',
  'Display name': '显示名称',
  Website: '网站',
  'Business email': '业务邮箱',
  'Support email': '支持邮箱',
  'Workspace description': '工作区描述',
  'Used for reports and payouts': '用于报告和付款',
  'Regional defaults': '区域默认设置',
  'Country / region': '国家/地区',
  Industry: '行业',
  'Company size': '公司规模',
  'Time zone': '时区',
  Currency: '货币',
  'Email and in-app notifications': '邮件与应用内通知',
  'Account activity': '账户活动',
  'Workspace changes, access and security alerts': '工作区变更、访问和安全提醒',
  'Campaign updates': '活动更新',
  'Budget, deliverable and approval updates': '预算、交付项和审批更新',
  'Product news': '产品动态',
  'New tools, guides and partner growth tips': '新工具、指南和合作伙伴增长建议',
  Security: '安全',
  'Regional settings': '区域设置',
  'Billing preferences': '账单偏好',
  'Search campaigns': '搜索活动',
  'No campaigns match these filters': '没有符合这些筛选条件的活动',
  'Try clearing a filter or using a broader search.': '请清除筛选条件或扩大搜索范围。',
  'Use the controls above to refine platform, budget, or category.': '使用上方控件细化平台、预算或分类。',
  'Campaign directory': '活动目录',
  'Filter focus': '筛选重点',
  'Search programs': '搜索计划',
  'Create campaign': '创建活动',
  'Create affiliate program': '创建联盟计划',
  'Track how your affiliate program is performing across key metrics.': '跟踪联盟计划在关键指标上的表现。',
  'Create and manage influencer campaigns to grow your brand and drive measurable results.': '创建并管理影响者活动，提升品牌影响力并带来可量化的成果。',
  'Find and connect with content creators who align with your brand and campaign goals.': '寻找并联系符合品牌和活动目标的内容创作者。',
  'Find and connect with publishers that fit your brand, category and audience.': '寻找并联系符合品牌、分类和受众的发布者。',
  'All influencers': '全部影响者',
  'All publishers': '全部发布者',
  'Seasonal partners': '季节性合作伙伴',
  'Campaign relationships': '活动合作关系',
  'Not contacted': '未联系',
  'Previously invited': '此前已邀请',
  'Active campaign': '进行中的活动',
  'Deals & Coupons': '优惠与优惠券',
  'Sent date': '发送日期',
  'Last activity': '最近动态',
  'Performance overview': '表现概览',
  'Clicks this month': '本月点击量',
  'Pending review': '待审核',
  'Product views': '商品浏览量',
  'All order statuses': '全部订单状态',
  'All SKU statuses': '全部 SKU 状态',
  'All transaction types': '全部交易类型',
  'All groups': '全部分组',
  'All publishers': '全部发布者',
  'All commission rules': '全部佣金规则',
  'All Amazon brands': '全部 Amazon 品牌',
  'In stock': '有库存',
  'This year': '今年',
  'Next payout date': '下次付款日期',
  'Primary payout method': '主要付款方式',
  'Account balance': '账户余额',
  'Available for payout': '可付款余额',
  'Pending commission': '待处理佣金',
  'From in-progress transactions': '来自进行中的交易',
  'Data Export': '数据导出',
  'Finance Integration': '财务集成',
  'Partner Events': '合作伙伴事件',
  'Campaign Events': '活动事件',
  'Order Events': '订单事件',
  'Payout Events': '付款事件',
  'Texts & emails': '文本与邮件',
  'Getting started': '入门指南',
  'New to the platform? Learn the basics and set up your account for success.': '刚开始使用平台？了解基础知识并完成账户设置。',
  'Partner management': '合作伙伴管理',
  'Manage partners, review applications, and grow your affiliate network.': '管理合作伙伴、审核申请并拓展联盟网络。',
  'Payments & reporting': '付款与报告',
  'Understand commissions, payouts, and performance reports.': '了解佣金、付款和表现报告。',
  'Full name': '姓名',
  'Email address': '邮箱地址',
  'Website or profile URL': '网站或资料 URL',
  'Primary platform': '主要平台',
  'Why do you want to partner?': '为什么想成为合作伙伴？',
  'Apply to partner': '申请成为合作伙伴',
  'Ready to share with partners': '可以分享给合作伙伴',
  'Brand connected': '品牌已连接',
  'Application queue selected': '已选择申请队列',
  'Public link available': '公开链接可用',
  'Sync delayed': '同步延迟',
  'Sync failed': '同步失败',
  'View errors': '查看错误',
  'Review applications': '审核申请',
  'Review transactions': '审核交易',
  'Open campaign': '打开活动',
  'Resume campaign': '恢复活动',
  'Add campaign assets': '添加活动素材',
  'Confirm attendance': '确认参加',
  'In planning': '规划中',
  'Data-driven model': '数据驱动模型',
  'Last-click model': '末次点击模型',
  'First-click model': '首次点击模型',
  'Linear model': '线性模型',
  'Position-based model': '基于位置的模型',
  'Direct publisher': '直接发布者',
  'Paid media': '付费媒体',
  'Main Website & Blog': '主网站与博客',
  'Partner Content & Reviews': '合作伙伴内容与评测',
  'Influencer Social Traffic': '影响者社交媒体流量',
  'Influencer Promo Codes': '影响者优惠码',
  'Paid Search Campaigns': '付费搜索活动',
  'Paid Social Campaigns': '付费社交媒体活动',
  'Active coupon rules': '生效中的优惠券规则',
  'Coupon-attributed orders': '优惠券归因订单',
  'Pending conflicts': '待处理冲突',
  'Need merchant review': '需要商家审核',
  'Attributed sales': '归因销售额',
  'Partner-owned coupon code': '合作伙伴专属优惠码',
  'Unique partner codes': '唯一合作伙伴优惠码',
  'Exact code match': '优惠码精确匹配',
  'No fallback': '无备用规则',
  'Primary signal': '主要信号',
  'Coupon plus partner link': '优惠券与合作伙伴链接',
  'Partner campaign codes': '合作伙伴活动优惠码',
  'Coupon + eligible click': '优惠券 + 有效点击',
  'Keep coupon owner': '保留优惠券所有者',
  'Assisted link only': '仅作为辅助链接',
  'Public campaign coupon': '公开活动优惠券',
  'Public campaign codes': '公开活动优惠码',
  'Code with no owner': '无所有者的优惠码',
  'Use eligible click': '使用有效点击',
  'Link fallback': '链接备用规则',
  'Expired code fallback': '过期优惠码备用规则',
  'Expired or invalid codes': '过期或无效优惠码',
  'Invalid code': '无效优惠码',
  'Ignore code, use click': '忽略优惠码，使用点击',
  'Log exception': '记录例外',
  'Multiple coupon conflict': '多个优惠券冲突',
  'Two or more owned codes': '两个或以上自有优惠码',
  'Multiple exact matches': '多个精确匹配',
  'Hold for review': '暂存待审核',
  'Manual resolution': '人工处理',
  'Direct public code': '直接公开优惠码',
  'Public code without referral': '无推荐的公开优惠码',
  'No eligible touch': '没有有效触点',
  'No partner credit': '无合作伙伴佣金',
  'Not applicable': '不适用',
  'No commission': '无佣金',
  'Partners covered': '覆盖的合作伙伴',
  'Pending changes': '待处理变更',
  'Standard Content Commission': '标准内容佣金',
  'New Partner Boost': '新合作伙伴激励',
  'Seasonal Sale Bonus': '季节性销售奖励',
  'Sale collection': '销售系列',
  'Blog & Content Partners': '博客与内容合作伙伴',
  'Tech Review Partners': '科技评测合作伙伴',
  'Newsletter Partners': '邮件简报合作伙伴',
  'Inactive – Old Rules': '未启用 – 旧规则',
  'Black Friday Bonus': '黑色星期五奖励',
  'Brand Search Protection': '品牌搜索保护',
  'Generic Keyword Coverage': '通用关键词覆盖',
  'Competitor Terms': '竞品词',
  'Coupon Search Traffic': '优惠券搜索流量',
  'Paid Social Coverage': '付费社交媒体覆盖',
  'Approved campaign terms': '已批准的活动关键词',
  'Influencer group': '影响者分组',
  'Holiday Search Exception': '节日搜索例外',
  'Legacy Publisher Policy': '旧版发布者政策',
  'Publisher exact-match terms': '发布者精确匹配关键词',
  'Block and review': '屏蔽并审核',
  'Block traffic and notify partner': '屏蔽流量并通知合作伙伴',
  'Hold for merchant review': '暂存待商家审核',
  'Record and monitor traffic': '记录并监控流量',
  'Most specific match wins': '最具体的匹配优先',
  'Block overrides Allow': '屏蔽优先于允许',
  'Undefined brand terms default to Block': '未定义的品牌词默认屏蔽',
  'Escalate evidence gaps': '升级证据缺口',
  'Account activity': '账户活动',
  'Export report': '导出报告',
  'Manage': '管理',
  'No transactions found': '未找到交易',
  'Try another filter or search term.': '请尝试其他筛选条件或搜索词。',
  Previous: '上一页',
  Next: '下一页',
  'Amazon BRB campaign performance': 'Amazon BRB 活动表现',
  'Find a campaign': '查找活动',
  'Current period vs previous period': '本周期与上一周期对比',
  '3 campaigns': '3 个活动',
  Beauty: '美妆',
  Health: '健康',
  Wellness: '健康生活',
  Gaming: '游戏',
  Lifestyle: '生活方式',
  Skincare: '护肤',
  Adventure: '户外探险',
  Fitness: '健身',
  Reviews: '评测',
  Guides: '指南',
  Deals: '优惠',
  'Personal finance': '个人理财',
  Followers: '粉丝',
  'Curated matches': '精选匹配',
  'Publisher directory': '发布者目录',
  'Partner discovery': '合作伙伴发现',
  'acceptance rate': '接受率',
  FOLLOWERS: '粉丝',
  'CURATED MATCHES': '精选匹配',
  'Featured influencers': '精选影响者',
  'Refresh matches': '刷新匹配',
  'Publishers to explore': '可探索的发布者',
  'PUBLISHER DIRECTORY': '发布者目录',
  Permission: '权限',
  'Technology partners': '技术合作伙伴',
  'App users': '应用用户',
  'VIP partners': 'VIP 合作伙伴',
  'Product feed': '商品数据源',
  'Video': '视频',
  'Videos': '视频',
  'workspace preview for the current brand scope.': '工作区预览。',
  'This task area is reserved for the product framework. The visual shell, navigation state and brand scope are ready for the next page.': '此区域为商品框架预留。视觉外壳、导航状态和品牌范围已准备好，可用于下一页面。',
  'Rules': '规则',
  'Data-driven (recommended)': '数据驱动（推荐）',
  'Channel type': '渠道类型',
  'Attribution logic': '归因逻辑',
  'Attribution window': '归因窗口',
  'Rows per page': '每页行数',
  Complete: '已完成',
  Planning: '规划中',
  'Search keywords': '搜索关键词',
  Sitewide: '全站',
  Electronics: '电子产品',
  'App Exclusive': '应用专享',
  Clearance: '清仓',
  'Coupon code': '优惠码',
  Offer: '优惠内容',
  'Valid dates': '有效日期',
  Usage: '使用次数',
  'SELECTED ASSET': '已选素材',
  'Image (JPG)': '图片（JPG）',
  Dimensions: '尺寸',
  'File size': '文件大小',
  Uploaded: '上传时间',
  'Uploaded by': '上传者',
  Folder: '文件夹',
  'Used in': '使用位置',
  Tags: '标签',
  'Edit asset': '编辑素材',
  'Commission structure': '佣金结构',
  'Rates are applied by qualifying sales amount.': '费率根据符合条件的销售金额计算。',
  Tier: '层级',
  'Sales amount (USD)': '销售金额（USD）',
  Conditions: '条件',
  'Rule performance': '规则表现',
  'Last updated': '最近更新',
  'Set base rates, bonuses, attribution windows, and partner conditions.': '设置基础费率、奖励、归因窗口和合作伙伴条件。',
  'Export settings': '导出设置',
  'Choose how credit is assigned for each conversion.': '选择每次转化的归因方式。',
  'Choose attribution model': '选择归因模型',
  'Assisted revenue': '辅助收入',
  'Tracking coverage': '跟踪覆盖率',
  'Channel credit distribution': '渠道归因分布',
  'Average credit assigned across all conversions.': '所有转化的平均归因结果。',
  'Define rules for how conversions are attributed to publishers, influencers, and paid channels.': '定义转化在发布者、影响者和付费渠道之间的归因规则。',
  'Add rule': '添加规则',
  Priority: '优先级',
  'Drag rows to reorder priority': '拖动行以调整优先级',
  'Audit history': '审计记录',
  'See recent changes to your attribution rules.': '查看归因规则的最近变更。',
  'Added rule: Paid Social Campaigns': '新增规则：付费社交媒体活动',
  'Changed attribution model to Data-driven': '将归因模型改为数据驱动',
  'Initial attribution rules created': '已创建初始归因规则',
  'Define paid-search terms, channels, regions, and partner eligibility for your programs.': '定义计划的付费搜索词、渠道、地区和合作伙伴资格。',
  'Across 5 channels': '覆盖 5 个渠道',
  Enforcement: '执行方式',
  Channels: '渠道',
  Regions: '地区',
  'Protected terms': '受保护关键词',
  'Keywords evaluated before partner paid traffic is approved.': '在批准合作伙伴付费流量前评估关键词。',
  'Rule conditions': '规则条件',
  'Enforcement activity': '执行动态',
  'Recent policy checks for this rule.': '该规则的最近政策检查。',
  'Policy checks are recorded for audit review.': '政策检查会记录下来供审计复核。',
  'View policy order': '查看政策顺序',
  'Specific match → Block → Review → Allow': '具体匹配 → 屏蔽 → 审核 → 允许',
  'Partner, campaign, and region scope wins first. Undefined brand terms default to Block; missing evidence is Review, never automatic approval.': '合作伙伴、活动和地区范围优先。未定义的品牌词默认屏蔽；缺少证据时进入审核，绝不自动批准。',
  'Manage teammate access and permissions for your brands and programs.': '管理品牌和计划的团队成员访问权限。',
  'Create new account': '创建新账户',
  'Active members': '活跃成员',
  'Pending invites': '待处理邀请',
  'Available seats': '可用席位',
  'Seats remaining': '剩余席位',
  'Invite a teammate': '邀请团队成员',
  'Send an invitation to join your workspace.': '发送加入工作区的邀请。',
  'Invitee email address': '受邀者邮箱地址',
  'Team account directory': '团队账户目录',
  'Search team accounts': '搜索团队账户',
  'Filter by brand': '按品牌筛选',
  'MFA Enabled': 'MFA 已启用',
  Deactivate: '停用',
  'Team accounts per page': '每页团队账户数',
  'Configure the public page where potential partners can discover and apply to your program.': '配置潜在合作伙伴发现并申请加入计划的公开页面。',
  'Preview page': '预览页面',
  'Recruitment page settings': '招募页面设置',
  'PUBLIC PAGE': '公开页面',
  'Recruitment page status': '招募页面状态',
  'Control whether partners can discover your program and submit an application.': '控制合作伙伴是否可以发现你的计划并提交申请。',
  Published: '已发布',
  'Accept new partner applications': '接受新的合作伙伴申请',
  'When enabled, anyone with the public link can view the page and apply.': '启用后，任何拥有公开链接的人都可以查看页面并提交申请。',
  'Public page URL': '公开页面 URL',
  'Copy link': '复制链接',
  'Share this link with creators and publishers you want to invite.': '将此链接分享给想邀请的创作者和发布者。',
  'PROGRAM SETUP': '计划设置',
  'Brand and application routing': '品牌与申请分流',
  'Choose the brand shown on the page and where new applications should go.': '选择页面展示的品牌以及新申请的去向。',
  'Custom review queue': '自定义审核队列',
  'PAGE CONTENT': '页面内容',
  'Make the invitation feel like your brand': '让邀请内容体现你的品牌风格',
  'Keep the message clear so the right partners know what to expect.': '保持信息清晰，让合适的合作伙伴了解预期内容。',
  'Page headline': '页面标题',
  'Use a short, welcoming headline.': '使用简短、友好的标题。',
  Introduction: '介绍',
  'Shown below the headline on the public page.': '显示在公开页面的标题下方。',
  'Primary button label': '主按钮文案',
  'APPLICATION FORM': '申请表单',
  'What should applicants share?': '申请人需要提供哪些信息？',
  'Required fields help your team review applications without asking for unnecessary information.': '必填字段可以帮助团队审核申请，同时避免索要不必要的信息。',
  'LIVE PREVIEW': '实时预览',
  'Public recruitment page': '公开招募页面',
  PREVIEW: '预览',
  'Tell us about you': '介绍一下你自己',
  'Complete the form to apply to this partner program.': '填写表单以申请加入此合作伙伴计划。',
  'Enter your answer': '请输入答案',
  'Applications go to New applications.': '申请将进入“新申请”。',
  'PUBLISHING CHECKLIST': '发布检查清单',
  'Ready to share': '可以分享',
  'Applications are demo-only and do not send email or create real partner records.': '申请仅用于演示，不会发送邮件或创建真实合作伙伴记录。',
  'Connect your stores, marketplaces, and analytics tools to sync data and power your affiliate programs.': '连接店铺、市场和分析工具，以同步数据并支持联盟计划。',
  'Add integration': '添加集成',
  'CONNECTED BRAND': '已连接品牌',
  'Primary domain': '主域名',
  'Integration owner': '集成负责人',
  'Billing plan': '账单计划',
  'Sync health summary': '同步健康摘要',
  Healthy: '正常',
  Warning: '警告',
  Error: '错误',
  Integrations: '集成',
  Connected: '已连接',
  'Last sync': '最近同步',
  'Data scope': '数据范围',
  Products: '商品',
  Customers: '客户',
  Inventory: '库存',
  'Data status': '数据状态',
  Traffic: '流量',
  'Recent activity': '最近动态',
  'View all activity logs': '查看全部活动日志',
  'Create and manage API keys to authenticate and authorize access to the YeahPromos Merchant API. Keep your credentials secure and never share them publicly.': '创建和管理 API 密钥，以验证并授权访问 YeahPromos 商家 API。请妥善保管凭证，切勿公开分享。',
  Environment: '环境',
  Test: '测试',
  'Create API key': '创建 API 密钥',
  'Security reminder': '安全提醒',
  'Treat your API keys like passwords. Store them securely, restrict permissions to the minimum required, and rotate keys regularly.': '请像保护密码一样保护 API 密钥，安全存储、限制为所需的最小权限，并定期轮换密钥。',
  'Learn more': '了解更多',
  'API keys': 'API 密钥',
  'Search API keys': '搜索 API 密钥',
  'Webhook endpoints': 'Webhook 端点',
  'Receive real-time event notifications from YeahPromos.': '接收来自 YeahPromos 的实时事件通知。',
  'Add endpoint': '添加端点',
  Rotate: '轮换',
  Revoke: '撤销',
  'Learn more about webhooks': '详细了解 Webhook',
  'Premium publishers': '优质发布者',
  'Creator network': '创作者网络',
  Publishers: '发布者',
  Influencers: '影响者',
  Brands: '品牌',
  'Brand performance': '品牌表现',
  'Manage base commission rates, bonuses, attribution windows, and rule conditions for your partners.': '管理合作伙伴的基础佣金费率、奖励、归因窗口和规则条件。',
  'awaiting approval': '待审批',
  'Email / Newsletter': '电子邮件 / 新闻通讯',
  'No bonus': '无奖励',
  'Selected rule': '已选规则',
  'All partners': '所有合作伙伴',
  'All products': '所有商品',
  'Edit rates': '编辑费率',
  'Valid for Content / Blog, Technology, and Review partners': '适用于内容/博客、科技和评测合作伙伴',
  'Excludes coupon-based orders': '不适用于优惠券订单',
  'Configure how conversions are attributed across channels and partners.': '配置跨渠道和合作伙伴的转化归因方式。',
  'Attribution model': '归因模型',
  'Last-click': '末次点击',
  'First-click': '首次点击',
  Linear: '线性',
  'Position-based (U-shape)': '基于位置（U 型）',
  'Data-driven model analyzes historical performance to determine the optimal credit distribution across touchpoints.': '数据驱动模型分析历史表现，以确定各触点的最佳归因分配。',
  'Last-click within channel': '渠道内末次点击',
  'Data-driven (weighted)': '数据驱动（加权）',
  'First-click within channel': '渠道内首次点击',
  'PPC rules': 'PPC 规则',
  'PPC rows per page': '每页 PPC 规则数',
  'Selected restriction': '已选限制规则',
  'Selected PPC rule': '已选 PPC 规则',
  'Keywords / terms': '关键词 / 词组',
  'Approved partners': '已批准合作伙伴',
  'Non-brand product terms': '非品牌商品词',
  'Competitor brand names': '竞品品牌名称',
  'Coupon and promo terms': '优惠券和促销词',
  'Holiday campaign terms': '节日活动词',
  'Transactions per page': '每页交易数',
  'View and manage all transactions across your partner program.': '查看并管理合作伙伴计划中的所有交易。',
  'Review order activity, sales, and commission status for your partner program.': '查看合作伙伴计划的订单动态、销售额和佣金状态。',
  'Bulk approve / void': '批量批准 / 作废',
  'SKU status': 'SKU 状态',
  Backordered: '延期交付',
  Refund: '退款',
  Group: '分组',
  'Commission rule': '佣金规则',
  Action: '操作',
  'Search by Order ID, SKU, or UID': '按订单 ID、SKU 或 UID 搜索',
  'Track your account balance, commissions, payouts, and payment methods.': '跟踪账户余额、佣金、付款和支付方式。',
  'Deposit funds': '存入资金',
  'Balance trend': '余额趋势',
  'Choose balance trend period': '选择余额趋势周期',
  'Opening balance': '期初余额',
  'Total credits': '贷方总额',
  'Total debits': '借方总额',
  'Closing balance': '期末余额',
  'Payout schedule': '付款计划',
  'Estimated payout cycle: Every 2 weeks': '预计付款周期：每 2 周',
  'Add method': '添加方式',
  'Recent payout activity': '最近付款动态',
  'Review recent completed payouts and their references.': '查看最近完成的付款及其参考编号。',
  Amount: '金额',
  Method: '方式',
  Description: '描述',
  'Bi-weekly payout': '双周付款',
  'Review payment records and download invoice details for this workspace.': '查看付款记录并下载此工作区的发票详情。',
  'Payment ID': '付款 ID',
  'Payment Method': '支付方式',
  'Payment Type': '付款类型',
  'Account balance top-up': '账户余额充值',
  'Fees for Standard Plan': '标准计划费用',
  'Bi-weekly partner payout': '双周合作伙伴付款',
  'Partner messages': '合作伙伴消息',
  'Product collaboration proposal': '产品合作提案',
  'Payout processed': '付款已处理',
  'Performance update': '表现更新',
  'System Alert': '系统提醒',
  'Partner Message': '合作伙伴消息',
  Open: '打开',
  Labels: '标签',
  'Added to CRM': '已添加到 CRM',
  Yes: '是',
  'Demo interaction · replies are not sent': '演示交互 · 回复不会发送',
  'Brand permission': '品牌权限',
  Admin: '管理员',
  Manager: '经理',
  Editor: '编辑者',
  Analyst: '分析师',
  Viewer: '查看者',
  'All Brands': '所有品牌',
  'MFA Not enrolled': 'MFA 未注册',
  'PARTNER PROGRAM': '合作伙伴计划',
  'Partner with Demo Brand': '与 Demo Brand 合作',
  'Full name': '姓名',
  'Email address': '邮箱地址',
  'PUBLISHING CHECKLIST': '发布检查清单',
  'Demo Store is active': 'Demo Store 已启用',
  'Last 24 hours': '过去 24 小时',
  'Storefront (Shopify)': '店铺前台（Shopify）',
  'Online Store (WooCommerce)': '在线商店（WooCommerce）',
  'Marketplace (Amazon)': '市场平台（Amazon）',
  Reconnect: '重新连接',
  'Web Analytics': '网站分析',
  '98% events received': '已接收 98% 的事件',
  'Shopify sync completed successfully': 'Shopify 同步成功完成',
  'WooCommerce sync completed': 'WooCommerce 同步完成',
  'Amazon sync delayed': 'Amazon 同步延迟',
  'Retrying in 30 minutes': '将在 30 分钟后重试',
  'Analytics data updated': '分析数据已更新',
  'Integration settings updated': '集成设置已更新',
  'South Africa': '南非',
  'Clothing & Accessories': '服装与配饰',
  'Shoes & Bags': '鞋履与箱包',
  Assets: '素材',
  '20% off sitewide': '全站 8 折',
  'Minimum spend $50': '最低消费 $50',
  '10% off for new customers': '新客户 9 折',
  'No minimum spend': '无最低消费',
  '15% off electronics': '电子产品 85 折',
  '$5 off on app orders': '应用订单立减 $5',
  'Minimum spend $100': '最低消费 $100',
  'Minimum spend $30': '最低消费 $30',
  '25% off clearance items': '清仓商品 75 折',
  '30% off for VIP members': 'VIP 会员 7 折',
  'Minimum spend $150': '最低消费 $150',
  'Define paid-search terms, channels, regions, and partner eligibility.': '定义付费搜索词、渠道、地区和合作伙伴资格。',
  'Control PPC keywords, channels, regions, partner eligibility, and violation handling for your programs.': '管理计划的 PPC 关键词、渠道、地区、合作伙伴资格和违规处理。',
  'Define paid-search terms, channels, regions, and partner scope.': '定义付费搜索词、渠道、地区和合作伙伴范围。',
  'Coupon partners': '优惠券合作伙伴',
  '2 brand terms': '2 个品牌词',
  '18 approved terms': '18 个已批准词',
  '12 blocked terms': '12 个已屏蔽词',
  '9 review terms': '9 个待审核词',
  '5 campaign terms': '5 个活动词',
  '7 seasonal terms': '7 个季节性词',
  'Prevent partners from bidding on YeahPromos brand terms or sending paid traffic directly to the store.': '阻止合作伙伴竞价 YeahPromos 品牌词，或直接向店铺发送付费流量。',
  'Exact and phrase matches for protected brand terms are blocked': '受保护品牌词的精确匹配和词组匹配均会被屏蔽',
  'Direct-to-site PPC traffic is not permitted for partner links': '合作伙伴链接不允许将 PPC 流量直接导向网站',
  'Partners must use approved non-brand keywords for paid search': '合作伙伴必须使用已批准的非品牌关键词进行付费搜索',
  'Match type': '匹配类型',
  'Exact + phrase match': '精确匹配 + 词组匹配',
  'Violation action': '违规处理',
  'Decision priority': '决策优先级',
  'Apply the policy in this order when rules overlap.': '规则重叠时按此顺序应用政策。',
  'Partner + campaign + region rules override broader channel or global rules.': '合作伙伴 + 活动 + 地区规则优先于更宽泛的渠道或全局规则。',
  'At the same scope, a Block decision wins over Allow; Review pauses final approval.': '在相同范围内，屏蔽优先于允许；审核会暂停最终批准。',
  'New brand and competitor terms are protected until a merchant explicitly allows them.': '新品牌词和竞品词在商家明确允许前均受保护。',
  'Missing landing-page or keyword evidence is Review, never an automatic approval.': '缺少落地页或关键词证据时进入审核，不会自动批准。',
  'Audit evidence': '审计证据',
  'Each decision stores the keyword, channel, region, partner, landing page, rule ID, action, and timestamp.': '每项决策都会记录关键词、渠道、地区、合作伙伴、落地页、规则 ID、操作和时间戳。',
  'Applies to all partners across all products and channels.': '适用于所有商品和渠道中的全部合作伙伴。',
  'Tier 1': '第 1 层',
  'Tier 2': '第 2 层',
  'Tier 3': '第 3 层',
  'Tier 4': '第 4 层',
  'by Demo Admin': '由 Demo Admin',
  'Payout ID': '付款 ID',
  Reference: '参考编号',
  'Order ID': '订单 ID',
  'Date / Time': '日期 / 时间',
  'Key name': '密钥名称',
  'Created by': '创建者',
  'Created on': '创建时间',
  'Created on ↓': '创建时间 ↓',
  'Last used': '最近使用',
  Scopes: '权限范围',
  'Item(s)': '商品',
  Quantity: '数量',
  'Sales amount': '销售金额',
  'Commission ID': '佣金 ID',
  'Auto charged commission balance': '自动扣除佣金余额',
  Time: '时间',
}));

const monthTranslations = {
  Jan: '1',
  Feb: '2',
  Mar: '3',
  Apr: '4',
  May: '5',
  Jun: '6',
  Jul: '7',
  Aug: '8',
  Sep: '9',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

const translateDateExpressions = (value) => {
  let translated = value;
  const monthPattern = '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)';
  translated = translated.replace(
    new RegExp(`\\b${monthPattern}\\s+(\\d{1,2})\\s*[–-]\\s*${monthPattern}\\s+(\\d{1,2}),\\s*(\\d{4})\\b`, 'g'),
    (_, startMonth, startDay, endMonth, endDay, year) => `${year} 年 ${monthTranslations[startMonth]} 月 ${Number(startDay)} 日–${monthTranslations[endMonth]} 月 ${Number(endDay)} 日`,
  );
  translated = translated.replace(
    new RegExp(`\\b${monthPattern}\\s+(\\d{1,2})\\s*[–-]\\s*${monthPattern}\\s+(\\d{1,2})\\b`, 'g'),
    (_, startMonth, startDay, endMonth, endDay) => `${monthTranslations[startMonth]} 月 ${Number(startDay)} 日–${monthTranslations[endMonth]} 月 ${Number(endDay)} 日`,
  );
  translated = translated.replace(
    new RegExp(`\\b${monthPattern}\\s+(\\d{1,2}),\\s*(\\d{4})\\b`, 'g'),
    (_, month, day, year) => `${year} 年 ${monthTranslations[month]} 月 ${Number(day)} 日`,
  );
  translated = translated.replace(
    new RegExp(`\\b${monthPattern}\\s+(\\d{1,2})\\b`, 'g'),
    (_, month, day) => `${monthTranslations[month]} 月 ${Number(day)} 日`,
  );
  return translated.replace(/\b(\d{1,2}:\d{2})\s*(AM|PM)\b/g, (_, time, meridiem) => `${meridiem === 'AM' ? '上午' : '下午'} ${time}`);
};

const countTranslations = {
  applications: '个申请',
  campaigns: '个活动',
  partners: '个合作伙伴',
  assets: '个素材',
  messages: '条消息',
  invoices: '张发票',
  transactions: '笔交易',
  results: '条结果',
  invitations: '条邀请',
  orders: '个订单',
  rules: '条规则',
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const orderedPhraseTranslations = [...new Map([...textTranslations, ...phraseTranslations])]
  .sort(([left], [right]) => right.length - left.length);

const replaceTranslatedPhrases = (value) => orderedPhraseTranslations
  .reduce((result, [source, target]) => result.replace(
    new RegExp(`(?<![A-Za-z])${escapeRegExp(source)}(?![A-Za-z])`, 'g'),
    target,
  ), value);

const translateKnownPhrase = (value) => textTranslations.get(value) ?? phraseTranslations.get(value) ?? value;

const translateDynamicText = (value) => {
  if (textTranslations.has(value)) return textTranslations.get(value);
  if (phraseTranslations.has(value)) return phraseTranslations.get(value);

  // 邮箱、文件名和带扩展名的资源标识属于数据值，不参与界面文案翻译。
  if (/@|_|\.[A-Za-z0-9]{2,5}$/.test(value)) return value;

  let match = value.match(/^(.+?)\s+selected$/i);
  if (match) {
    const selectedLabel = translateKnownPhrase(match[1]);
    if (selectedLabel !== match[1]) return `${selectedLabel} 已选中`;
    const dynamicLabel = translateDynamicText(match[1]);
    return /^\d[\d,]*\s/.test(dynamicLabel) ? `${dynamicLabel}已选中` : `${dynamicLabel} 已选中`;
  }

  match = value.match(/^(.+?)\s+·\s+([\d.]+[KM]?)\s+(followers|monthly visits)$/i);
  if (match) {
    const unit = match[3].toLowerCase() === 'followers' ? '粉丝' : '月访问量';
    return `${translateKnownPhrase(match[1])} · ${match[2]} ${unit}`;
  }

  match = value.match(/^((?:Publisher|Partner) ID:\s*\d+)\s+·\s+(Publisher|Influencer)$/i);
  if (match) {
    const identifier = translateDynamicText(match[1]);
    return `${identifier} · ${translateKnownPhrase(match[2])}`;
  }

  match = value.match(/^(.+?)\s+·\s+((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s*\d{4}(?:\s+\d{1,2}:\d{2}(?:\s*(?:AM|PM))?)?)$/i);
  if (match) return `${translateKnownPhrase(match[1])} · ${translateDateExpressions(match[2])}`;

  match = value.match(/^((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s*\d{4})\s+·\s+(\d{1,2}:\d{2})$/i);
  if (match) return `${translateDateExpressions(match[1])} · ${match[2]}`;

  match = value.match(/^(.+?)\s+·\s+(.+)$/);
  if (match) {
    const left = translateKnownPhrase(match[1]);
    const right = translateKnownPhrase(match[2]);
    const translatedRight = right === match[2] ? translateDateExpressions(match[2]) : right;
    if (left !== match[1] || translatedRight !== match[2]) return `${left} · ${translatedRight}`;
  }

  match = value.match(/^(.+?)\s+workspace preview for the current brand scope\.$/i);
  if (match) {
    const workspaceLabel = translateKnownPhrase(match[1]);
    if (workspaceLabel !== match[1] || /[\u3400-\u9fff]/.test(match[1])) return `当前品牌范围的${workspaceLabel}工作区预览。`;
  }

  match = value.match(/^(\d+)\s*[–-]\s*(\d+)\s+of\s+(\d+)$/i);
  if (match) return `第 ${match[1]}–${match[2]} 项，共 ${match[3]} 项`;

  match = value.match(/^Showing (\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns|rules)$/i);
  if (match) {
    const unitKey = match[3].toLowerCase();
    const itemMarkers = { results: '条', messages: '条', invoices: '张', transactions: '笔', assets: '项', campaigns: '个', rules: '条' };
    return `显示 ${match[1]} ${itemMarkers[unitKey]}，共 ${match[2]} ${countTranslations[unitKey]}`;
  }

  match = value.match(/^([\d,]+) results$/i);
  if (match) return `${match[1]} 条结果`;

  match = value.match(/^([\d,]+) (applications|campaigns|partners|assets|messages|invoices|transactions|results)$/i);
  if (match) return `${match[1]} ${countTranslations[match[2].toLowerCase()]}`;

  match = value.match(/^(\d+) brand terms protected$/i);
  if (match) return `${match[1]} 个品牌词已保护`;

  match = value.match(/^(\d+) flagged this month$/i);
  if (match) return `本月 ${match[1]} 条已标记`;

  match = value.match(/^([\d,]+) products$/i);
  if (match) return `${match[1]} 个商品`;

  match = value.match(/^([\d,]+) customers$/i);
  if (match) return `${match[1]} 位客户`;

  match = value.match(/^([\d,]+) conversions$/i);
  if (match) return `${match[1]} 次转化`;

  match = value.match(/^([\d,]+) brands$/i);
  if (match) return `${match[1]} 个品牌`;

  match = value.match(/^([\d.]+%) in stock$/i);
  if (match) return `${match[1]} 有库存`;

  match = value.match(/^of (\d+) seats$/i);
  if (match) return `共 ${match[1]} 个席位`;

  match = value.match(/^Invoices \((\d+)\)$/i);
  if (match) return `发票（${match[1]}）`;

  match = value.match(/^(\d+) selected$/i);
  if (match) return `已选中 ${match[1]} 项`;

  match = value.match(/^([\d.]+%) acceptance rate$/i);
  if (match) return `${match[1]} 接受率`;

  match = value.match(/^(\d+) assets$/i);
  if (match) return `${match[1]} 个素材`;

  match = value.match(/^(\d+)\s*\/\s*page$/i);
  if (match) return `${match[1]} / 页`;

  match = value.match(/^(\d+) days?$/i);
  if (match) return `${match[1]} 天`;

  match = value.match(/^([\d.]+) min ago$/i);
  if (match) return `${match[1]} 分钟前`;

  match = value.match(/^([+-]?[\d.]+%?) this week$/i);
  if (match) return `本周 ${match[1]}`;

  match = value.match(/^([+-]?[\d.]+%) this period$/i);
  if (match) return `本周期 ${match[1]}`;

  if (value.toLowerCase().endsWith(' vs previous period')) {
    const periodDelta = value.slice(0, -' vs previous period'.length).trim();
    if (/^[-+]?[0-9.]+%$/.test(periodDelta)) return `较上一周期 ${periodDelta}`;
  }

  match = value.match(/^([↑↓—+-]?\s*[\d.]+%) vs (.+)$/i);
  if (match) {
    const comparison = match[2].toLowerCase() === 'last 7 days'
      ? '过去 7 天'
      : translateDateExpressions(match[2]);
    return `${match[1]} 较 ${comparison}`;
  }

  match = value.match(/^Showing (\d+) to (\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns|rules)$/i)
    ?? value.match(/^Showing (\d+)[–-](\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns|rules)$/i)
    ?? value.match(/^(\d+)\s*[–-]\s*(\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns|rules)$/i);
  if (match) {
    const itemUnit = match[4].toLowerCase() === 'assets' ? '项' : '条';
    return `${value.startsWith('Showing') ? '显示' : ''}第 ${match[1]}–${match[2]} ${itemUnit}，共 ${match[3]} ${countTranslations[match[4].toLowerCase()]}`;
  }

  match = value.match(/^(\d+) (applications|campaigns|partners|assets|messages|invoices|transactions|results) in this view$/i);
  if (match) return `${match[1]} ${countTranslations[match[2].toLowerCase()]}`;

  match = value.match(/^(\d+) total campaigns$/i);
  if (match) return `共 ${match[1]} 个活动`;

  match = value.match(/^(\d+) recent invitations$/i);
  if (match) return `${match[1]} 条近期邀请`;

  match = value.match(/^([\d.]+[KM]?) monthly visits$/i);
  if (match) return `${match[1]} 月访问量`;

  match = value.match(/^([\d.]+[KM]?) followers$/i);
  if (match) return `${match[1]} 粉丝`;

  match = value.match(/^(\d+) active criteri(?:on|a)$/i);
  if (match) return `${match[1]} 个筛选条件已启用`;

  match = value.match(/^(\d+) (profiles|publishers) ready to review$/i);
  if (match) return `${match[1]} 个${match[2].toLowerCase() === 'profiles' ? '资料' : '发布者'}待审核`;

  match = value.match(/^(\d+) (programs|campaigns) currently visible$/i);
  if (match) return `${match[1]} 个${match[2].toLowerCase() === 'programs' ? '计划' : '活动'}当前可见`;

  match = value.match(/^(\d+) applications need review$/i);
  if (match) return `${match[1]} 个申请待审核`;

  match = value.match(/^(\d+) products failed to sync$/i);
  if (match) return `${match[1]} 个商品同步失败`;

  match = value.match(/^(\d+) transactions are ready for approval$/i);
  if (match) return `${match[1]} 笔交易待审批`;

  match = value.match(/^(\d+) partner-owned rules$/i);
  if (match) return `${match[1]} 条合作伙伴专属规则`;

  match = value.match(/^(\d+) added this month$/i);
  if (match) return `${match[1]} 条本月新增`;

  match = value.match(/^(\d+) awaiting approval$/i);
  if (match) return `${match[1]} 条待审批`;

  match = value.match(/^(\d+) pending$/i);
  if (match) return `${match[1]} 条待处理`;

  match = value.match(/^([-+]?[\d.]+%?) this month$/i);
  if (match) return `本月 ${match[1]}`;

  match = value.match(/^([\d.]+%) of total$/i);
  if (match) return `占总数 ${match[1]}`;

  match = value.match(/^([↑↓—+-]?)\s*([\d.]+%) of total partners$/i);
  if (match) return `${match[1]} 占合作伙伴总数 ${match[2]}`;

  match = value.match(/^([↑↓—+-]?)\s*(\d+) awaiting approval$/i);
  if (match) return `${match[1]} ${match[2]} 条待审批`;

  match = value.match(/^In (\d+) days?$/i);
  if (match) return `${match[1]} 天后`;

  match = value.match(/^(\d+) campaigns?$/i);
  if (match) return `${match[1]} 个活动`;

  match = value.match(/^(\d+) products?$/i);
  if (match) return `${match[1]} 个商品`;

  match = value.match(/^(\d+) customers?$/i);
  if (match) return `${match[1]} 位客户`;

  match = value.match(/^(\d+) brands selected$/i);
  if (match) return `${match[1]} 个品牌已选中`;

  match = value.match(/^([\d,]+) orders$/i);
  if (match) return `${match[1]} 个订单`;

  match = value.match(/^Updated (\d+) min ago$/i);
  if (match) return `更新于 ${match[1]} 分钟前`;

  match = value.match(/^(Today|Yesterday),\s*(\d{1,2}:\d{2})\s*(AM|PM)$/i);
  if (match) return `${match[1].toLowerCase() === 'today' ? '今天' : '昨天'}，${match[3].toUpperCase() === 'AM' ? '上午' : '下午'} ${match[2]}`;

  match = value.match(/^(Starts|Last edited)\s+(.+)$/i);
  if (match) return `${match[1].toLowerCase() === 'starts' ? '开始于' : '最后编辑于'} ${translateDateExpressions(match[2])}`;

  match = value.match(/^(Publisher|Partner) ID:\s*(\d+)$/i);
  if (match) return `${match[1].toLowerCase() === 'publisher' ? '发布者' : '合作伙伴'} ID：${match[2]}`;

  match = value.match(/^(Under|Over) (.+)$/i);
  if (match) return `${match[1].toLowerCase() === 'under' ? '低于' : '高于'} ${match[2]}`;

  match = value.match(/^Updated (.+)$/i);
  if (match && (/^(?:a few minutes ago|today)$/i.test(match[1]) || /^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}(?:\s*[–-]\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2})?(?:,\s*\d{4})?$/i.test(match[1]))) {
    return `更新于 ${match[1].toLowerCase() === 'today' ? '今天' : match[1].toLowerCase() === 'a few minutes ago' ? '几分钟前' : translateDateExpressions(match[1])}`;
  }

  match = value.match(/^Last sync:\s+(.+)$/i);
  if (match) return `上次同步：${translateDateExpressions(match[1])}`;

  match = value.match(/^((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s*\d{4})\s+by\s+(.+)$/i);
  if (match) return `${translateDateExpressions(match[1])}，由 ${match[2]}`;

  match = value.match(/^((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s*\d{4}),\s*(\d{1,2}:\d{2})\s*(AM|PM)$/i);
  if (match) return `${translateDateExpressions(match[1])}，${match[3].toUpperCase() === 'AM' ? '上午' : '下午'} ${match[2]}`;

  if (/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s*\d{4}\s+\d{1,2}:\d{2}\s*(?:AM|PM)$/i.test(value)) {
    return translateDateExpressions(value);
  }

  if (/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s*\d{4}\s+\d{1,2}:\d{2}$/i.test(value)) {
    return translateDateExpressions(value);
  }

  if (/^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2}(?:\s*[–-]\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2})?(?:,\s*\d{4})?$/i.test(value)) {
    return translateDateExpressions(value);
  }

  // 多词文本必须命中完整短语；否则很可能是品牌名、文件名或用户数据，不能逐词替换。
  if (/\s/.test(value)) return value;

  return translateDateExpressions(replaceTranslatedPhrases(value));
};

export const translateText = (locale, source) => {
  const original = String(source ?? '');
  if (locale !== CHINESE_LOCALE || !original.trim()) return original;
  const leading = original.match(/^\s*/)?.[0] ?? '';
  const trailing = original.match(/\s*$/)?.[0] ?? '';
  const translated = translateDynamicText(original.trim());
  return `${leading}${translated}${trailing}`;
};

export const translateAttribute = (locale, source) => {
  if (source == null || locale !== CHINESE_LOCALE) return source;
  return attributeTranslations.get(source) ?? translateText(locale, source);
};

export const getLocale = () => window.localStorage.getItem(LOCALE_STORAGE_KEY) === CHINESE_LOCALE
  ? CHINESE_LOCALE
  : 'en';

export const translate = (locale, key, fallback = key) => locale === CHINESE_LOCALE
  ? translations[key] ?? fallback
  : fallback;

export const translateNavigationLabel = (locale, item) => locale === CHINESE_LOCALE
  ? navigationTranslations[item.id] ?? item.label
  : item.label;

export const translatePageTitle = (locale, pageId, fallback) => locale === CHINESE_LOCALE
  ? navigationTranslations[pageId] ?? fallback
  : fallback;

const localizeNode = (node) => {
  const source = node.nodeValue;
  const translated = translateText(CHINESE_LOCALE, source);
  if (translated !== source) node.nodeValue = translated;
};

const localizeAttributes = (root) => {
  const elements = root instanceof Element ? [root, ...root.querySelectorAll('*')] : [];
  elements.forEach((element) => {
    ['aria-label', 'title', 'placeholder'].forEach((attribute) => {
      const source = element.getAttribute(attribute);
      const translated = translateAttribute(CHINESE_LOCALE, source);
      if (translated !== source) element.setAttribute(attribute, translated);
    });
  });
};

const localizeText = (root = document.body) => {
  if (!root) return;
  localizeAttributes(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      return parent && !['SCRIPT', 'STYLE', 'SVG'].includes(parent.tagName)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });
  while (walker.nextNode()) localizeNode(walker.currentNode);
};

let observer;

export const applyLocale = () => {
  const locale = getLocale();
  const isChinese = locale === CHINESE_LOCALE;
  document.documentElement.lang = isChinese ? CHINESE_LOCALE : 'en';
  document.title = translate(locale, 'document.title', 'Business Overview · YeahPromos');
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content',
    translate(locale, 'document.description', 'YeahPromos merchant business overview demo'),
  );

  const button = document.querySelector('[data-language-toggle]');
  if (button) {
    button.textContent = isChinese ? '中文' : 'EN';
    button.setAttribute('aria-pressed', String(isChinese));
    button.setAttribute('aria-label', isChinese ? '切换到英文' : 'Switch to Chinese');
    button.setAttribute('title', isChinese ? '切换到英文' : 'Switch to Chinese');
  }

  observer?.disconnect();
  if (!isChinese) return;
  localizeText();
  observer = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) localizeText(node);
        if (node.nodeType === Node.TEXT_NODE) localizeNode(node);
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
};

export const bindLanguageToggle = () => {
  document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
    const nextLocale = getLocale() === CHINESE_LOCALE ? 'en' : CHINESE_LOCALE;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    window.location.reload();
  });
};
