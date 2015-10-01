Ext.define('AM.controller.Order', {
	requires:[
	          'Ext.window.MessageBox'
	      ],
    extend: 'Ext.app.Controller',
    stores: ['AM.store.Orders'],
    models: ['AM.model.Order'],
    views: [
         'AM.view.order.List',
         'AM.view.order.Edit'
    ],
    refs: [{
        ref: 'orderlist',
        selector: 'viewport orderlist'
    }],
	init: function() {
        this.control({
        	'orderedit button[action=save]': {
                click: this.createOrUpdateOrder
            },
            'actioncolumn': {
            	btnDeleteClick: this.onDeleteOrder,
            	btnEditClick: this.onEditOrder,
            },
        	'viewport orderlist button[itemId=btnCreateOrder]':
            {
                click: this.btnCreateOrder
            }
        });
    },
    onEditOrder: function(view, rowIndex, colIndex, item, e, record) {

    	var viewForm = Ext.widget('orderedit');
	     button = viewForm.down('button[action=save]');
	     viewForm.down('form').loadRecord(record);
	     button.setText('Update');
    	
    },
    onDeleteOrder : function(view, rowIndex, colIndex, item, e, record) {
    	 
        var orderStore = Ext.getStore('AM.store.Orders');
        Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete order?',

         function (btn,text,id){
  		   if (btn == 'yes'){
  			 orderStore.remove(record);
	  		 orderStore.sync();
	  		 orderStore.load();
  		   }
  		 }
          
       );
      },
    btnCreateOrder: function(button) {
        
      var view = Ext.widget('orderedit');
        
    },  
    createOrUpdateOrder: function(button) {
     	
       var win  = button.up('window'),
   	      form   = win.down('form'),
   	      values = form.getValues(),
          store = Ext.getStore('AM.store.Orders'),
          record = form.getRecord();
       
   	   switch (button.getText()){
   		   case 'Save':
   			   store.insert(0,values);
   		       break;
   		   case 'Update':
   		       record.set(values);
   		       store.update();
   		       button.setText('Save');
   	   }
	   
   	   store.sync({
   		        success : function(batch, eOpts){
   		            Ext.Msg.alert('Status', 'Changes saved successfully.');
   		        },
   		        failure : function(record, eOpts){
   		            Ext.Msg.alert('Status', 'Request failed.');
   		        }
   	   });

   	   win.close();
   	   store.load();
   	   
     }
});