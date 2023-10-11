"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import myLogo from "./LogoWithoutBg.svg";

export default function Home() {
  const [isPxToRem, setIsPxToRem] = useState(true);
  const [inputValue, setInputValue] = useState(null);
  const [outputValue, setOutputValue] = useState(null);

  const switchValues = () => {
    setIsPxToRem(!isPxToRem);
    setInputValue(null);
    setOutputValue(null);
  };

  const handleInputChange = (e) => {
    const theValue = parseFloat(e.target.value);
    if (isPxToRem) {
      setOutputValue(theValue * 16);
    } else {
      setOutputValue(theValue / 16);
    }
    setInputValue(theValue);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            style={{ fontSize: "2rem" }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src={myLogo}
              alt="Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
      <div
        className={styles.center}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "12rem",
          width: "90%",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            textTransform: "capitalize",
            fontWeight: "700",
          }}
        >
          {isPxToRem ? "Px to Rem converter" : "Rem to Px converter"}
        </div>
        <button
          style={{
            height: "3rem",
            width: "12rem",
            borderRadius: "10px",
            border: "none",
            boxShadow: "1px 1px 9px 4px rgba(1, 65, 255, 0.4)",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            background: "transparent",
            border: "1px solid rgba(1, 65, 255, 0.4)",
            zIndex: "999",
          }}
          className={styles.btn}
          onClick={switchValues}
        >
          Switch
        </button>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {isPxToRem ? "Rem" : "Px"}
        </div>
        <input
          style={{
            zIndex: "999",
            height: "3rem",
            width: "50%",
            padding: "1rem",
          }}
          type="number"
          placeholder={isPxToRem ? "Px" : "Rem"}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {isPxToRem ? "px" : "rem"}
        </div>
        <input
          style={{
            zIndex: "999",
            height: "3rem",
            width: "50%",
            padding: "1rem",
          }}
          type="number"
          value={outputValue}
          placeholder={isPxToRem ? "Rem" : "Px"}
        />
      </div>
      <div className={styles.grid}>
        <a
          href="https://askander.vercel.app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Portfolio -&gt;</h2>
        </a>

        <a
          href="http://github/hamdymohamedak"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>GitHub -&gt;</h2>
        </a>

        <a
          href="http://askander.vercel.app/components/work"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Projects -&gt;</h2>
        </a>

        <a
          href="https://www.facebook.com/hamdy.elgokar.5?mibextid=ZbWKwL"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Contact -&gt;</h2>
        </a>
      </div>
    </main>
  );
}
