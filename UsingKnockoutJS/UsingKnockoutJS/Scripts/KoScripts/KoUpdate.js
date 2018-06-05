
var parsedSelectedStudent = $.parseJSON(selectedStudent);
$(function () {
    modelUpdate.errors = ko.validation.group(modelUpdate);
    ko.validation.init({

        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        errorClass: 'errorStyle',
        messageTemplate: null

    }, true);
    ko.applyBindings(modelUpdate);
});
var modelUpdate = {
    Id: ko.observable(parsedSelectedStudent.Id),
    FirstName: ko.observable(parsedSelectedStudent.FirstName).extend({ required: true }),
    LastName: ko.observable(parsedSelectedStudent.LastName).extend({ required: true }),
    Email: ko.observable(parsedSelectedStudent.Email).extend({ required: true, email: true }),
    CityList: ko.observableArray(['LHR', 'ISB']),
    City: ko.observable(parsedSelectedStudent.City).extend({ required: true }),
    CountryList: ko.observableArray(['PK']),
    Country: ko.observable(parsedSelectedStudent.Country).extend({ required: true }),
    updateStudent: function () {
        try {
            $.ajax({
                url: '/Student/Update',
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