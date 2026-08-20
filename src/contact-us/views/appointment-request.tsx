"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import FormInput from "@/components/form/form-input";
import FormTextArea from "@/components/form/form-textarea";
import { SubmitBtn } from "@/components/ui/submit-btn";
import { useToast } from "@/hooks/use-toast";
import SuccessModalCard from "@/components/custom/success-modal";
import { AlertTriangle, ClipboardList, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  comment: z.string().optional(),
});

type ModalProps = {
  show: boolean;
  title: string | ReactNode;
  info: string | ReactNode;
  primaryBtnLabel: string;
};

const modalDefaults: ModalProps = {
  show: false,
  title: "",
  info: "",
  primaryBtnLabel: "",
};

const AppointmentRequest = () => {
  const [successModal, setSuccessModal] = useState<ModalProps>(modalDefaults);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },
  });

  const handleCloseOnSuccess = () => {
    setSuccessModal(modalDefaults);
    form.reset();
  };

  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "appointment-request",
          ...payload,
        }),
      });

      if (response.ok) {
        setSuccessModal({
          show: true,
          title: "Request Submitted!",
          info: "Thank you for your appointment request. Our scheduling coordinator will contact you soon to confirm your appointment.",
          primaryBtnLabel: "Okay",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit request. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      <SuccessModalCard
        isOpen={successModal.show}
        title={successModal.title}
        info={successModal.info}
        primaryBtnLabel={successModal.primaryBtnLabel}
        onProceed={() => handleCloseOnSuccess()}
      />

      <div className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Appointment and emergency disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            role="alert"
            className="mb-8 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-900 card-treatment card-sky"
          >
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0"
              aria-hidden="true"
            />
            <p className="text-sm leading-6">
              <strong>Please note:</strong> This form is for requesting an
              appointment. If you need to cancel or reschedule an existing
              appointment, or if you require immediate attention, please
              contact our practice directly.{" "}
              <strong>If this is an emergency, please call 911.</strong>
            </p>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold mb-4">
              Appointment Request
            </span>
            <h1 className="text-4xl underline decoration-sky-500 md:text-5xl font-bold text-gray-800 mb-6">
              Appointment Request
            </h1>
          </motion.div>

          {/* Intro Caption */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 mb-8 card-treatment card-sky"
          >
            <p className="text-lg text-center text-gray-700 leading-relaxed">
              Schedule an appointment
            </p>
          </motion.div> */}

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 card-treatment card-sky"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <ClipboardList
                className="size-6 text-sky-700"
                aria-hidden="true"
              />
              Contact Information
            </h2>
            <p className="text-gray-600 mb-6">
              <span className="text-red-500">*</span> Bold fields are required.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormInput
                      field={field}
                      className="border border-gray-300 bg-transparent shadow-none py-5"
                      type="text"
                      label={
                        <span>
                          <strong>
                            Your Name <span className="text-red-500">*</span>
                          </strong>
                        </span>
                      }
                      placeholder="First and Last"
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormInput
                      field={field}
                      className="border border-gray-300 bg-transparent shadow-none py-5"
                      type="email"
                      label={
                        <span>
                          <strong>
                            Your Email Address{" "}
                            <span className="text-red-500">*</span>
                          </strong>
                        </span>
                      }
                      placeholder="email@example.com"
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormInput
                      field={field}
                      className="border border-gray-300 bg-transparent shadow-none py-5"
                      type="tel"
                      label={
                        <span>
                          <strong>
                            Your Phone Number{" "}
                            <span className="text-red-500">*</span>
                          </strong>
                        </span>
                      }
                      placeholder="(210) 555-1234"
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormTextArea
                      field={field}
                      className="border border-gray-300 bg-transparent shadow-none py-3"
                      label="Comment"
                      placeholder="Any additional information or preferred appointment times..."
                      rows={5}
                    />
                  )}
                />

                <div className="pt-4">
                  <SubmitBtn
                    className="w-full rounded-lg bg-sky-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-sky-800 sm:w-auto"
                    isSubmitting={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Submit Request
                  </SubmitBtn>
                </div>
              </form>
            </Form>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 rounded-xl bg-sky-800 p-8 text-white"
          >
            <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">
              <Phone className="size-5" aria-hidden="true" />
              Need Immediate Assistance?
            </h3>
            <p className="text-sky-100 mb-4">
              Call us directly at{" "}
              <a
                href="tel:2106574641"
                className="font-semibold text-white hover:underline"
              >
                (210) 657-4641
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppointmentRequest;
