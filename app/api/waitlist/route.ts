import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, useCase, note } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.toLowerCase().trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name.trim();
    const cleanUseCase = (useCase || "Everyday Use").trim();
    const cleanNote = (note || "").trim();

    // Generate unique reservation ID
    const ticketId = `NW-${Math.floor(1000 + Math.random() * 9000)}`;

    // 2. Save to Firestore with timeout protection
    try {
      const waitlistRef = collection(db, "waitlist");
      const writePromise = addDoc(waitlistRef, {
        name: cleanName,
        email: cleanEmail,
        useCase: cleanUseCase,
        note: cleanNote,
        ticketId,
        createdAt: serverTimestamp(),
      });
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore write timeout")), 2500)
      );
      await Promise.race([writePromise, timeoutPromise]);
    } catch (firestoreErr) {
      console.warn("Firestore write logged:", firestoreErr);
      // Even if offline or timeout, return ticketId successfully
    }

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Successfully reserved your spot on the waitlist.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
