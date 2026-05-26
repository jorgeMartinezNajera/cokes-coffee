import { promises as fs } from 'fs'
import path from 'path'

type IncomingOrder = {
  customer: {
    name: string
    email: string
    phone: string
    address: string
    deliveryTime: string
  }
  items: any[]
  total: number
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as IncomingOrder

    const dataDir = path.join(process.cwd(), 'data')
    const ordersPath = path.join(dataDir, 'orders.json')

    // ensure folder exists
    await fs.mkdir(dataDir, { recursive: true })

    // read existing orders
    let orders: any[] = []
    try {
      const content = await fs.readFile(ordersPath, 'utf8')
      orders = JSON.parse(content)
    } catch (e) {
      orders = []
    }

    // create order record
    const id = `ORD-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
    const newOrder = { id, ...body, createdAt: new Date().toISOString() }

    orders.push(newOrder)

    await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2), 'utf8')

    return new Response(JSON.stringify(newOrder), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message ?? 'Unknown error' }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
