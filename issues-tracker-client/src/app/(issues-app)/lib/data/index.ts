"use server";

import { revalidatePath } from "next/cache";
import { ISSUE_SERVICES_URL } from "@/app/common/constants/constants";

export interface CreateIssue {
  userId: number;
  title: string;
  description: string;
}

export interface Issues {
  id: number;
  userId: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function issuesByUserAction(userId: number): Promise<Issues[]> {
  const results = await fetch(`${ISSUE_SERVICES_URL}/issues/${214}`, {
    cache: "no-store",
  });
  return results.json();
}

export async function createIssueAction(data: CreateIssue) {
  await fetch(`${ISSUE_SERVICES_URL}/issues`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidatePath("/issues");
}
