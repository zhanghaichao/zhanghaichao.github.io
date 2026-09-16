# 张海朝 · 独立开发者

个人开发者官网：<https://zhanghaichao.github.io/>。

米白与薄荷绿的响应式作品集，展示 WhereDidIPutIt?、Mint 汽车突围、Memory Camera、PrintFit、Dayframe、Cargo Loop。包含分类筛选、作品详情弹窗、关于开发者、邮箱联系和隐私政策入口。项目描述来自已有公开介绍及项目资料；不宣称已上架，不添加未经确认的商店下载链接。

## 文件与维护

- `index.html`：页面内容、作品卡片、SEO、隐私入口。
- `styles.css`：桌面/平板/手机布局，支持减少动态效果的系统设置。
- `site.js`：作品筛选、详情内容、复制邮箱。正文可在禁用 JavaScript 时访问。
- `assets/`：既有应用图标、实际界面截图和本站 SVG 图标；图片复制自项目现有商店素材，未改写源文件。
- 无构建依赖、外部字体、统计追踪或第三方脚本。`main` 根目录通过 GitHub Pages 发布。

本地预览：`python -m http.server 4173 --bind 127.0.0.1`，打开 <http://127.0.0.1:4173/>。

增加作品时，同步编辑 HTML 卡片、筛选计数、`site.js` 的详情数据和隐私政策列表。邮箱目前沿用原官网公开支持地址 `seansheaton@gmail.com`。

## 必须保留的已有入口

- WhereDidIPutIt? 隐私政策：<https://zhanghaichao.github.io/where-did-i-put-it-privacy/>
- AdMob 授权文件：<https://zhanghaichao.github.io/app-ads.txt>
- 网站授权文件：<https://zhanghaichao.github.io/ads.txt>

所有应用隐私页面由各自独立仓库托管，首页改版不迁移或改写这些政策。原始授权文件保持逐字节不变；不要移动到子目录。公开商店的开发者网站字段可填首页，隐私政策字段继续填写该应用原有独立 URL。

## 验证

2026-09-16：Edge/Playwright 验证 1440、768、390、320 像素宽度无横向溢出；6 个作品详情可打开并通过 Escape 关闭、焦点回到原链接；四类筛选、隐私展开、邮箱复制、禁用 JavaScript 的回退均通过。浏览器无脚本错误。6 个隐私政策及两个授权文件的线上地址返回 HTTP 200。

浏览器截图及临时验证脚本位于被忽略的 `.preview/`，不随网站发布。
