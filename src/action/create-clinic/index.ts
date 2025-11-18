"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { db } from "@/db";
import { clinicsTable, usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export const createClinic = async (name: string) => {
  //Verificar se o usuario esta autenticado
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    throw new Error("Unauthorized");
  }
  const [clinic] = await db.insert(clinicsTable).values({ name }).returning();
  await db.insert(usersToClinicsTable).values({
    userId: session.user.id,
    clinicId: clinic.id,
  });
  // Revalida o dashboard e o layout protegido para atualizar a sessão
  revalidatePath("/dashboard");
  revalidatePath("/(protected)");
};
