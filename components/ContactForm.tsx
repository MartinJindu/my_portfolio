"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const className =
  "bg-white text-black rounded-sm border-2 border-amber-400 px-2 py-1 focus:ring-2 focus:outline-none focus:ring-amber-500";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.error("EmailJS environment variables are missing!");
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      console.log(formData);

      await emailjs.sendForm(emailjsServiceId, emailjsTemplateId, form, {
        publicKey: emailjsPublicKey,
      });
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setIsSubmitting(false);
      console.error("Failed to send message:", error);
      alert("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const noInputDisableButton = !name || !email || !subject || !message;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-3 items-center space-y-4 w-full max-w-md"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="name">Name</label>
        <input
          aria-label="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={className}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          aria-label="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={className}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="subject">Subject</label>
        <input
          aria-label="subject"
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className={className}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="message">Message</label>
        <textarea
          rows={5}
          aria-label="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={className}
        />
      </div>
      <button
        type="submit"
        className={`px-6 py-3  rounded-lg font-semibold text-lg  focus:ring-2 focus:outline-none focus:ring-blue-500 transition ${
          noInputDisableButton || isSubmitting
            ? "bg-amber-500/50 cursor-not-allowed"
            : "bg-amber-500 hover:bg-amber-600 cursor-pointer"
        }`}
        disabled={noInputDisableButton && isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};
export default ContactForm;
