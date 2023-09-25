"use server"
import { Resend } from "resend";
import EmailTemplate from "@/email/EmailTemplate";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
    if (!value || typeof value !== "string") {
        return false;
    }
    return true;
}

const getErrorMessage = (error: unknown): string => {
    
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Unknown error";
    }
    return message;
}

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail) || !validateString(message)) {
        throw new Error("Invalid email or message");
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "prmoriarty212@gmail.com",
            subject: "New message from my Portfolio website",
            reply_to: senderEmail as string,
            react: React.createElement(EmailTemplate, {
                senderEmail: senderEmail as string,
                message: message as string
            })
        });
    } catch (error: unknown) {
            return {
            error: getErrorMessage(error)
        }
        
    }
    return {
        data
    };

}