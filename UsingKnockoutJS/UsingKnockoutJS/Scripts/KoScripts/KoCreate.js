
$(function () {
    modelCreate.errors = ko.validation.group(modelCreate);
    $('div.alert-success').hide();
    $('div.alert-danger').hide();
    ko.validation.init({

        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        errorClass: 'errorStyle',
        messageTemplate: null

    }, true);

    ko.applyBindings(modelCreate);
});
var modelCreate = {
    FirstName: ko.observable().extend({ required: true }),
    LastName: ko.observable().extend({ required: true }),
    Email: ko.observable().extend({ required: true, email: true }),
    CityList: ko.observableArray(['LHR', 'ISB']),
    City: ko.observable().extend({ required: true }),
    CountryList: ko.observableArray(['PK']),
    Country: ko.observable().extend({ required: true }),

    createStudent: function () {
        try {

            $.ajax({
                url: '/Student/Create',
                type: 'post',
                dataType: 'json',
                data: ko.toJSON(this), //Here the data wil be converted to JSON
                contentType: 'application/json',
                success: successCallback,
                error: errorCallback
            });

        }
        catch (e) {
            $('div.alert-danger').text(e);
        }
    }
};
function successCallback(data) {
    console.log(data);
    window.location.href = '/Student/Index/';
}
function errorCallback(err) {
    if (!err.responseText) {
        window.location.href = '/Student/Index/';
    }
    else {
        $('div.alert-danger').show();
        $('div.alert-danger').text(err.responseText);
    }
 }
