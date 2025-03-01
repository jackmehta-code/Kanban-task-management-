var app = angular.module('kanbanApp', ['dndLists']);

app.controller('KanbanController', function ($scope) {
    $scope.tasks = {
        "To Do": [],
        "In Progress": [],
        "Done": []
    };

    $scope.addTask = function() {
        if ($scope.newTaskName) {
            $scope.tasks["To Do"].push({ name: $scope.newTaskName });
            $scope.newTaskName = "";
        }
    };

    $scope.deleteTask = function(status, index) {
        $scope.tasks[status].splice(index, 1);
    };
});
