// Copyright (c) 2025 Isaaq Simon rights reserved
//
// Created by: Isaaq Simon
// Created on: May 2025
// This file contains the JS functions for index.html
// ===============================
// Function to calculate the total cost
// ===============================
function calculateTotal() {
    const size = document.getElementById("size").value;
    const type = document.getElementById("type").value;
    const summary = document.getElementById("summary");
    const subtotalDisplay = document.getElementById("subtotal");
    const taxDisplay = document.getElementById("tax");
    const totalDisplay = document.getElementById("total");
  
    // Constants
    const HST = 0.13;
  
    // Prices for sizes
    const sizePrices = {
      "6": 8.99,
      "7": 11.79,
      "8": 9.49
    };
  
    // Prices for cheesecake types
    const typePrices = {
      "Souffle": 0.00,
      "Rare": 0.29,
      "Baked": 0.79,
      "Matcha": 1.99,
      "Basque": 1.99
    };
  
    // ===============================
    // Validate input
    // ===============================
    if (!size) {
      summary.textContent = "Please select a size and type of Japanese Cheesecake you want";
      subtotalDisplay.textContent = "";
      taxDisplay.textContent = "";
      totalDisplay.textContent = "";
      return;
    }
  
    // Parse prices from dictionaries
    const sizeCost = sizePrices[size];
    const toppingCost = typePrices[type];
  
    // Calculate subtotal, tax, and total
    const subtotal = sizeCost + toppingCost;
    const tax = subtotal * HST;
    const total = subtotal + tax;
  
    // ===============================
    // Display Results
    // ===============================
    if (toppingCost === 0.00) {
      summary.textContent = `You ordered an ${size}-inch round cake pan with ${size === "7" ? "4" : "3"}-inch sides for your cheesecake. The default type is ${type}. Would you like to change it? If not, please enter your credit/debit card below and hit submit.`;
    } else {
      summary.textContent = `You ordered an ${size}-inch round cake pan with ${size === "7" ? "4" : "3"}-inch sides for your ${type} cheesecake. Your total is $${total.toFixed(2)}. Please enter your credit/debit card below and hit submit.`;
    }
  
    // Set calculated values with rounding to 2 decimal places
    subtotalDisplay.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    taxDisplay.textContent = `Tax (HST): $${tax.toFixed(2)}`;
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
  }
  