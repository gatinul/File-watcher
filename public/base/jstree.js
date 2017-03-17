var ay_mssys = [
    {
        "id": "1",
        "text": "选择监听目录",
        "state": {
                    "opened": true,         //展示第一个层级下面的node
                    "disabled": true         //该根节点不可点击
                 },
        "children": [
            {
                "id": "2",
                "text": "public",
								"children":[
										{
											"id":"3",
											"text":"build"
										},
										{
											"id":"4",
											"text":"dist"
										},
										{
											"id":"5",
											"text":"src"
										}
								]
            }, {
                "id": "6",
                "text": "routes"
            }, {
                "id": "7",
                "text": "views"
            }
        ]
    }
]

export {ay_mssys}
