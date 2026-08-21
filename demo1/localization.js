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
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const orderedPhraseTranslations = [...new Map([...textTranslations, ...phraseTranslations])]
  .sort(([left], [right]) => right.length - left.length);

const replaceTranslatedPhrases = (value) => orderedPhraseTranslations
  .reduce((result, [source, target]) => result.replace(
    new RegExp(`(?<![A-Za-z])${escapeRegExp(source)}(?![A-Za-z])`, 'g'),
    target,
  ), value);

const translateDynamicText = (value) => {
  if (textTranslations.has(value)) return textTranslations.get(value);
  if (phraseTranslations.has(value)) return phraseTranslations.get(value);

  let match = value.match(/^Showing (\d+) to (\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns)$/i)
    ?? value.match(/^Showing (\d+)[–-](\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns)$/i)
    ?? value.match(/^(\d+)\s*[–-]\s*(\d+) of ([\d,]+) (results|messages|invoices|transactions|assets|campaigns)$/i);
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

  match = value.match(/^(\d+) monthly visits$/i);
  if (match) return `${match[1]} 月访问量`;

  match = value.match(/^(Under|Over) (.+)$/i);
  if (match) return `${match[1].toLowerCase() === 'under' ? '低于' : '高于'} ${match[2]}`;

  match = value.match(/^Updated (.+)$/i);
  if (match) return `更新于 ${translateDateExpressions(replaceTranslatedPhrases(match[1]))}`;

  const translated = replaceTranslatedPhrases(value);
  return translateDateExpressions(translated);
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
