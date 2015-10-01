Ext.define('AM.model.Klient', {
    extend: 'Ext.data.Model',
    fields: [{name:'first_name',type: 'string'},
             {name:'surname',type: 'string'},
             {name:'post_code',type: 'string'},
             {name:'createAccoutDate',type: 'date', format: 'Y-m-d'},
             {name:'statusAccount',type: 'boolean', defaultValue: true}
             ,{name:'full_name',type:'string',convert: function(v, r) {
                 return r.get('first_name') +" "+ r.get('surname');
             }}
     ]
    ,proxy: {
        type: 'rest',
        url: '/rest/klient/',
        reader: {
            type: 'json'
        }
    }
});