/**
 * Created by yangjinfeng on 2016/7/29.
 */
angular.module('myApp', []).controller('todosCtrl', function($scope) {
    $scope.todos = [
        {time:'21:00',title:'睡觉',content:'傻逼'},
        {time:'7:00',title:'吃饭',content:'傻逼'},
        {time:'8:00',title:'学习',content:'傻逼'}
    ];

    //初始化
    (function(){
        if(localStorage.getItem("todos")){
           $scope.todos=JSON.parse(localStorage.getItem('todos'));
        }
        else{
            localStorage.removeItem('todos');
        }
    })();

    //添加
    $scope.add=function(){
        $scope.message=confirm("你确定要添加并保存吗？");
        if($scope.message==true){
            var b={
                time:$scope.time,
                title:$scope.title
            };
            $scope.todos.push(b);
            $scope.conserve($scope.todos);
        }
        else{
            alert("你已取消保存");
        }
    };

    //保存
    $scope.conserve=function(todos){
        if(Array.isArray(todos)){
            if(localStorage.getItem('todos'))
            {
                todos=JSON.parse(localStorage.getItem('todos'))
            }
            localStorage.setItem('todos',JSON.stringify(todos));
        }
    };

    //清除
    $scope.delete=function(){
        $scope.message=confirm("你确定要清除？");
        if($scope.message==true){
            $scope.title="";
            $scope.time="";
            $scope.content="";
            localStorage.removeItem('todos');
        }
       else{
            alert("你已取消删除");
        }
    };

    //点击事件
   /* $scope.gainer=function(x){
        $scope.title= x.title;
        $scope.time= x.time;
        $scope.content= x.content
    };*/
    $scope.gainer=function(index){
        $scope.title=$scope.todos[index].title;
        $scope.time=$scope.todos[index].time;
        $scope.content=$scope.todos[index].content;
    };

});

