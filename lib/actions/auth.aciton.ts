"use server";
export async function signUp(params: SignUpParams) {
  try {
    const { uid, name, email } = params;
    const userRecord = await db.collection("users").doc(uid).get();
  } catch (error: any) {
    console.error("Error while signing up:", error);
    if (error.code === "auth/email-already-exists.") {
      return { success: false, message: "This email is already in use." };
    }
    return { success: false, message: "Failed to create an account." };
  }
}
