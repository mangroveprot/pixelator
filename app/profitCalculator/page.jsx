"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const eneIcon = "./assets/images/hud_icon_energy.png";

  const [formValues, setFormValues] = useState({
    energy: "",
    quantity: "",
    mpValue: "",
    CEP: "",
    EGCP: "",
  });

  const [results, setResults] = useState({
    totalEnergyCost: 0,
    consumableEnergyCost: 0,
    totalIncome: 0,
    potentialProfit: 0,
    totalProfit: 0,
    totalIncomeEach: 0,
    numberOfConsumes: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const { energy, quantity, mpValue, CEP, EGCP } = formValues;

    // Parse values
    const energyValue = parseFloat(energy) || 0;
    const quantityValue = parseInt(quantity, 10) || 0;
    const mpValueNumber = parseFloat(mpValue) || 0;
    const cepValue = parseFloat(CEP) || 0;
    const egcpValue = parseFloat(EGCP) || 0;

    // Calculate Energy Cost
    const energyCost = energyValue * quantityValue;

    // Calculate the number of consumes needed
    const numberOfConsumesRequired = Math.ceil(energyCost / egcpValue);

    // Calculate the Consumable Energy Cost
    const consumableEnergyCost = numberOfConsumesRequired * cepValue;

    // Calculate Total Income
    const totalIncome = mpValueNumber * quantityValue;

    // Calculate Potential Profit
    const potentialProfit = totalIncome - consumableEnergyCost;

    // Calculate Total Profit
    const totalProfit = totalIncome - consumableEnergyCost;

    // Calculate Total Income for Each Item
    const totalIncomeEach = quantityValue ? totalIncome / quantityValue : 0;

    // Update the results state
    setResults({
      totalEnergyCost: energyCost,
      consumableEnergyCost: consumableEnergyCost,
      totalIncome: totalIncome,
      potentialProfit: potentialProfit,
      totalProfit: totalProfit,
      totalIncomeEach: totalIncomeEach,
      numberOfConsumes: numberOfConsumesRequired,
    });
  }, [formValues]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-customBg">
      <div
        className="w-full max-w-md bg-customBlack p-3 rounded-lg shadow-md "
        style={{ marginTop: "-1rem" }}
      >
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="energy"
              className="block text-sm font-medium text-gray-700"
            >
              Energy
            </label>
            <input
              id="energy"
              name="energy"
              type="text"
              value={formValues.energy}
              onChange={handleChange}
              pattern="\d*\.?\d*"
              inputMode="decimal"
              className="input input-bordered w-full mt-1"
              placeholder="Energy"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={formValues.quantity}
              onChange={handleChange}
              pattern="\d*\.?\d*"
              inputMode="decimal"
              className="input input-bordered w-full mt-1"
              placeholder="Quantity"
            />
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
          <div className="flex-1">
            <label
              htmlFor="mpValue"
              className="block text-sm font-medium text-gray-700"
            >
              MP Flour Price
            </label>
            <input
              id="mpValue"
              name="mpValue"
              type="text"
              value={formValues.mpValue}
              onChange={handleChange}
              pattern="\d*\.?\d*"
              inputMode="decimal"
              className="input input-bordered w-full mt-1"
              placeholder="MP Flour Price"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="CEP"
              className="block text-sm font-medium text-gray-700"
            >
              Energy Price
            </label>
            <input
              id="CEP"
              name="CEP"
              type="text"
              value={formValues.CEP}
              onChange={handleChange}
              pattern="\d*\.?\d*"
              inputMode="decimal"
              className="input input-bordered w-full mt-1 smaller-placeholder"
              placeholder="Consumable Energy Price"
            />
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
          <div className="flex-1">
            <label
              htmlFor="EGCP"
              className="block text-sm font-medium text-gray-700"
            >
              Energy gain / consume
            </label>
            <input
              id="EGCP"
              name="EGCP"
              type="text"
              value={formValues.EGCP}
              onChange={handleChange}
              pattern="\d*\.?\d*"
              inputMode="decimal"
              className="input input-bordered w-full mt-1"
              placeholder="EG/consume"
            />
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-medium text-gray-100 mb-2">Total</h2>
          <div className="flex items-center text-xl font-semibold text-gray-500">
            <span className="mr-1 " style={{ fontSize: "14px" }}>
              Total Energy Cost:{" "}
              {formatNumber(results.totalEnergyCost.toFixed(2))}
            </span>
            <img src={eneIcon} alt="energyIcon" className="w-3 h-3" />
          </div>
          <div className="flex items-center text-xl font-semibold text-gray-500">
            <span className="mr-1 " style={{ fontSize: "14px" }}>
              Number of Consumes:{" "}
              {formatNumber(results.numberOfConsumes.toFixed(0))}
            </span>
            <img src={eneIcon} alt="energyIcon" className="w-3 h-3" />
          </div>
          <div className="flex items-center text-xl font-semibold text-gray-500">
            <span className="mr-1 " style={{ fontSize: "14px" }}>
              Consumable Energy Total Cost:{" "}
              {formatNumber(results.consumableEnergyCost.toFixed(2))}
            </span>
            <img
              src="./assets/images/currency-coin.png"
              alt=""
              className="w-3 h-3"
            />
          </div>
          <div className="flex items-center text-xl font-semibold text-gray-500">
            <span className="mr-1 " style={{ fontSize: "14px" }}>
              Total Income per Item:{" "}
              {formatNumber(results.totalIncomeEach.toFixed(2))}
            </span>
            <img
              src="./assets/images/currency-coin.png"
              alt=""
              className="w-3 h-3"
            />
          </div>
          <div className="flex items-center text-xl font-semibold text-gray-500">
            <span className="mr-1 " style={{ fontSize: "14px" }}>
              Total Income: {formatNumber(results.totalIncome.toFixed(2))}
            </span>
            <img
              src="./assets/images/currency-coin.png"
              alt=""
              className="w-3 h-3"
            />
          </div>
          <div className="flex items-center text-xl font-semibold text-gray-500">
            <span className="mr-1 " style={{ fontSize: "14px" }}>
              Total Profit: {formatNumber(results.totalProfit.toFixed(2))}
            </span>
            <img
              src="./assets/images/currency-coin.png"
              alt=""
              className="w-3 h-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
