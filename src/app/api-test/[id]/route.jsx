export async function GET(request, { params }) {
  console.log("invoked");
  return Response.json({
    name: "RulabieRuby",
    id: params.id,
  });
}

// ในโฟลเดอร์เดียวกัน ห้ามมี route ก้บ page อยู่ด้วยกัน มันจะ config จะเลือก page ก่อน
