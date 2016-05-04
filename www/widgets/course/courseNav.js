app.directive('courseCoursenav', [
  "settings",
  "Course",
  "$location",
  "Assignment",
  "SessionService",
  function(
    settings,
    Course,
    $location,
    Assignment,
    SessionService
  ) {
    return {
      templateUrl: settings.widgets + 'course/courseNav.html',
      link: function(scope, element, attrs) {

        scope.course = "";

        var c = Course.get({_id:scope.course._id,_populate:"assignments"});
        scope.assignments = c.assignments;

        scope.resourcelist =  scope.course.resources;

      	scope.hasAssignment = function(assignments) 
      	{
      		  return (typeof assignments !== 'undefined' && assignments.length > 0);          
      	}

      	scope.hasResource = function(rescourceArray) 
      	{
      		return (typeof rescourceArray !== 'undefined' && rescourceArray.length > 0);
      	}

      	scope.isActive = function(route){
          if(route !== $location.path()){
              if( route.indexOf('participants') >= 0){
                route = route.replace("participants", "studentsaddremove");
                return route === $location.path();
              }
          }
      		return route === $location.path();
      	}
      	
    }
  };
}]);

