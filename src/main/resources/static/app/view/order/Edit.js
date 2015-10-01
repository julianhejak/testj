Ext.define('AM.view.order.Edit', {
	requires:[
	          'AM.view.order.ListClientsBox'
	      ],
    extend: 'Ext.window.Window',
    alias : 'widget.orderedit',
    title : 'Edit order',
    layout: 'fit',
    autoShow: true,
    frame: true,
    items:  [
             {
                 xtype: 'form',
                 defaults: {
                     allowBlank: false,
                     allowOnlyWhitespace: false
                 },
                 items: [
                     {
                         xtype: 'hiddenfield',
                         name : 'id',
                         fieldLabel: 'Id'
                     },
                     {
                         xtype: 'textfield',
                         name : 'nazwa',
                         fieldLabel: 'Name order',
                         regex: /[a-zA-Z0-9]+/
                     },
                     { 
                         xtype: 'listClientsBox',
                         fieldLabel: 'Client'
                     },
                     {
                         xtype: 'textfield',
                         name : 'price',
                         fieldLabel: 'Price'
//                         ,maskRe: /^\$?\d+((,\d{3})+)?(\.\d+)?$/,
//                         regex: /^\$?\d+((,\d{3})+)?(\.\d+)?$/,
//                         regexText: 'Error format'
                     }
                 ]
             }
         ],

     buttons : [
             {
                 text: 'Save',
                 action: 'save'
             },
             {
                 text: 'Cancel',
                 handler:function () {
                     this.up('window').close();
                 }
             }
         ]
});