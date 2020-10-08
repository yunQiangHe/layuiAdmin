layui.config({
    base: "../../js/"
}).extend({
    dtree: '/extend/dtree',
    dropdown: '/extend/dropdown',
}).use(['layer', 'form', 'dtree', 'util', 'table', 'laydate', 'dropdown'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var form = layui.form;
    var util = layui.util;
    var table = layui.table;
    var laydate = layui.laydate;
    var dtree = layui.dtree;
    var dropdown = layui.dropdown;
    // 渲染表格
    var insTb = table.render({
        elem: '#tableTbTree',
        url: '../../json/user.json',
        page: true,
        cellMinWidth: 100,
        cols: [[
            { type: 'checkbox' },
            { field: 'username', align: 'center', sort: true, title: '账号' },
            { field: 'nickName', align: 'center', sort: true, title: '用户名' },
            { field: 'phone', align: 'center', sort: true, title: '手机号' },
            { field: 'sex', align: 'center', sort: true, title: '性别' },
            {
                sort: true, align: 'center', templet: function (d) {
                    return util.toDateString(d.createTime);
                }, title: '创建时间'
            },
            { align: 'center', toolbar: '#tableBarTbTree', title: '操作', minWidth: 120 }
        ]]
    });

    // 树形渲染
    dtree.render({
        elem: '#treeTbTree',
        url: '../../../json/tree.json',
        type: 'all',
        initLevel: '2',
        dot: false,
        method: 'GET'
    });

    // 树形点击事件
    dtree.on('node("treeTbTree")', function (obj) {
        var data = obj.param;
        layer.msg('你选择了：' + data.nodeId + '-' + data.context);
        insTb.reload({ where: { nodeId: data.nodeId } }, 'data');
    });

    // 搜索按钮点击事件
    form.on('submit(formSubSearchTbLtrt)', function (data) {
        insTb.reload({ where: data.field }, 'data');
    });

    // 时间范围
    laydate.render({
        elem: 'input[name="dateRange"]',
        type: 'date',
        range: true,
        trigger: 'click'
    });



});
