export default async function deleted(id) {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": "Bearer 368724751e959036c70dc698348dc5b44d9576fa712210979317749c6dfdbf11",
       }
           
       let response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, { 
         method: "DELETE",
         headers: headersList
       });
       let res_status = response.status;

       return {"status":res_status};
}