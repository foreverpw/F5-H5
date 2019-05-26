import service from './services/service'

window.locationPromise = new Promise((r,j)=>{
  function showPosition(position)
  {
    let {longitude,latitude} = position.coords
    service.geocoderBaidu(longitude,latitude).then(data=>{
      let {province,city} = result.addressComponent
      r({
        province,
        city
      })
    })
  }
  function errFn(position)
  {
  }
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition, errFn,  {timeout: 5000});
  }else{
  
  }
})