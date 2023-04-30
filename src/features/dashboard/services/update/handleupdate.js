export default async function updated(id,name,email,gender,stat) {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": "Bearer 368724751e959036c70dc698348dc5b44d9576fa712210979317749c6dfdbf11",
       }
       
       let bodyContent = JSON.stringify({
         "name": name,
         "email": email,
         "gender": gender,
         "status":stat
       });
       
       let response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, { 
         method: "PUT",
         body: bodyContent,
         headers: headersList
       });
       let res_status = response.status;
       let data =await response.json();
       return {"status":res_status,"data":data};
}