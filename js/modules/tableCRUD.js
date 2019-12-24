layui.config({
    base: "../../js/"
}).extend({
    contextMenu: '/extend/contextMenu',
}).use(['layer', 'table', 'form', 'contextMenu'], function () {
    var $ = layui.jquery;
    var layer = layui.layer;
    var table = layui.table;
    var contextMenu = layui.contextMenu;
    var form = layui.form;

    var mDataList = [];

    var insTb = table.render({
        elem: '#tb1',
        data: [],
        page: true,
        cellMinWidth: 100,
        cols: [[
            { type: 'numbers', title: '#' },
            { field: 'name', title: '姓名' },
            { field: 'phone', title: '手机号' },
            { field: 'sex', title: '性别' },
            { align: 'center', toolbar: '#tableBar', title: '操作', minWidth: 200 }
        ]]
    });

    $('#btnAdd').click(function () {
        showEditModel();
    });

    // 工具条点击事件
    table.on('tool(tb1)', function (obj) {
        var data = obj.data;
        var layEvent = obj.event;
        if (layEvent === 'edit') { // 修改
            showEditModel(data);
        } else if (layEvent === 'del') { // 删除
            for (var i = 0; i < mDataList.length; i++) {
                if (mDataList[i].id == data.id) {
                    mDataList.splice(i, 1);
                    break;
                }
            }
            insTb.reload({ data: mDataList });
        }
    });

    //
    function showEditModel(mData) {
        layer.open({
            type: 1,
            title: mData ? '修改' : '添加',
            content: $('#modelUser').html(),
            success: function (layero, dIndex) {
                form.val('modelUserForm', mData);
                form.on('submit(modelSubmitUser)', function (data) {
                    if (mData) {
                        for (var i = 0; i < mDataList.length; i++) {
                            if (mDataList[i].id == mData.id) {
                                for (var f in data.field) {
                                    mDataList[i][f] = data.field[f];
                                }
                                break;
                            }
                        }
                    } else {
                        data.field.id = new Date().getTime();
                        mDataList.push(data.field);
                    }
                    insTb.reload({ data: mDataList });
                    layer.close(dIndex);
                    return false;
                });
            }
        });
    }

    $('#btnSubmit').click(function () {
        layer.alert(JSON.stringify(mDataList));
    });

    // 重写右键菜单
    contextMenu.bind('#btnCtxMenu', [{
        name: '右键菜单一',
        click: function () {
            layer.msg('点击了右键菜单一', { icon: 1 });
        }
    }, {
        name: '右键菜单二',
        click: function () {
            layer.msg('点击了右键菜单二', { icon: 1 });
        }
    }, {
        icon: 'layui-icon layui-icon-more-vertical',
        name: '右键菜单三',
        subs: [{
            name: '右键子菜单一',
            click: function () {
                layer.msg('点击了右键子菜单一', { icon: 1 });
            }
        }, {
            name: '右键子菜单二',
            click: function () {
                layer.msg('点击了右键子菜单二', { icon: 1 });
            }
        }, {
            name: '右键子菜单三',
            subs: [{
                name: '右键三级菜单一',
                click: function () {
                    layer.msg('点击了右键三级菜单一', { icon: 1 });
                }
            }, {
                name: '右键三级菜单二',
                click: function () {
                    layer.msg('点击了右键三级菜单二', { icon: 1 });
                }
            }]
        }]
    }]);

});
