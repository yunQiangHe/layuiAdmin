layui.config({
    base: "../js"
}).extend({
    formX: '/extend/formX',
}).use(['form', 'formX'], function () {
    var $ = layui.jquery;
    var form = layui.form;
    var formX = layui.formX;


    var demo1 = xmSelect.render({
        el: '#demo1',
        language: 'zn',
        data: [``
            {name: '张三', value: 1},
            {name: '李四', value: 2},
            {name: '王五', value: 3},
        ]
    })

    document.getElementById('demo1-getValue').onclick = function(){
        //获取当前多选选中的值
        var selectArr = demo1.getValue();
        document.getElementById('demo1-value').innerHTML = JSON.stringify(selectArr, null, 2);
    }
});