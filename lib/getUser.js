import { auth } from "../auth";

export default async function getUser() {
  try {
    const session = await auth();
    return session; // You can now return the session object
  } catch (error) {
    console.error("Failed to get user session:", error);
    return null;
  }
}
