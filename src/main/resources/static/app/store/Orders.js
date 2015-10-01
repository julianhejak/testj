Ext.define('AM.store.Orders', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Order',
    autoLoad: true,
    noCache:false,
    storeId: 'Orders'
//    ,sorters: [{
//        property: 'id',
//        direction: 'ASC'
//    }]
});