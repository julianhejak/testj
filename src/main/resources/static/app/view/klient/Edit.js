Ext.define('AM.view.klient.Edit', {
	requires:[
	          'Ext.window.MessageBox'
	      ],
    extend: 'Ext.window.Window',
    alias : 'widget.klientedit',

    title : 'Edit client',
    layout: 'fit',
    closeAction: 'hide',
    autoShow: true,
    items:  [
             {
                 xtype: 'form',
                 items: [
                     {
                         xtype: 'hiddenfield',
                         name : 'id',
                         fieldLabel: 'Id'
                     },
                     {
                    	 fieldLabel: 'Data',
                    	 xtype:'datefield',
                         format:'Y-m-d',
                         name: 'createAccoutDate'
                     },
                     {
                    	 fieldLabel: 'First Name',
                         xtype: 'textfield',
                         name : 'first_name',
                         allowBlank:false,
                         msgTarget: 'under'
                         ,blankText: 'Please write the name'
                     },
                     {
                         fieldLabel: 'Surname',
                         xtype: 'textfield',
                         name : 'surname',
                         allowBlank:false,
                         msgTarget: 'under', 
                         blankText: 'Please write the surname'
                     },
                     {
                         fieldLabel: 'Post code',
                         xtype: 'textfield',
                         name : 'post_code',
                         emptyText: '00-000',
                         maskRe: /[\d\-]/,
                         regex: /^\d{2}-\d{3}$/,
                         regexText: 'Must be in the format 00-000',
                         allowBlank:false,
                         msgTarget: 'under'
                        ,blankText: 'Please write post code'
                     },
                     {
                    	 fieldLabel: 'Status',
                    	 xtype:'checkboxfield',
                    	 //inputValue: 'statusAccount',
                         name: 'statusAccount'
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