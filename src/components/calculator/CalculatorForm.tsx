import React from "react";
import { DocumentType, SpecialTrustType } from "../../types/calculator";
import { CalculatorFormProps } from "./types";

function isComplexTrust(state: CalculatorState): boolean {
  const properties = Number(state.numberOfProperties) || 0;
  const investments = Number(state.numberOfInvestmentAccounts) || 0;
  const insurance = Number(state.numberOfInsurancePolicies) || 0;
  const totalAssets = properties + investments + insurance;

  return (
    properties >= 3 ||
    investments >= 4 ||
    insurance >= 3 ||
    state.hasBusinessInterests ||
    totalAssets >= 5
  );
}

function isComplexWill(state: CalculatorState): boolean {
  const properties = Number(state.numberOfProperties) || 0;
  const investments = Number(state.numberOfInvestmentAccounts) || 0;
  const children = Number(state.minorChildren) || 0;

  return (
    properties >= 2 ||
    investments >= 3 ||
    children >= 3 ||
    state.hasBusinessInterests ||
    state.isBlendedFamily ||
    state.hasDisinheritance ||
    state.hasCharitableGiving ||
    state.hasForeignAssets
  );
}

export function CalculatorForm({ state, updateField }: CalculatorFormProps) {
  const showTrustSpecificFields = state.documentType.includes("Living Trust");
  const isSpecialTrust = state.documentType === "Special Designation Trust";

  const handleNumberInput = (field: keyof CalculatorState, value: string) => {
    // Convert empty string to 0
    if (value === "") {
      updateField(field, 0);
      return;
    }

    // Only allow positive numbers
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0) {
      updateField(field, num);
    }
  };

  const showComplexityWarning =
    (state.documentType.includes("Living Trust") && isComplexTrust(state)) ||
    (state.documentType.includes("Will") && isComplexWill(state));

  return (
    <div className="space-y-6">
      {/* State Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <select
          value={state.state}
          onChange={(e) => updateField("state", e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        >
          <option value="VA">Virginia</option>
          <option value="DC">Washington DC</option>
        </select>
      </div>

      {/* Document Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Document Type
        </label>
        <select
          value={state.documentType}
          onChange={(e) =>
            updateField("documentType", e.target.value as DocumentType)
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
        >
          <option value="Simple Will">Simple Will</option>
          <option value="Complex Will">Complex Will</option>
          <option value="Simple Living Trust">Simple Living Trust</option>
          <option value="Complex Living Trust">Complex Living Trust</option>
          <option value="Special Designation Trust">
            Special Designation Trust
          </option>
        </select>
      </div>

      {/* Special Trust Type Selection */}
      {isSpecialTrust && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type of Special Trust
          </label>
          <select
            value={state.specialTrustType}
            onChange={(e) =>
              updateField(
                "specialTrustType",
                e.target.value as SpecialTrustType
              )
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
          >
            <option value="Special Needs Trust">Special Needs Trust</option>
            <option value="Irrevocable Life Insurance Trust">
              Irrevocable Life Insurance Trust (ILIT)
            </option>
            <option value="Generation Skipping Trust">
              Generation Skipping Trust
            </option>
            <option value="Testamentary Trust">Testamentary Trust</option>
            <option value="Qualified Personal Residence Trust">
              Qualified Personal Residence Trust (QPRT)
            </option>
            <option value="Grantor Retained Annuity Trust">
              Grantor Retained Annuity Trust (GRAT)
            </option>
            <option value="Pet Trust">Pet Trust</option>
            <option value="Other Irrevocable Trust">
              Other Irrevocable Trust
            </option>
          </select>
        </div>
      )}

      {!isSpecialTrust && (
        <>
          {/* Spouse Inclusion */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={state.spouseIncluded}
              onChange={(e) => updateField("spouseIncluded", e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              Include Spouse
            </label>
          </div>

          {/* Minor Children */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Minor Children
            </label>
            <input
              type="number"
              min="0"
              value={state.minorChildren}
              onChange={(e) =>
                updateField("minorChildren", parseInt(e.target.value))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
            />
          </div>

          {/* Trust-Specific Fields */}
          {showTrustSpecificFields && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Properties
                </label>
                <input
                  type="number"
                  min="0"
                  value={state.numberOfProperties || ""}
                  onChange={(e) =>
                    handleNumberInput("numberOfProperties", e.target.value)
                  }
                  onBlur={() => {
                    if (
                      state.numberOfProperties === null ||
                      state.numberOfProperties === undefined
                    ) {
                      updateField("numberOfProperties", 0);
                    }
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={state.hasBusinessInterests}
                  onChange={(e) =>
                    updateField("hasBusinessInterests", e.target.checked)
                  }
                  className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Business Interests
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Investment Accounts
                </label>
                <input
                  type="number"
                  min="0"
                  value={state.numberOfInvestmentAccounts || ""}
                  onChange={(e) =>
                    handleNumberInput(
                      "numberOfInvestmentAccounts",
                      e.target.value
                    )
                  }
                  onBlur={() => {
                    if (
                      state.numberOfInvestmentAccounts === null ||
                      state.numberOfInvestmentAccounts === undefined
                    ) {
                      updateField("numberOfInvestmentAccounts", 0);
                    }
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Life Insurance Policies
                </label>
                <input
                  type="number"
                  min="0"
                  value={state.numberOfInsurancePolicies}
                  onChange={(e) =>
                    updateField(
                      "numberOfInsurancePolicies",
                      parseInt(e.target.value)
                    )
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
            </>
          )}

          {/* Additional Will-specific fields */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={state.isBlendedFamily}
                onChange={(e) =>
                  updateField("isBlendedFamily", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Blended Family (Second Marriage or Stepchildren)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={state.hasDisinheritance}
                onChange={(e) =>
                  updateField("hasDisinheritance", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Disinheritance Provisions
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={state.hasCharitableGiving}
                onChange={(e) =>
                  updateField("hasCharitableGiving", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Charitable Giving Provisions
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={state.hasForeignAssets}
                onChange={(e) =>
                  updateField("hasForeignAssets", e.target.checked)
                }
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Foreign Assets
              </label>
            </div>
          </div>
        </>
      )}

      {showComplexityWarning && (
        <div className="p-4 bg-gold-50 rounded-md">
          <p className="text-sm text-gold-800">
            Based on your selections, this qualifies as a{" "}
            {state.documentType.includes("Will")
              ? "Complex Will"
              : "Complex Living Trust"}{" "}
            due to:
            {state.documentType.includes("Will") ? (
              <>
                {(Number(state.numberOfProperties) || 0) >= 2 && (
                  <span className="block">• 2 or more properties</span>
                )}
                {(Number(state.numberOfInvestmentAccounts) || 0) >= 3 && (
                  <span className="block">• 3 or more investment accounts</span>
                )}
                {(Number(state.minorChildren) || 0) >= 3 && (
                  <span className="block">• 3 or more minor children</span>
                )}
                {state.hasBusinessInterests && (
                  <span className="block">• Business interests</span>
                )}
                {state.isBlendedFamily && (
                  <span className="block">• Blended family situation</span>
                )}
                {state.hasDisinheritance && (
                  <span className="block">• Disinheritance provisions</span>
                )}
                {state.hasCharitableGiving && (
                  <span className="block">• Charitable giving provisions</span>
                )}
                {state.hasForeignAssets && (
                  <span className="block">• Foreign assets</span>
                )}
              </>
            ) : (
              <>
                {(Number(state.numberOfProperties) || 0) >= 3 && (
                  <span className="block">• 3 or more properties</span>
                )}
                {(Number(state.numberOfInvestmentAccounts) || 0) >= 4 && (
                  <span className="block">• 4 or more investment accounts</span>
                )}
                {(Number(state.numberOfInsurancePolicies) || 0) >= 3 && (
                  <span className="block">• 3 or more insurance policies</span>
                )}
                {state.hasBusinessInterests && (
                  <span className="block">• Business interests</span>
                )}
                {(Number(state.numberOfProperties) || 0) +
                  (Number(state.numberOfInvestmentAccounts) || 0) +
                  (Number(state.numberOfInsurancePolicies) || 0) >=
                  5 && <span className="block">• 5 or more total assets</span>}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
