export async function POST(req) {
    const { email, password } = await req.json();
  
    if (email === "jfriiali@gmail.com" && password === "12345") {
      return Response.json({ success: true, token: "test-token-123" });
    }
    
    return Response.json({ success: false, message: "Invalid credentials" }, { status: 401 });
  }
  