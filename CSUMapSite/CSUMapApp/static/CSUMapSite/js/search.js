let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {
      lat: 39.730041,
      lng: -121.846298
    },

  });
  if(bnlat == ""||bnlng ==""){
    }
    else {
        var uluru = {lat: parseFloat(bnlat), lng:parseFloat(bnlng)};
         map = new google.maps.Map(
         document.getElementById('map'), {zoom: 20, center:uluru });
         var marker = new google.maps.Marker({position: uluru, map});
        }   
    }





    //     if("39.72786079343008,-121.84729082054753" == bn){
//     }
//     else if ("39.72747763926558,-121.84696559524535" == bn){
//         var uluru = {lat: 39.72786079343008, lng:-121.84729082054753};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//    else if ("39.729408290689484,-121.84348322002653", bn){
//     var uluru = {lat: 39.729408290689484,lng:-121.84348322002653};
//     map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 20, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map});

//    }
//     if ("39.72881007297421,-121.84433079807523" == bn){
//         var uluru = {lat: 39.72881007297421,lng:-121.84433079807523};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     else if ("39.72863038312888,-121.8498702988007"== bn){
//         var uluru = {lat: 39.72863038312888, lng:-121.8498702988007};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     else if ("39.730658400597356,-121.84885337563796"==bn ){
//         var uluru = {lat:39.730658400597356, lng:-121.84885337563796};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     else if  ("39.730348983900065,-121.84866025658889" == bn){
//         var uluru = {lat:39.730348983900065,lng:-121.84866025658889};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     // done 
//     else if ("39.73075328810629,-121.84867634984298" == bn){
//         var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     else if ("39.73021098881368,-121.84950620550569" == bn){
//         var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     else if ("39.73006225652085,-121.84837326022429" == bn){
//         var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//    else if  ("39.73006225652085,-121.84734597417159" == bn){
//     var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//     map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 20, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map});
//    }
//    else if ("39.730594454593756,-121.8474747202043" == bn){
//     var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//     map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 20, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map});
// }
//     else if ("39.73114727614851,-121.8478498395154" == bn){
//         var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//     else if ("39.72913615803178,-121.84636322673197" == bn){
//         var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     }
//    else if  ("39.729629169986254,-121.8457382720315"==bn){
//     var uluru = {lat: 39.72786079343008, lat:-121.84729082054753};
//     map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 20, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map});
//    }
//    // done below 
//    else if  ("39.72808325310959,-121.845107952913"==bn){
//     var uluru = {lat:39.72808325310959,lng:-121.845107952913};
//     map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 20, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map});
//    }
//     else if ("39.729737639284245,-121.84605477269525" ==bn){
//         var uluru = {lat: 39.729737639284245,lng:121.84605477269525};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});

//     }
//     else if ("39.72966544121481,-121.84477535899515" == bn){
//         var uluru = {lat: 39.72966544121481,lng:-121.84477535899515 };
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});

//     }
//     else if ("39.730024368013574,-121.84516696151132" == bn){
//         var uluru = {lat: 39.730024368013574,lng:-121.84516696151132};
//         map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 20, center: uluru});
//         var marker = new google.maps.Marker({position: uluru, map});
//     } 
//     // ("39.729001215428426,-121.84537617381449", "Trinity Hall"),
//     // ("39.72733418762445,-121.84587939393114", "Student Services Center (SSC)"), 
//     // ("39.73145111066418,-121.84753202886935", "University Housing Office"), 
//     // ("39.72935698981375,-121.84903633993237", "Shurmer Gymnasium"), 
//     // ("39.729608652454175,-121.84834969442456", "Plumas Hall"),
//     // ("39.731016897747175,-121.84535178177333", "Holt Hall"),

//     else {

//     }


