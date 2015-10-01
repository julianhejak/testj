Ext.define('AM.model.Order', {
    extend: 'Ext.data.Model',
    fields: [{name:'nazwa',type: 'string'},{name:'klientId',type: 'int'},{name:"price",type: 'number'}]
    ,proxy: {
        type: 'rest',
        url: '/rest/order/',
        reader: {
        	root: 'zamowienie',
            type: 'json'
        }
    }
//    ,associations: [
//                   { type: 'belongsTo', model: 'AM.model.Klient' }
//               ]
});