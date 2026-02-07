export async function onRequestPost(context) {
  const COUNT = await context.env.POST_COUNTER.get("count") || "0"
  const NEW_COUNT = parseInt(COUNT) + 1
  await context.env.POST_COUNTER.put("count", NEW_COUNT.toString())
  
  return new Response(JSON.stringify({
    success: true,
    total_posts: NEW_COUNT
  }), {
    headers: { 
      "content-type": "application/json",
      "access-control-allow-origin": "*"
    }
  })
}

export async function onRequestGet(context) {
  const COUNT = await context.env.POST_COUNTER.get("count") || "0"
  
  return new Response(JSON.stringify({
    total_posts: parseInt(COUNT)
  }), {
    headers: { 
      "content-type": "application/json",
      "access-control-allow-origin": "*"
    }
  })
}
