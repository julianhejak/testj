Ext.define('AM.view.klient.KlientPanel' ,{
	extend: 'Ext.tab.Panel',
    alias : 'widget.klientpanel',
    width: 400,
    height: 400,
    items: [{
        title: 'Client'
        ,xtype: 'klientlist'
    }, {
        title: 'Order',
        xtype: 'orderlist'
    }]
});

