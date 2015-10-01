Ext.define('AM.store.Klienci', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Klient',
    autoLoad: true,
    noCache:false,
    storeId: 'Klienci'
//    ,sorters: [{
//        property: 'id',
//        direction: 'ASC'
//    }]
});