"use client";

import type React from "react";

import { useState } from "react";
import styles from "./contact-form.module.css";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber1: "",
    service: "", // Changed from "Immigration" to empty string
    phoneNumber2: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type='tel'
            name='phoneNumber1'
            placeholder='Phone Number'
            value={formData.phoneNumber1}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.customSelect}>
            <div
              className={styles.selectTrigger}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className={!formData.service ? styles.placeholder : ""}>
                {formData.service || "What services you looking for?"}
              </span>
              <span
                className={`${styles.arrow} ${
                  isDropdownOpen ? styles.open : ""
                }`}
              >
                {isDropdownOpen ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
              </span>
            </div>
            {isDropdownOpen && (
              <div className={styles.options}>
                {[
                  "Immigration",
                  "Consulting",
                  "Design",
                  "Privilege",
                  "Others",
                ].map((option) => (
                  <div
                    key={option}
                    className={`${styles.option} ${
                      formData.service === option ? styles.selected : ""
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, service: option });
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.inputGroup}>
          <input
            type='tel'
            name='phoneNumber2'
            placeholder='Phone Number'
            value={formData.phoneNumber2}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name='message'
            placeholder='Please tell us more about your business so that professional consultant can be arranged to communicate with you'
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </div>

        <div className={styles.buttonContainer}>
          <button type='submit' className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
