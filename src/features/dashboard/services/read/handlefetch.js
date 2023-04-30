export default async function handlefetch() {
    let headersList = {
        "Content-Type": "application/json",
        "Authorization": "Bearer 368724751e959036c70dc698348dc5b44d9576fa712210979317749c6dfdbf11"
       }
       
       let response = await fetch("https://gorest.co.in/public/v2/users", { 
         method: "GET",
         headers: headersList
       });
       let data = await response.json();
       return data;
}