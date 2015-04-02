var app = angular.module('myApp', ['ngGrid']);
app.controller('searchCandidateController',['$scope', '$http','$q', '$window', function($scope,$http,$q,$window) {
	$scope.data = {};
	
	$scope.searchCandidate = function() {
		var base_url = window.location.origin;
		var URL = base_url + '/EmployeeReferral/resources/searchCandidate?candidateName='+$scope.candidate.candidateName;
		$http.get(URL).success(function(data, status, headers, config) {
			$scope.data.gridSkills = data;
		}).error(function(data, status, headers, config) {
			alert('error');
		});	
	};
	
	
	
	$scope.gridOptions = { 
		
		 data: 'data.gridSkills' ,
   		 showFilter:false,
   		 showColumnMenu:false,
   		 showFooter:false,
   		 displaySelectionCheckbox:false,
   		 multiSelect: false,
   		 footerVisible: false,
   		 footerTemplate:false,
   		 columnDefs: [
		    {field:'candidateName', displayName:'Name', width: "100", cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a ng-click="editCandidate(row)">{{row.getProperty(\'candidateName\')}}</a></div>'}, 
		    {field:'emailId', displayName:'Email-ID', width: "130"}, 
		    {field:'qualification', displayName:'Qualification', width: "100"}, 
		    {field:'positionName', displayName:'Position', width: "100"}, 
   			{field:'skills', displayName:'Skills', width: "200"},
   			{field:'experience', displayName:'Experience', width: "100"}, 
   			{field:'mobileNo', displayName:'Mobile No', width: "100"},
   			{field:'presentLocation', displayName:'Current Location', width: "100"}, 
   			{field:'pancardNo', displayName:'Pancard No', width: "100"},
   			{field:'passportNo', displayName:'Passport No', width: "110"}
   		    ]
    };
	$scope.editCandidate = function(row) {
		window.console && console.log(row.entity);
		$window.location.href = 'editCandidate.html#?target='+row.entity.candidateName;
		//var candidateName = 
	};
	
}]);
