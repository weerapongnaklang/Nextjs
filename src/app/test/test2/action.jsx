"use server";
export async function submitForm(formData) {
  "use server";
  console.log(formData.get("email"));
}

// server
/*
 เราสามารถใส่ function server component เข้ากับ form ได้

*/
