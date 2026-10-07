import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../../lib/prisma";

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.FRONTEND_URL,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}
export async function POST(request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, password, confirmPassword } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      );
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Passwords do not match.",
        },
        { status: 400 },
      );
    }

    // Check password length
    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters.",
        },
        { status: 400 },
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "An account with this email already exists.",
        },
        { status: 409 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
    });

    // Never return the password
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully.",
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 },
    );
  }
}
