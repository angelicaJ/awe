var memcached  = require('memcached');
var couchbase = require('couchbase');
/*
var connection = new couchbase.Connection (
    {
         "user": "Administrator",
         "password": "Frog1234",
         "host": "http://localhost:8091",
         "bucket":"aFrame"
    },
    function(err){
        if(err)
        {
            throw ("Error de conexion: " + err);
        }
        else
        {
            console.log("Conexión exitosa");
        }
    });
  */
var memjs = require('memjs')
var client = memjs.Client.create(process.env.KUROBASE_URL, {

});

/*
var baseview = require('baseview')(
    {
        url: process.env.KUROBASE_URL,
        bucket: process.env.KUROBASE_BUCKET
    }
);
*/

var db = new couchbase.Connection({
    host: process.env.KUROBASE_URL,
    bucket: process.env.KUROBASE_BUCKET,
    password: process.env.KUROBASE_PASS
});


function buckets()
{
    console.log("------");
    console.log("ssss " + db.bucket);

    baseview.view('dev_Test', 'Demo', function(data, err)
    {
        console.log('Resultados: ' + err, data);
    });

}

exports.Buckets = buckets;