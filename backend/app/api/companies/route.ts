import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "morocco_companies.csv",
    );

    const csv = fs.readFileSync(filePath, "utf-8");

    const companies = parse(csv, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    return NextResponse.json({
      success: true,
      data: companies,
    });
  } catch (error) {
    console.error("CSV error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to read universities CSV",
      },
      { status: 500 },
    );
  }
}
