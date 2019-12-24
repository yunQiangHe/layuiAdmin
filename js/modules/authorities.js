layui.config({
    base: "../../js/"
}).extend({
    treeTable: '/extend/treeTable/treeTable',
}).use(['layer', 'form', 'treeTable', 'util'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var form = layui.form;
    var util = layui.util;
    var treeTable = layui.treeTable;

    // 渲染表格
    $.get("../../json/authorities.json", function (res) {
        if (res.code == 0) {
            var insTb = treeTable.render({
                elem: '#tableAuth',
                data: res.data,  // 数据
                tree: {
                    iconIndex: 2  // 折叠图标显示在第几列
                },
                cols: [
                    { type: 'numbers' },
                    { type: 'checkbox' },
                    { field: 'id', title: 'ID' },
                    { field: 'name', title: 'name', width: 160 },
                    {
                        field: 'createTime', title: '创建时间', templet: function (d) {
                            return util.toDateString(d.createTime);
                        }, width: 180
                    },
                    { templet: '#demoTreeTableState1', title: '状态', width: 100 },
                    { align: 'center', toolbar: '#demoTreeTableBar1', title: '操作', width: 120 }
                ],
                style: 'margin-top:0;'
            });
        } else {
            layer.msg(res.msg);
        }
    });

    // 添加按钮点击事件
    $('#btnAddAuth').click(function () {
        showEditModel();
    });

    // 显示表单弹窗
    function showEditModel(mAuth) {
        layer.open({
            type: 1,
            area: "500px",
            title: (mAuth ? '修改' : '添加') + '权限',
            content: $('#modelAuth').html(),
            success: function (layero, dIndex) {
                $(layero).children('.layui-layer-content').css('overflow', 'visible');

                var url = mAuth ? '../../json/ok.json' : '../../json/ok.json';
                
                if (mAuth && mAuth.isMenu == '1') {
                    $('#modelAuthForm input[name="isMenu"][value="1"]').prop("checked", true);
                }
                form.val('modelAuthForm', mAuth);  // 回显数据
                // 表单提交事件
                form.on('submit(modelSubmitAuth)', function (data) {
                    if (data.field.parentId == '') {
                        data.field.parentId = '-1';
                    }
                    layer.load(2);
                    $.get(url, data.field, function (res) {
                        layer.closeAll('loading');
                        if (res.code == 200) {
                            layer.close(dIndex);
                            layer.msg(res.msg, { icon: 1 });
                            renderTable();
                        } else {
                            layer.msg(res.msg, { icon: 2 });
                        }
                    }, 'json');
                    return false;
                });
            }
        });
    }

});
