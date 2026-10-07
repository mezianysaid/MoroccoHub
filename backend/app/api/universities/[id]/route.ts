import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
interface University {
  id: string;
  name: string;
  abbreviation: string;
  city: string;
  region: string;
  type: string;
  rating: string;
  reviews: string;
  students: string;
  founded: string;
  image: string;
  description: string;
  academic_programs: string;
}
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const filePath = path.join(
      process.cwd(),
      "data",
      "morocco_universities.csv",
    );

    const csv = fs.readFileSync(filePath, "utf-8");

    const universities = parse(csv, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as University[];

    const university = universities.find(
      (item: any) => String(item.id) === String(id),
    );
    console.log(university);
    if (!university) {
      return NextResponse.json(
        {
          success: false,
          message: "University not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...university,
        academic_programs: university.academic_programs
          ? university.academic_programs
              .split(";")
              .map((program) => program.trim())
              .filter(Boolean)
          : [],

        id: Number(university.id),
        rating: Number(university.rating),
        reviews: Number(university.reviews),
        founded: Number(university.founded),
      },
    });
  } catch (error) {
    console.error("Failed to fetch university:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch university",
      },
      { status: 500 },
    );
  }
}
