app.config([
  "$routeProvider",
  "$locationProvider",
  function(
    $routeProvider,
    $locationProvider
  ) {
    //route config
    $routeProvider
      .when("/", {
        templateUrl: "templates/home.html",
      })
      .when("/admin/", {
        templateUrl: "templates/admin.html",
      })
      .when("/admin/usermanager", {
        templateUrl: "templates/usermanager.html",
      })
      .when("/admin/userlist", {
        templateUrl: "templates/userlist.html",
      })
      .when("/groups/", {
        templateUrl: "templates/groups.html",
      })
        .when("/connectstudents/", {
        templateUrl: "templates/connectstudents.html",
      })
      .when("/participants/:url", {
        templateUrl: "templates/connectstudents.html",
    })
    .when("/studentsaddremove/:url", {
        templateUrl: "templates/studentsaddremove.html",
      })
       .when("/courses/", {
        templateUrl: "templates/courses.html",
      })
       .when("/courses/:name/assignment/:id", {
        templateUrl: "templates/assignment.html",
      })
       //
       .when("/courses/:id", {
        templateUrl: "templates/course.html",
      })
        .when("/courses/:type/:id", {
        templateUrl: "templates/course.html",
      })
       // static course, to be updated with dynamic course url
      .when('/courses/testcourse', {
          templateUrl: 'templates/course.html',
      })
      .when("/dash", {
        templateUrl: "templates/dash.html"
      })
      .when("/myprofile/", {
        templateUrl: "templates/privateprofile.html",
      })
      .when("/profile/:url", {
        templateUrl: "templates/publicprofile.html",
      })
      .when("/chat/", {
        templateUrl: "templates/chat_template.html",
      })
      .when("/resources/", {
        templateUrl: "templates/resources.html",
      })
      .otherwise({
        redirectTo: "/"
      });

    $locationProvider.html5Mode(true);
  }
])

.constant('settings', {
  'templates': '/templates/',
  'widgets': '/widgets/'
});
