import service from './services/service'

function showPosition(position)
{
  let {longitude,latitude} = position.coords
  service.geocoder(longitude,latitude).then(data=>{
    alert(data.formatted_address)
  })
}
function errFn(position)
{
}
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showPosition, errFn,  {timeout: 10000});
}else{

}