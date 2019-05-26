import service from './services/service'

function showPosition(position)
{
  let {longitude,latitude} = position.coords
  window.locationPromise = service.geocoderBaidu(longitude,latitude).then(data=>{
    let {province,city} = result.addressComponent
    return {
      province,
      city
    }
  })
}
function errFn(position)
{
}
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition, errFn,  {timeout: 10000});
}else{

}