/**
 * Created by gatinul on 2017/3/17.
 */

import $ from 'jQuery';
import axios from 'axios';
import config from './config';
import base from './base';
import {app,folder} from '../src/index'


class fileWatcher extends base(config) {
    constructor(options) {
        super(options);
        super.bindEvent();
    }
    refresh() {
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
    }
    sure() {
      console.log('sure click success')
      axios.post('/sure',{
        "folder":folder[0]
      }).then((response)=>{

      })
    }
    unbindEvent() {
        super.unbindEvent();
    }
    destroy() {
        super.destroy();
        this.unbindEvent(this.eventsMap);
    }
}

export default fileWatcher;
