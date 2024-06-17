export const getSingleService=async(id)=>{
  const res = await  fetch(`https://car-doctor-98lz.vercel.app/services/api/${id}`)
  const service = await res.json()
  return service;
}