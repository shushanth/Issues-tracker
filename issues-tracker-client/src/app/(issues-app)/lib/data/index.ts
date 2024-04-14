"use server";

import { revalidatePath } from "next/cache";

const ISSUES_URL = "http://localhost:4000";
interface CreateIssue {
  userId: number;
  title: string;
  description: string;
}

interface Issues {
  id: number;
  userId: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function issuesByUser(userId: number): Promise<Issues[]> {
  const results = await fetch(`${ISSUES_URL}/issues/${214}`, {
    cache: "no-store",
  });
  return results.json();
}

export async function createIssue(data: CreateIssue) {
  await fetch(`${ISSUES_URL}/issues`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // revalidatePath("/issues");
}
