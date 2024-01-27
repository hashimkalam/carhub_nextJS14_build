import React, { useState } from "react";
import Select, { ActionMeta, InputActionMeta, ValueType } from "react-select";
import { SearchManufacturerProps } from "@/types";
import Image from "next/image";
import { manufacturers } from "@/constants";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newValue: string, actionMeta: InputActionMeta) => {
    setInputValue(newValue);
  };

  const handleSelectChange = (
    selectedOption: ValueType<{ value: string; label: string }, false>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    const newValue = selectedOption ? selectedOption.value : null;
    setManufacturer(newValue !== null ? newValue : "");
  };
  const filteredOptions = manufacturers
    .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
    .map((item) => ({
      value: item,
      label: item,
    }));

  return (
    <div className="search-manufacturer">
      <div className="relative w-full">
        <Image
          src="/car-logo.svg"
          width={20}
          height={20}
          className="absolute top-[14px] ml-4"
          alt="Car Logo"
        />

        <Select
          className="search-manufacturer_input"
          placeholder="Volkswagen"
          value={filteredOptions.find(
            (option) => option.value === manufacturer
          )}
          options={filteredOptions}
          onInputChange={handleInputChange}
          onChange={handleSelectChange}
          isClearable
          onMenuOpen={() => setInputValue("")}
        />
      </div>

      {/* <Combobox value={manufacturer} onChange(setManufacturer)>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer_input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item: any) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      {" "}
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-600"
                          }`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox> */}
    </div>
  );
}

export default SearchManufacturer;
