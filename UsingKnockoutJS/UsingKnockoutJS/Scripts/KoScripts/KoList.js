$(function () {
    ko.applyBindings(modelView);
    modelView.viewStudents();
});
var modelView = {
    Students: ko.observableArray([]),
    viewStudents: function () {
        var thisObj = this;
        try {
            $.ajax({
                url: '/Student/ListStudents',
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    thisObj.Students(data); //Here we are assigning values to KO Observable array
                },
                error: function (err) {
                    alert(err.status + " : " + err.statusText);
                }
            });
        } catch (e) {
            window.location.href = '/Student/Index/';
        }
    }
};