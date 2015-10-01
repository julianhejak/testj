Ext.define('AM.model.Currency', {
    extend: 'Ext.data.Model',
    fields: [{name:'currency',type: 'string'},
             {name:'cours',type: 'number'}]
    ,proxy: {
        type: 'rest',
        url: '/rest/order/enum',
        reader: {
            type: 'json'
        }
    }
});