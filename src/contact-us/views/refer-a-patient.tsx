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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Building2, UserRound } from "lucide-react";

const formSchema = z.object({
  // Practice Information
  doctorName: z.string().min(2, { message: "Please enter the doctor's name." }),
  practiceName: z.string().optional(),
  doctorEmail: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  // Referral Information
  patientName: z
    .string()
    .min(2, { message: "Please enter the patient's name." }),
  patientPhone: z
    .string()
    .min(10, { message: "Please enter a valid phone number." }),
  patientEmail: z.string().email().optional().or(z.literal("")),
  radiographsSent: z.enum(["yes", "no"]),
  radiographsDate: z.string().optional(),
  comments: z.string().optional(),
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

const ReferPatient = () => {
  const [successModal, setSuccessModal] = useState<ModalProps>(modalDefaults);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      doctorName: "",
      practiceName: "",
      doctorEmail: "",
      patientName: "",
      patientPhone: "",
      patientEmail: "",
      radiographsSent: "no",
      radiographsDate: "",
      comments: "",
    },
  });

  const radiographsSent = form.watch("radiographsSent");

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
          type: "refer-patient",
          ...payload,
        }),
      });

      if (response.ok) {
        setSuccessModal({
          show: true,
          title: "Referral Submitted!",
          info: "Thank you for referring a patient to our practice. We will reach out to them shortly.",
          primaryBtnLabel: "Okay",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit referral. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit referral. Please try again later.",
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
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold mb-4">
              Professional Referrals
            </span>
            <h1 className="text-4xl underline decoration-sky-500 md:text-5xl font-bold text-gray-800 mb-6">
              Refer a Patient
            </h1>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 card-treatment card-sky"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A successful practice doesn't just happen; it is the result of a
              strong commitment to excellence in the professional community and
              in the relationships we build with our patients and colleagues. We
              appreciate the confidence you've placed in us to provide you with
              the complete care you need, and we thank you for recommending our
              practice to your friends and family.
            </p>
            <p className="text-gray-600">
              If you are here to refer a patient to our practice, please provide
              us with the information below. Once you've completed the form,
              click on the <strong>SUBMIT</strong> button at the bottom of the
              page.
            </p>
          </motion.div>

          {/* Form Section */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Practice Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 card-treatment card-sky"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <Building2 className="size-6 text-sky-700" aria-hidden="true" />
                  Practice Information
                </h2>
                <p className="text-gray-600 mb-6">
                  <span className="text-red-500">*</span> Bold fields are
                  required.
                </p>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="doctorName"
                    render={({ field }) => (
                      <FormInput
                        field={field}
                        className="border border-gray-300 bg-transparent shadow-none py-5"
                        type="text"
                        label={
                          <span>
                            <strong>
                              Doctor Name{" "}
                              <span className="text-red-500">*</span>
                            </strong>
                          </span>
                        }
                        placeholder="First and Last"
                      />
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="practiceName"
                    render={({ field }) => (
                      <FormInput
                        field={field}
                        className="border border-gray-300 bg-transparent shadow-none py-5"
                        type="text"
                        label="Practice Name"
                        placeholder="Your practice name"
                      />
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="doctorEmail"
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
                </div>
              </motion.div>

              {/* Referral Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 card-treatment card-sky"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <UserRound className="size-6 text-sky-700" aria-hidden="true" />
                  Referral Information
                </h2>

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormInput
                        field={field}
                        className="border border-gray-300 bg-transparent shadow-none py-5"
                        type="text"
                        label={
                          <span>
                            <strong>
                              Name of the Patient You are Referring{" "}
                              <span className="text-red-500">*</span>
                            </strong>
                          </span>
                        }
                        placeholder="First and Last"
                      />
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="patientPhone"
                    render={({ field }) => (
                      <FormInput
                        field={field}
                        className="border border-gray-300 bg-transparent shadow-none py-5"
                        type="tel"
                        label={
                          <span>
                            <strong>
                              Patient's Phone Number{" "}
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
                    name="patientEmail"
                    render={({ field }) => (
                      <FormInput
                        field={field}
                        className="border border-gray-300 bg-transparent shadow-none py-5"
                        type="email"
                        label="Patient's Email Address"
                        placeholder="patient@example.com"
                      />
                    )}
                  />

                  {/* Radiographs Sent */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold text-gray-900">
                      Radiographs Sent?
                    </Label>
                    <FormField
                      control={form.control}
                      name="radiographsSent"
                      render={({ field }) => (
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className="cursor-pointer">
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className="cursor-pointer">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                  </div>

                  {radiographsSent === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FormField
                        control={form.control}
                        name="radiographsDate"
                        render={({ field }) => (
                          <FormInput
                            field={field}
                            className="border border-gray-300 bg-transparent shadow-none py-5"
                            type="date"
                            label="When Were They Sent?"
                          />
                        )}
                      />
                    </motion.div>
                  )}

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormTextArea
                        field={field}
                        className="border border-gray-300 bg-transparent shadow-none py-3"
                        label="Comments"
                        placeholder="Any additional information about the referral..."
                        rows={5}
                      />
                    )}
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <SubmitBtn
                  className="w-full rounded-lg bg-sky-700 px-12 py-4 text-lg font-semibold text-white transition-colors hover:bg-sky-800 sm:w-auto"
                  isSubmitting={isSubmitting}
                  disabled={isSubmitting}
                >
                  Submit Referral
                </SubmitBtn>
              </motion.div>
            </form>
          </Form>

          {/* Thank You Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 rounded-xl border border-sky-100 bg-sky-50 p-8 text-gray-900 card-treatment card-sky"
          >
            <h3 className="text-xl font-bold mb-2">
              Thank You for Your Referral
            </h3>
            <p className="text-gray-600">
              We truly appreciate your trust in our practice and look forward to
              providing excellent care to your patient.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ReferPatient;
