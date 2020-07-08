var gzCountListHtml = "";
var gzCountListHtml2 = "";
var gzCountListHtml3 = "";
var gzCountListHtml4 = "";
let loadFlag1 = true;
let loadFlag2 = false;
let loadFlag3 = false;
let loadFlag4 = false;
let loadFlagIndex1 = 1;
let loadFlagIndex2 = 1;
let loadFlagIndex3 = 1;
let loadFlagIndex4 = 1;

let gzIndex = 0
let gzIndex2 = 0
let teamIndex = 0;

$('.gzCountList').dropload({
    scrollArea: $('.gzCountList'),
    domUp: {
        // domClass   : 'dropload-up',
        // domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
        // domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
        // domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
    },
    domDown: {
        domClass: 'dropload-down',
        //domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
    },
    loadUpFn: function (me) {
        me.resetload();
    },
    loadDownFn: function (me) {
        $.ajax({
            type: 'GET',
            url: '/loadGZ?gzIndex='+gzIndex+"&flag=1",
            success: function (data) {
            	gzIndex++;
                var result = "";
                data =JSON.parse(data)
                var arrLen = data.length;
                if (arrLen > 0) {
                    for (var i = 0; i < data.length; i++) {
                        result += '<div class="gzDetailTxt">' +
                            '<div>' + data[i].number + '</div>' +
                            '<div>' + data[i].data + '</div>' +
                            '</div>';
                    }
                    // 如果没有数据
                } else {
                    // 锁定
                    me.lock();
                    // 无数据
                    me.noData();
                }
                // 为了测试，延迟1秒加载
                setTimeout(function () {
                    // 插入数据到页面，放到最后面
                    $('.countListBox').append(result);
                    // 每次数据插入，必须重置
                    me.resetload();
                }, 1000);
            }
        })
    },
    threshold: 50
});
$('.gzCountList2').dropload({
    scrollArea: $('.gzCountList2'),
    domUp: {
        // domClass   : 'dropload-up',
        // domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
        // domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
        // domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
    },
    domDown: {
        domClass: 'dropload-down',
        domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
    },
    loadUpFn: function (me) {
        me.resetload();
    },
    loadDownFn: function (me) {
    	$.ajax({
            type: 'GET',
            url: '/loadGZ?gzIndex='+gzIndex2+"&flag=3",
            success: function (data) {
            	gzIndex2++;
                var result = "";
                data =JSON.parse(data)
                var arrLen = data.length;
                if (arrLen > 0) {
                    for (var i = 0; i < data.length; i++) {
                        result += '<div class="gzDetailTxt">' +
                            '<div>' + data[i].number + '</div>' +
                            '<div>' + data[i].data + '</div>' +
                            '</div>';
                    }
                    // 如果没有数据
                } else {
                    // 锁定
                    me.lock();
                    // 无数据
                    me.noData();
                }
                // 为了测试，延迟1秒加载
                setTimeout(function () {
                    // 插入数据到页面，放到最后面
                    $('.countListBox2').append(result);
                    // 每次数据插入，必须重置
                    me.resetload();
                }, 1000);
            }
        })
    },
    threshold: 50
});
$('.gzCountList3').dropload({
    scrollArea: $('.gzCountList3'),
    domUp: {
        // domClass   : 'dropload-up',
        // domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
        // domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
        // domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
    },
    domDown: {
        domClass: 'dropload-down',
        domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
    },
    loadUpFn: function (me) {
        me.resetload();
    },
    loadDownFn: function (me) {
            $.ajax({
                type: 'GET',
                url: '/getData3',
                dataType: 'json',
                success: function (data) {
                    var result = "";
                    var arrLen = data.length;
                    if (arrLen > 0) {
                        for (var i = 0; i < data.length; i++) {
                            result += '<div class="gzDetailTxt3">' +
                                '<div>' + data[i].code + '</div>' +
                                '<div>' + data[i].add + '</div>' +
                                '<div>' + data[i].time + '</div>' +
                                '</div>';
                        }
                        // 如果没有数据
                    } else {
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function () {
                        // 插入数据到页面，放到最后面
                        $('.countListBox3').append(result);
                        // 每次数据插入，必须重置
                        me.resetload();
                    }, 1000);
                }
            })
    },
    threshold: 50
});
$('.gzCountList4').dropload({
    scrollArea: $('.gzCountList4'),
    domUp: {
        // domClass   : 'dropload-up',
        // domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
        // domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
        // domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
    },
    domDown: {
        domClass: 'dropload-down',
        domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
    },
    loadUpFn: function (me) {
        me.resetload();
    },
    loadDownFn: function (me) {
            $.ajax({
                type: 'GET',
                url: '/getData3',
                dataType: 'json',
                success: function (data) {
                    var result = "";
                    var arrLen = data.length;
                    if (arrLen > 0) {
                        for (var i = 0; i < data.length; i++) {
                            result += '<div class="gzDetailTxt4">' +
                                '<div>' + data[i].code + '</div>' +
                                '<div>' + data[i].add + '</div>' +
                                '<div>' + data[i].time + '</div>' +
                                '</div>';
                        }
                        // 如果没有数据
                    } else {
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function () {
                        // 插入数据到页面，放到最后面
                        $('.countListBox4').append(result);
                        // 每次数据插入，必须重置
                        me.resetload();
                    }, 1000);
                }
            })
    },
    threshold: 50
});
$('.teamListData').dropload({
    scrollArea: $('.teamListData'),
    domUp: {
        // domClass   : 'dropload-up',
        // domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
        // domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
        // domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
    },
    domDown: {
        domClass: 'dropload-down',
        domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
        domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        domNoData: '<div class="dropload-noData">暂无数据</div>'
    },
    loadUpFn: function (me) {
        me.resetload();
    },
    loadDownFn: function (me) {
        $.ajax({
            type: 'GET',
            url: '/team?index='+teamIndex,
            success: function (data) {
            	teamIndex++;
                var result = "";
                data =JSON.parse(data)
                var arrLen = data.length;
                if (arrLen > 0) {
                    for (var i = 0; i < data.length; i++) {
                        result += '<div class="myTeamList">' +
                            '<div>' + data[i].data + '</div>' +
                            '<div>' + data[i].balance + '</div>' +
                            '<div>' + data[i].address + '</div>' +
                            '</div>';
                    }
                    // 如果没有数据
                } else {
                    // 锁定
                    me.lock();
                    // 无数据
                    me.noData();
                }
                // 为了测试，延迟1秒加载
                setTimeout(function () {
                    // 插入数据到页面，放到最后面
                    $('.teamListBox').append(result);
                    // 每次数据插入，必须重置
                    me.resetload();
                }, 1000);
            }
        })

    },
    threshold: 50
});

