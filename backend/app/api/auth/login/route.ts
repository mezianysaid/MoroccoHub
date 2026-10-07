import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    // Validate fields
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        {
          status: 400,
          headers: corsHeaders,
        },
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Find user
    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    // Don't reveal whether the email exists
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "This email does not exist !!!.",
        },
        {
          status: 401,
          headers: corsHeaders,
        },
      );
    }

    // Compare password with hashed password
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "This password in invalid",
        },
        {
          status: 401,
          headers: corsHeaders,
        },
      );
    }

    // JWT secret must exist
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        {
          status: 500,
          headers: corsHeaders,
        },
      );
    }

    // Create JWT
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // Return user without password
    return NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
      {
        status: 200,
        headers: corsHeaders,
      },
    );
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
        headers: corsHeaders,
      },
    );
  }
}
