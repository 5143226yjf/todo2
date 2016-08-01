/**
 * Created by yangjinfeng on 2016/8/1.
 */
angular.module('myApp', []).controller('myCtrl', function($scope) {

    //正则表达式判断用户名和密码是否合法
    var exp={
        name:/^[\u4e00-\u9fa5]{2,10}$/,
        pass:/^\w{6,12}$/
    };
    $scope.check=function(exp,value){
        return exp.test(value);
    };

    $scope.isLegal = function() {
        if (!$scope.check(exp.name, $scope.name)) {
            alert("请输入正确的中文用户名");
            return false;
        }
        if (!$scope.check(exp.pass, $scope.password)) {
            alert("密码输入错误");
            return false;
        }
        return true;
    };


    //密码调用
    $scope.c=function(){
        if(localStorage.getItem('data')){
            var Data = JSON.parse(localStorage.getItem('data'));
            for(var i = 0; i < Data.name.length; i++) {
                if ( Data.name[i]=$scope.name) {
                    console.log(Data.name[i]);
                    $scope.password= Data.password[i];
                    return $scope.password;
                }
                else{
                    password.value='';
                }
            }
        }
    };
    document.getElementsByName('name').onblur=$scope.c;

    //登录
    $scope.load=function(){

        if($scope.isLegal()){
            alert("登录成功！");
            location.href='./index2.html';
            $scope.conserve($scope.data);
        }
    };


    //数据存储
    $scope.data={
        name:[],
        password:[]
    };
    $scope.conserve=function(data){
        //是否保存密码
        if($scope.checked){
            if(localStorage.getItem('data'))
            {
                data=JSON.parse(localStorage.getItem('data'))
            }
            $scope.data.name.push($scope.name);
            $scope.data.password.push($scope.password);
            localStorage.setItem('data',JSON.stringify($scope.data));
        }
    };

    //切换账号
    $scope.clear=function(){
        $scope.name="";
        $scope.password="";
    }
});