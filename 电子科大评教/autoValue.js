/*
*
* 电子科大信息管理系统评教脚本
*
* */

$("input[type=radio]").each(function () {
    if ($(this)[0].nextSibling.nodeValue == '很赞同 ') {
        $(this).prop("checked", "checked");
    }
});