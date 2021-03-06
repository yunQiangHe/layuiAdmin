layui.config({
	base: "../js/"
}).extend({
	echarts: '/extend/echarts',
	echartsTheme: '/extend/echartsTheme'
}).use(['carousel', 'jquery', 'element', 'echarts', 'echartsTheme'], function () {
	var carousel = layui.carousel,
		element = layui.element,
		echarts = layui.echarts,
		echartsTheme = layui.echartsTheme,
		$ = layui.jquery;

	// 添加bodyTab 
	$(".layadmin-shortcut a").on("click", function () {
		window.parent.addTab($(this));
	})

	//常规轮播
	$(".layadmin-carousel").each(function (index, el) {
		carousel.render({
			elem: el,
			width: "100%",//设置容器宽度
			arrow: "none",//显示箭头
			autoplay: false,
			indicator: "outside",
			trigger: "hover"
		})
	});

	/**
	 * 百度地图
	 */
	// 指定图表的配置项和数据
	var option1 = { title: { text: "今日流量趋势", x: "center", textStyle: { fontSize: 14 } }, tooltip: { trigger: "axis" }, legend: { data: ["", ""] }, xAxis: [{ type: "category", boundaryGap: !1, data: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"] }], yAxis: [{ type: "value" }], series: [{ name: "PV", type: "line", smooth: !0, itemStyle: { normal: { areaStyle: { type: "default" } } }, data: [111, 222, 333, 444, 555, 666, 3333, 33333, 55555, 66666, 33333, 3333, 6666, 11888, 26666, 38888, 56666, 42222, 39999, 28888, 17777, 9666, 6555, 5555, 3333, 2222, 3111, 6999, 5888, 2777, 1666, 999, 888, 777] }, { name: "UV", type: "line", smooth: !0, itemStyle: { normal: { areaStyle: { type: "default" } } }, data: [11, 22, 33, 44, 55, 66, 333, 3333, 5555, 12666, 3333, 333, 666, 1188, 2666, 3888, 6666, 4222, 3999, 2888, 1777, 966, 655, 555, 333, 222, 311, 699, 588, 277, 166, 99, 88, 77] }] }
	var option2 = { title: { text: "访客浏览器分布", x: "center", textStyle: { fontSize: 14 } }, tooltip: { trigger: "item", formatter: "{a} <br/>{b} : {c} ({d}%)" }, legend: { orient: "vertical", x: "left", data: ["Chrome", "Firefox", "IE 8.0", "Safari", "其它浏览器"] }, series: [{ name: "访问来源", type: "pie", radius: "55%", center: ["50%", "50%"], data: [{ value: 9052, name: "Chrome" }, { value: 1610, name: "Firefox" }, { value: 3200, name: "IE 8.0" }, { value: 535, name: "Safari" }, { value: 1700, name: "其它浏览器" }] }] };
	var option3 = { title: { text: "最近一周新增的用户量", x: "center", textStyle: { fontSize: 14 } }, tooltip: { trigger: "axis", formatter: "{b}<br>新增用户：{c}" }, xAxis: [{ type: "category", data: ["11-07", "11-08", "11-09", "11-10", "11-11", "11-12", "11-13"] }], yAxis: [{ type: "value" }], series: [{ type: "line", data: [200, 300, 400, 610, 150, 270, 380] }] };
	var i = [];
	var l = [option1, option2, option3];
	var n = $("#carousel-dataview").children("div");
	var r = function (e) {
		i[e] = echarts.init(n[e], layui.echartsTheme),
			i[e].setOption(l[e]),
			window.onresize = i[e].resize
	}
	if (n[0]) {
		r(0);
		var o = 0;
		carousel.on("change(carousel-dataview)", function (e) {
			r(o = e.index)
		});
	}

	var option4 = { title: { text: "全国的 layui 用户分布", subtext: "不完全统计" }, tooltip: { trigger: "item" }, dataRange: { orient: "horizontal", min: 0, max: 6e4, text: ["高", "低"], splitNumber: 0 }, series: [{ name: "全国的 layui 用户分布", type: "map", mapType: "china", selectedMode: "multiple", itemStyle: { normal: { label: { show: !0 } }, emphasis: { label: { show: !0 } } }, data: [{ name: "西藏", value: 60 }, { name: "青海", value: 167 }, { name: "宁夏", value: 210 }, { name: "海南", value: 252 }, { name: "甘肃", value: 502 }, { name: "贵州", value: 570 }, { name: "新疆", value: 661 }, { name: "云南", value: 8890 }, { name: "重庆", value: 10010 }, { name: "吉林", value: 5056 }, { name: "山西", value: 2123 }, { name: "天津", value: 9130 }, { name: "江西", value: 10170 }, { name: "广西", value: 6172 }, { name: "陕西", value: 9251 }, { name: "黑龙江", value: 5125 }, { name: "内蒙古", value: 1435 }, { name: "安徽", value: 9530 }, { name: "北京", value: 51919 }, { name: "福建", value: 3756 }, { name: "上海", value: 59190 }, { name: "湖北", value: 37109 }, { name: "湖南", value: 8966 }, { name: "四川", value: 31020 }, { name: "辽宁", value: 7222 }, { name: "河北", value: 3451 }, { name: "河南", value: 9693 }, { name: "浙江", value: 62310 }, { name: "山东", value: 39231 }, { name: "江苏", value: 35911 }, { name: "广东", value: 55891 }] }] };
	var myEarth = echarts.init(document.getElementById("LAY-index-pagethree"), layui.echartsTheme);
	myEarth.setOption(option4);
	window.onresize = myEarth.resize;



})
