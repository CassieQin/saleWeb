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
    		title: '水表安装地址编号',
    		valign:'middle',
    		formatter: function (value, row, index) {
                return [
                    '<a class="detail ml101" href="javascript:void(0)" title="' + value + '" onclick="viewDetail(\'' + row.id + '\', \'' + value + '\');">' + value + '</a>'
                ].join('');
            }
    	},{
    		field: 'address',
    		title: '水表安装地址',
    		valign:'middle'
    	},{
    		field: 'operate',
    		title: '操作',
    		align: 'center',
    		formatter:function(value, row, index){
  				if(value=='已开户'){
  					var str='<a href="javascript:void(0)" title="编辑" onclick="openAccount();"><i class="glyphicon glyphicon-pencil"></i> 编辑</a>';
  					return str;
  				}else{
  					var str='<a href="javascript:void(0)" class="sale-icon" title="开户" onclick="openAccount();"><i class="fa fa-id-card-o"></i> 开户</a>';
  					return str; 
  				}
  			}
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
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	}]
	});
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('.tableArea').height()-65
		});
	})
	$('#searchCondition').focus();
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$saleTale.bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('#searchCondition').val('');
		$saleTale.bootstrapTable('refresh');
	});
})
//开户
function openAccount() {
    layer.open({
        move: false,
        type: 2,
        title: '开户',
        area: ['900px', '730px'],
        content: 'add.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            layer.close(index);
        }, cancel: function (index) {
            layer.close(index);
        }
    });
}
//查看
function viewDetail(value) {
    layer.open({
        move: false,
        type: 2,
        title: value,
        area: ['900px', '730px'],
        content: 'view.html',
        btn: ['确定','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            layer.close(index);
        }, cancel: function (index) {
            layer.close(index);
        }
    });
}