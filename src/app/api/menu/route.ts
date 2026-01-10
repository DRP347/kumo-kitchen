import dbConnect from "@/lib/mongodb";
import MenuItem from "@/models/MenuItem";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const items = await MenuItem.find();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 });
  }
}
