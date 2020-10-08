# layui模版

1. 容器改变/窗口改变重新渲染echarts
2. layer皮肤制作说明
```
【第一步】：命名文件夹
在layer的skin目录建立一个文件夹，假设您将该文件夹命名为：yourskin
 
【第二步】：创建样式等文件
在yourskin文件夹下建立一个单独的样式文件，务必命名为：style.css。并且你可能用到的图片也要存放在该文件夹下
 
【第三步】：书写样式
/*  
通过body前缀，是为了确保你皮肤的优先级
你可以通过调试工具重置更多样式 
*/
body .layer-ext-yourskin .layui-layer-title{}
body .layui-ext-yourskin .layui-layer-btn{}
body .layui-ext-yourskin .layui-layer-btn a{}
 
【第四步】：调试
通过全局配置看看你的皮肤定义的如何：
layer.config({
  extend: 'myskin/style.css', //加载您的扩展样式
  skin: 'layer-ext-yourskin'
});
layer.alert('layer皮肤-Yourskin');
 
【最后一步】：发布
1. 现在你已经成功制作了一个皮肤了，如果你觉得它很美，你可以共享出更多的人使用。
2. 那么你应该制作一个简单的页面来介绍你的皮肤，提供尽可能简单的使用说明（就像这个：layer.seaning.com）。
3. 然后将你的皮肤主题页网址通过任意渠道发给贤心（比如可以通过邮箱：xu@sentsin.com
```
3.复杂表单
```
 // 验证表格选择
var checkRows = table.checkStatus('tableFormAdv');
if (checkRows.data.length == 0) {
    layer.tips('请至少选择一位成员', '#tableFormAdv+.layui-table-view .layui-table-header th:eq(0) div', {tips: [1, '#ff4c4c']});
    return false;
}
```
4. page
page: 1
limit: 10
5. 项目结构
```
|-assets
|     |-css               // 样式
|     |-images            // 图片
|     |-js
|         |-common.js     // 公共js，主要配置layui扩展模块位置
|     |-libs              // 第三方库，echarts(图表)、layui
|     |-module            // layui扩展模块，版本更新只用替换此目录
|         |-theme             // 主题资源
|         |-img               // easyweb框架用到的图片
|         |-admin.css         // easyweb框架核心样式
|         |-admin.js          // admin模块
|         |-index.js          // index模块
|         |-********          // 其他扩展模块，不一一列举
|-page              // html页面
|-json              // 模拟数据
|-index.html        // 主页面
```