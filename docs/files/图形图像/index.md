# 最火前端Web组态软件(可视化)

# 前言：

随着物联网、大数据等技术高速发展，我们逐步向数字化、可视化的人工智能（AI）时代的方向不断迈进。智能时代是工业 4.0 时代，我国工业领域正努力从“制造”迈向“智造”的新跨越。

# 正文：

# 1.mxgraph：

介绍：开源免费，但是需要解决的问题很多，国内学习参考资料少。但是，可视化组态的实现基本都是借助于这个框架来实现的。

演示demo：
https://jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html

mxgraph官方文档API：
http://jgraph.github.io/mxgraph/docs/js-api/files/model/mxCell-js.html

最大的交流社区：
https://forum.jgraph.com/tags/swimlane/index.html

交流社区2：
https://stackoverflow.com/questions/tagged/mxgraph

github：https://github.com/jgraph/mxgraph

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/434a3d6d44d84c64b0b1e99a6c9d6f61~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=wrJxoyYXuozQfw%2Fzn9WrlIgjSLU%3D)



# 2.le5le-2D可视化：

介绍：A diagram (topology, UML) framework uses canvas and typescript. 一个用canvas+typescript写的绘图【核心库，不依赖框架】（微服务架构图、拓扑图、流程图、类图等ULM图，动画、视频支持）。本框架目前已经实现了拖拽、缩放、旋转、自定义属性等基础操作，开发者只用关心图表绘画实现即可。其次，流畅、高性能 - 使用 canvas 和多个场景离屏，操作过程流畅；完全不用担心 SVG 方式 dom 元素过多，性能高效。其三，自带部分动画效果，能满足基本的需求。使用TypeScript语言。chrome、firefox、ie11等浏览器是没有问题的。IE9以下版本没有测试，仅仅是绘图引擎，只需要支持canvas+html5标准即可。

随着发展，现在拥有国家电网标准电力图形库，物联网图形库，表单，视频流监控等四千多个组件供选择。

演示demo：https://2ds.le5le.com/

Github：https://github.com/le5le-com/meta2d.js

Gitee：https://gitee.com/le5le/meta2d.js

解决方案：
https://2ds.le5le.com/search

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/142658d44f1641a1b7c3183b71c5d244~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=n9eAprZYGBpqipvL91g%2FZerW%2BRQ%3D)



![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/e784c0112c2042c6997ff51a76ba4533~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=Der5N7fpAPxVWnGrTa3%2BnmwsTKM%3D)



![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/6ce63a5afe414cc3b4a88ab6c3f3755a~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=FsUdYBXeiwJ39fx3LhCEfe4H92I%3D)



# http://3.draw.io

介绍：和mxgraph相比，在其基础上加了一些东西，更加完善。但是都是出自同一家公司之手。

演示demo：https://www.draw.io/

github:https://github.com/jgraph/drawio

社区博客：
https://about.draw.io/blog/

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/103bb2f481614917bb4d2e1998c421c6~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=%2BTJNaprsX%2F1Wkp4mGgaWmMtPFyo%3D)



# 4.HT-2D/3D

演示demo：
http://www.hightopo.com/demo/2deditor/HT-2D-Editor.html

全部demo：
http://www.hightopo.com/demos/index.html

github：图扑软件

社区博客：
https://www.hightopo.com/blog/

效果：
https://www.hightopo.com/demos/index.html

3D地铁站台：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/2285a30cd49145e3aa245f6637b4e297~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=xs5aLIjDs8mF8mxcRixkMDQoDxE%3D)



editor参考：
https://www.hightopo.com/demo/Simple3DEditor/index.html

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/5538eb99ebb4479d99482c357dea6262~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=TXhF4Kcy0I2STaHU1lfZLV8M0os%3D)



# 5.3D可视化楼宇、水站实时监测系统：

介绍：3D可视化楼宇管理系统，实时监测楼宇相关的各方面的数据。提到工业互联网往往会涉及：物联网、IoT、5G、数字孪生、边缘计算、PaaS平台、SaaS应用、产业互联网、互联网+、工业4.0、智慧城市、智慧园区、智慧楼宇、智能制造等概念，但本文将围绕可视化的话题，围绕更基础的 HTML5/WebGL/WebVR 等底层技术，我们觉得业界还没达到智能化、平台化的成熟阶段，走得太快即使是 GE Predix 也会从明星变流星，了解垂直行业需求，采集足够多有效数据，做好实时的、稳定的、美观的、Web 化的 2D 和 3D 数据可视化呈现，是工业互联网需要走好的第一步。

演示
demo:http://www.hightopo.com/demo/ht-smart-building/

github：图扑软件

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/6ffbaddfbac44e498d1f89ffdab20571~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=n%2FV%2FdZIhvVNB755oqMbMWtz2RUE%3D)



# 6、前端设计Mqtt（订阅、发布）

参考：
https://github.com/UsrIot/usrCloudDemo_js/blob/master/web/mqttws31.js

# 7.OSHMI

效果：

介绍：适用于变电站，物联网和自动化应用的移动和云友好型SCADA HMI。

github:https://github.com/riclolsen/OSHMI

官网：
https://oshmiopensubstationhmi.sourceforge.io/

博客：
http://ricolsen1supervc.wordpress.com（被墙）

