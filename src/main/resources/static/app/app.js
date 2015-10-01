Ext.application({
    name: 'AM',
    requires: ['Ext.container.Viewport' ],
    appFolder: 'app',
	controllers: [
			'KlientPanel','Klient','Order'
		],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'klientpanel'
            }
        });
    }
});