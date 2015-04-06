/**
 * Created by angie on 30/06/2014.
 */

$(function()
{
    $("#btnPdf").click(function()
    {

        var test = $('<object data="/javascripts/Templates/test.pdf" type="application/pdf" width="1000" height="1000"> alt : <a href="/javascripts/Templates/test.pdf">test.pdf</a> </object> ');
        $("#pdfContainer").append(test);


    });



});

