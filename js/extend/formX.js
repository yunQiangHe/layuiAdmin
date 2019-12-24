/**
 * 表单扩展模块
 */
layui.define(["form"], function (b) {
    var e = layui.jquery;
    var c = layui.form;
    var a = {
        phoneX: "请输入正确的手机号",
        emailX: "邮箱格式不正确",
        urlX: "链接格式不正确",
        numberX: "只能填写数字",
        dateX: "日期格式不正确",
        identityX: "请输入正确的身份证号",
        psw: "密码必须5到12位，且不能出现空格",
        equalTo: "两次输入不一致",
        digits: "只能输入整数",
        digitsP: "只能输入正整数",
        digitsN: "只能输入负整数",
        digitsPZ: "只能输入正整数和0",
        digitsNZ: "只能输入负整数和0",
        minlength: "最少输入{minlength}个字符",
        maxlength: "最多输入{maxlength}个字符",
        min: "值不能小于{min}",
        max: "值不能小于{max}"
    };
    var f = {
        phoneX: function (i, h) {
            var g = /^1\d{10}$/;
            if (i && !g.test(i)) {
                return a.phoneX
            }
        },
        emailX: function (i, h) {
            var g = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (i && !g.test(i)) {
                return a.emailX
            }
        },
        urlX: function (i, h) {
            var g = /(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/;
            if (i && !g.test(i)) {
                return a.urlX
            }
        },
        numberX: function (h, g) {
            if (h && isNaN(h)) {
                return a.numberX
            }
        },
        dateX: function (i, h) {
            var g = /^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/;
            if (i && !g.test(i)) {
                return a.dateX
            }
        },
        identityX: function (i, h) {
            var g = /(^\d{15}$)|(^\d{17}(x|X|\d)$)/;
            if (i && !g.test(i)) {
                return a.identityX
            }
        },
        psw: function (h, g) {
            if (h && !/^[\S]{5,12}$/.test(h)) {
                return a.psw
            }
        },
        equalTo: function (h, g) {
            if (h != e(e(g).attr("lay-equalTo")).val()) {
                var i = e(g).attr("lay-equalToText");
                return i ? i : a.equalTo
            }
        },
        digits: function (h, g) {
            if (h && !(typeof h === "number" && h % 1 === 0)) {
                return a.digits
            }
        },
        digitsP: function (i, h) {
            var g = /^[1-9]\d*$/;
            if (i && !g.test(i)) {
                return a.digitsP
            }
        },
        digitsP: function (i, h) {
            var g = /^[1-9]\d*$/;
            if (i && !g.test(i)) {
                return a.digitsP
            }
        },
        digitsP: function (i, h) {
            var g = /^[1-9]\d*$/;
            if (i && !g.test(i)) {
                return a.digitsP
            }
        },
        digitsN: function (i, h) {
            var g = /^-[1-9]\d*$/;
            if (i && !g.test(i)) {
                return a.digitsN
            }
        },
        digitsPZ: function (i, h) {
            var g = /^\d+$/;
            if (i && !g.test(i)) {
                return a.digitsPZ
            }
        },
        digitsNZ: function (i, h) {
            var g = /^-[1-9]\d*|0/;
            if (i && !g.test(i)) {
                return a.digitsNZ
            }
        },
        h5: function (l, k) {
            if (l) {
                var j = e(k).attr("minlength");
                var i = e(k).attr("maxlength");
                var h = e(k).attr("min");
                var g = e(k).attr("max");
                if (j && l.length < j) {
                    return a.minlength.replace(/{minlength}/g, j)
                }
                if (i && l.length > i) {
                    return a.maxlength.replace(/{maxlength}/g, i)
                }
                if (h && l * 1 < h * 1) {
                    return a.min.replace(/{min}/g, h)
                }
                if (g && l * 1 > g * 1) {
                    return a.max.replace(/{max}/g, g)
                }
            }
        }
    };
    var d = {
        init: function () {
            c.verify(f)
        },
        formVal: function (h, g) {
            e('.layui-form[lay-filter="' + h + '"]').each(function () {
                var j = e(this);
                for (var l in g) {
                    var i = j.find('[name="' + l + '"]');
                    if (i.length > 0) {
                        var k = i[0].type;
                        if (k == "checkbox") {
                            i[0].checked = value
                        } else {
                            if (k == "radio") {
                                i.each(function () {
                                    if (this.value == g[l]) {
                                        this.checked = true
                                    }
                                })
                            } else {
                                i.val(g[l])
                            }
                        }
                    }
                }
            });
            c.render(null, h)
        }
    };
    d.init();
    b("formX", d)
});
