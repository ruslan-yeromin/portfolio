"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { useTranslations } from "next-intl";
import CustomButton from "./CustomButton";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollSection } from "@/types/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

const Contact = () => {
  const t = useTranslations("Contact");
  const { ref } = useScrollSection("Contact");
  const { pending } = useFormStatus();

  return (
    <motion.section
        ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle title={t("title")} />
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        {t("text-before")}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>
        {t("text-after")}
      </p>

      <form className="mt-10 flex flex-col" 
        action={async (formData) => {
          const {data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error)
            return;
          }
          toast.success("Email sent successfully")
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder={t("email")}
        />
        <textarea
          name="message"
          required={true}
          maxLength={5000}
          className="h-52 my-3 p-4 rounded-lg border border-black/10"
          placeholder={t("message")}
        />
        <SubmitBtn />

      </form>
    </motion.section>
  );
};

export default Contact;
