"use server";

import { ISSUE_SERVICES_URL } from "@/app/common/constants/constants";

import { cookies } from "next/headers";

interface UserLogin {
  email: string;
  password: string;
}

type RegisterUser = UserLogin & {
  firstName: string;
  lastName: string;
};

interface UserLoginResponse {
  access_token: string;
}

export const loginUserAction = async (user: UserLogin) => {
  try {
    const result = await fetch(`${ISSUE_SERVICES_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const respResult: UserLoginResponse = await result.json();
    const tokenResponse = respResult.access_token;
    cookies().set("token", tokenResponse, {
      secure: true,
      httpOnly: true,
    });
  } catch (error) {
    return {
      Error: error,
    };
  }
};