图形参考来源1：
https://www.freepik.com/search?dates=any&format=search&page=1&query=%E5%B7%A5%E4%B8%9A&sort=popular

# 8.HslControls控件库

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/5c69813637934f7596094cfd8f43a1f9~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=hOsmj8bx%2BfWEvCBBQJzoDN75i6M%3D)



介绍：HslControls是一个工业物联网的控件库，基于**C#**开发，配套HslCommunication组件可以实现工业上位机软件的快速开发，支持常用的工业图形化控件，快速的集成界面开发。 主要包含了按钮，开关，进度条，信号灯，数码管，时钟，曲线显示控件，仪表盘控件，管道控件，瓶子控件，饼图控件，传送带控件，温度计控件，鼓风机控件，阀门控件，电池控件等等。

开发语言：c#

github：https://github.com/dathlin/HslControlsDemo

博客：
https://www.cnblogs.com/dathlin/p/7703805.html

注意：前端主要是JavaScript语言开发，c#我也不懂，只是做参考，看看人家的思路啥的。

# 9.VUE组态-支持拖动

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/e533ad1e6b0f4253a9ab010929d9a6d9~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=FZfbzZFiaJlew8c6HQUOxTyjoNc%3D)



介绍：个人基于vue+quasar的web组态，核心代码基于vue，quasar仅仅是为了方便构建
github预览访问如下地址：
https://phynos.github.io/WebTopo/dist/spa

demo：https://phynos.github.io/WebTopo/dist/spa/

github：https://github.com/phynos/WebTopo

博客：
https://bloghttps://github.com/phynos/WebTopo.csdn.net/lpch1987/article/details/96288974

# 10.WTScada HTML5组态百软度件

效果：

![img](https://p3-sign.toutiaoimg.com/tos-cn-i-qvj2lq49k0/1d90167193074af3b834acb276c626c0~noop.image?_iz=58558&from=article.pc_detail&x-expires=1676882075&x-signature=z6EVYtRYXpie06njqOieR5oPQPI%3D)



介绍：基于HT框架的web组态软件，HTML5技术，道在线专组态运属行.

demo：http://www.wtscada.com/scada/

github：暂无

# 11、WebGL

介绍：WebGL是目前最为流行的3D绘图协议

# 12、WVGL

介绍：V虚拟现实行业

# 参考文章：

1.基于web组态软件 关于组态软件的设计与开发

2.组态软件认识

# 成功案例（公司）：

**智雨物联：**工业物联网平台 www.krmes.com 采用H5技术 数据采用websocket 无需任何回插件 真正的网页组态 支持多种协议 还有丰富的图形设答计库。

**乐吾乐科技：**2D/3D可视化平台 https://le5le.com/ 乐吾乐关注物联网和智能制造等场景的可视化需求，把高速、复杂、多样、有价值的大数据变成直观易懂、实时显示的可视化知识，努力做最好的开源绘图工具、可视化平台之一。帮助企业最大程度减少研发和运维的成本，致力于0代码实现web组态、大屏可视化等场景，助力企业数字化转型升级。拥有电力能源，物联网，智能制造等场景四千多个图元供选择，且有大量免费解决方案供参考。解决方案：
https://2ds.le5le.com/search

**上海迅饶：**基于HTML5规范的组态软件。配合本公司组态网关(如HMI-2004-A9)或楼控触摸屏等，实现现场数据采集，并直接转为组态画面进行数据实时监控。具有常规通用组态操作方便的特性，另外具有触摸屏组态软件可以运行在嵌入式系统上的特性。比起其它组态软件，最大的亮点是完全基于WEB开发，用户创建的组态工程，可以下载到硬件上运行。智能手机、iPad或者PC可以通过浏览器访问，特别适合应用在BA、智能家居等场合。

**图扑旗下：**图扑 WEB 组态软件，2D和3D都有。

**iNeuOS：**工业物联网平来台自，实现从设备&PLC、云平百台、移度动APP数据链路问闭环。

# 感悟：

物联网平台上，可以有地图支持，实时报警，历史告警，实时数据，组态工业软件功能，数据解析等等，为客户提供导航定位，车辆故障，传感器组图表，工业协议数据变成可读数据;智能家居上，可以有语音识别，视频画面，无线配置等等，为客户提供语音控制，安防控制，蓝牙wifi连接的配置等等服务；工业水处理上，可以有报警功能，温度度量，水为位置，视频监控等等，为客户提供遇到紧急报警，温度过高或者过低提醒，水位高度测量，视频时时查看等等服务；光伏项目中，可以有实时数据，历史数据，当日产能，收益计算，活跃报警，历史报警等功能....

当你自己一点一滴去实现每一个功能而没有参考的时候，你才会发现和别人的差距，开源不易，很多公司基于别人的开源项目二次开发，最后研发自己的软件，贴上自己的广告。大多数看着很相似，但是人家就说是自己实现的，你有什么办法呢？而且这一块开源的非常之少，不过对于物联网公司算是一个大的需求了，也许未来的某一天，学生坐在教室，看着8k屏幕上的实验室或者科创空间的传回来的可视化画面和实时数据的时候，我们也会感到欣慰，致敬每一个在幕后默默付出，用行动践行工业4.0的人！



原文地址：
https://blog.csdn.net/XU441520/article/details/103073202
