class config {
    constructor(options){
        options = options || {};
        this.eles = {
            body: 'body',
            refresh: "#refresh",
            sure: '#sure',
            treeView: '#treeView'
        };
        this.eventsMap = {
            'click #refresh': 'refresh',
            'click #sure': 'sure'
        };
    }
}

export default config;
