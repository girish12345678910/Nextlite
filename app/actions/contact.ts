'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  budget: z.string().min(1, 'Please select a budget range'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must consent to data processing',
  }),
});

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      budget: formData.get('budget'),
      service: formData.get('service'),
      message: formData.get('message'),
      consent: formData.get('consent') === 'on',
    };

    const validatedData = contactSchema.parse(data);

    // In development, just log and return success
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission (dev mode):', validatedData);
      return {
        success: true,
        message: 'Thanks for reaching out! We will respond within 24 hours.',
      };
    }

    // In production, send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact: ${validatedData.name} from ${validatedData.company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Service:</strong> ${validatedData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
        <hr/>
        <p><small>Consent provided under DPDP Act 2023</small></p>
      `,
    });

    return {
      success: true,
      message: 'Thanks for reaching out! We will respond within 24 hours.',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      };
    }

    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please email us directly.',
    };
  }
}
