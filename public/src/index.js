import Vue from 'vue'
import axios from 'axios'

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

$('#refresh').click(function(event) {
	/* Act on the event */
	axios.get('/refresh').then((response)=>{
		var data = response.data;
		if(data){
			app.show = true;
		}
		var arr = data.split('-');
		var items = []
		for(var i=0;i<arr.length;i++){
			console.log(arr[i])
			var arr1 = arr[i].split(',')
			items.push(arr1);
		}
		app.items = items;
	})
});
