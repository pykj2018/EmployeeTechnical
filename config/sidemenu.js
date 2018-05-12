var dataArray = [
    [{
        'item': '首页',
        'href': 'pages/homePage.html',
        'submenu': []
    }, {
        'item': '学习资料',
        'href': 'pages/materials.html',
        'submenu': []
    }, {
        'item': '在线考试',
        // 'href': 'pages/onlineTest/push_exam.html',
        'submenu': [{
                'xitem': '正式考试',
                'xhref': 'pages/onlineTest/formalTest.html'
            },
            {
                'xitem': '模拟考试',
                'xhref': 'pages/onlineTest/practiceTest.html'
            }
        ]
    }, {
        'item': '在线培训',
        'href': 'pages/onlineTraining.html',
        'submenu': []
    }, {
        'item': '管理我的资料',
        // 'href': 'pages/train/libraryUpload.html',
        'submenu': [{
                'xitem': '基本信息',
                'xhref': 'pages/manage/baseInfo.html',
            },
            {
                'xitem': '账户管理',
                'xhref': 'pages/manage/accountManage.html'
            }
        ]
    }]
]