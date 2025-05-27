import { useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Send } from "lucide-react";
import InputField from "./InputField";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const inputFieldsData = [
    { name: "Name", placeholder: "John Doe", value: name, setValue: setName },
    {
      name: "Email",
      type: "email",
      placeholder: "john@mail.com",
      value: email,
      setValue: setEmail,
    },
    {
      name: "Subject",
      placeholder: "Project Inquiry",
      value: subject,
      setValue: setSubject,
    },
  ];
  const noInputFlag = !name || !email || !subject || !message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (noInputFlag) {
      toast.error("Please fill all fields");
      return;
    }
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
      toast.error("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {/* Name, Email, Subject */}
        {inputFieldsData.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            type={field.type || "text"}
            value={field.value}
            setValue={field.setValue}
          />
        ))}

        {/* MESSAGE */}
        <div>
          <label
            className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
            htmlFor="message"
          >
            Message*
          </label>
          <Textarea
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white min-h-[120px] placeholder:text-gray-400 dark:placeholder:text-gray-600"
            placeholder="Tell me about your project..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className={`w-full  ${
              noInputFlag || isSubmitting
                ? "bg-gray-500/80 hover:bg-gray-500/80 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
            } `}
            disabled={noInputFlag && isSubmitting}
            type="submit"
            title={isSubmitting ? "Submitting" : "Please fill form fields"}
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Submitting..." : "Send Message"}
          </Button>
        </motion.div>
      </div>
    </form>
  );
}
export default ContactForm;
