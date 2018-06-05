var parsedSelectedStudent = $.parseJSON(selectedStudent);
$(function () {
    ko.applyBindings(modelDelete);
});
var modelDelete = {
    Id: ko.observable(parsedSelectedStudent.Id),
    FirstName: ko.observable(parsedSelectedStudent.FirstName),
    LastName: ko.observable(parsedSelectedStudent.LastName),
    Email: ko.observable(parsedSelectedStudent.Email),
    City: ko.observable(parsedSelectedStudent.City),
    Country: ko.observable(parsedSelectedStudent.Country),
 deleteStudent: function () {
        try {
            $.ajax({
                url: '/Student/Delete',
                type: 'POST',
                dataType: 'json',
                data: ko.toJSON(this),
                contentType: 'application/json',
                success: successCallback,
                error: errorCallback
            });
        } catch (e) {
            window.location.href = '/Student/Index/';
        }
    }
};
function successCallback(data) {
    window.location.href = '/Student/Index/';
}
function errorCallback(err) {
    window.location.href = '/Student/Index/';
}