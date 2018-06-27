$(function(){
	//表格初始化
	var $saleTale=$('#saleTale');
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		pageList:'[20]',
		height: $('.tableArea').height()-65,
		classes: 'table saleTable table-hover',
		columns:[{
  			field: 'id',
  			title: '序号',
  			align: 'center',
  			valign:'middle',
  			width: '5%',
  			formatter:function(value, row, index){
  				return index + 1;
  			}
    	},{
    		field: 'code',
    		title: '水卡号',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '原用水户名称',
    		valign:'middle'
    	},{
    		field: 'code',
    		title: '原用水户名称证件号',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '现住用水户名称',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '现用水户名称证件号',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '过户日期',
    		valign:'middle'
    	}],
	    data:[{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	}]
	});
	//表格自适应高度
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('.tableArea').height()-65
		});
	});
	$('#searchCondition').focus();
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$('#saleTale').bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('.tabbar input').val('');
		$('#saleTale').bootstrapTable('refresh');
	});
});