layui.config({
    base: "../../js/"
}).extend({
    formX: '/extend/formX',
}).use(['form', 'formX'], function () {
    var $ = layui.jquery;
    var form = layui.form;
    var formX = layui.formX;

    // 监听表单提交
    form.on('submit(submitDemo)', function (data) {
        layer.msg('表单验证通过', { icon: 1 });
        return false;
    });

    $('#closeFormBtn').click(function () {
        $(this).parent().parent().parent().remove();
    });

});