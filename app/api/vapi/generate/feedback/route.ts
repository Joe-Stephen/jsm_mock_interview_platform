// app/api/feedback/route.ts
import { createFeedback } from "@/lib/actions/general.action";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { interviewId, userId, transcript, feedbackId } = body;

    const { success, feedbackId: id } = await createFeedback({
      interviewId,
      userId,
      transcript,
      feedbackId,
    });

    return Response.json({ success, feedbackId: id });
  } catch (err) {
    console.error("[API_FEEDBACK_ERROR]", err);
    return new Response("Server Error", { status: 500 });
  }
}
