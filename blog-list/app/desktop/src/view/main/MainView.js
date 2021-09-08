Ext.define('BlogList.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',

  viewModel: {
    type: 'mainviewmodel'
    },
    
    items: [{
        title: "Blog List",
        html: '<h1>Blog list view...</h1',
        style: 'background-color: #9c9c9c; color: #f79d16; ',
               
        
    }, {
        title: "Post Editor",
            html: '<h1>Editor view</h1>',
            style: 'background-color: #9c9c9c; color: #f79d16; ',
    }]
   
})
