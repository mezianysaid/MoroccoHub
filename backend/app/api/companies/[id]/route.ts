import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
interface Company {
  id: string;
  name: string;
  industry: string;
  type: string;
  city: string;
  rating: string;
  reviews: string;
  founded: string;
  employees: string;
  description: string;
  website: string;
  phone: string;
  address: string;
  services: string;
}
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const filePath = path.join(process.cwd(), "data", "morocco_companies.csv");

    const csv = fs.readFileSync(filePath, "utf-8");

    const companies = parse(csv, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as Company[];

    const company = companies.find(
      (item: any) => String(item.id) === String(id),
    );
    console.log(company);
    if (!company) {
      return NextResponse.json(
        {
          success: false,
          message: "Company not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...company,
        services: company.services
          ? company.services
              .split(";")
              .map((program) => program.trim())
              .filter(Boolean)
          : [],

        id: Number(company.id),
        rating: Number(company.rating),
        reviews: Number(company.reviews),
        founded: Number(company.founded),
      },
    });
  } catch (error) {
    console.error("Failed to fetch company:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch company",
      },
      { status: 500 },
    );
  }
}
