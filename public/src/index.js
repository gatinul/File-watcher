import Vue from 'vue'
import axios from 'axios'
import {ay_mssys} from '../base/jstree.js'
import fileWatcher from '../base/fileWatcher';

$(()=>{
    new fileWatcher();
		$("#treeView").jstree({
							'core' : {
									"multiple" : false,
									'data' : ay_mssys,
									'dblclick_toggle': false          //禁用tree的双击展开
							},
							"plugins" : ["search"]
	});
});

var folder = []

var app = new Vue({
	el:'#app',
	data:{
		items:[

		],
		show:false
	},
	methods:{
		testEnv:function(e){
			var target = e.currentTarget,
				tr = $(target).parent().parent().parent(),
				firstTd = tr.find('td').eq(0),
				file = firstTd.text();
			axios.post('/211',{
				'file':file
			}).then((response)=>{
				var data = response.data
				console.log(data)
				if(data == 'success'){
					$(target).removeClass().addClass('btn btn-success')
				}else{
					alert('提交失败')
				}
			})
		}

	}
})

$("#treeView").on("changed.jstree", function (e, data) {
		//console.log("The selected nodes are:");
		//console.log(data.node.id);               //选择的node id
    folder = [];
    folder.push(data.node.text);
    console.log(folder);            //选择的node text
});

$("#treeView").bind("select_node.jstree", function (e, data) {
		if(data.node.id !=1 ){                           //排除第一个节点(2011民事案由)
				data.instance.toggle_node(data.node);        //单击展开下面的节点
		}
});



export {app,folder}
