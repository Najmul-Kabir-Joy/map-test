import React from "react";

const ViewChanger = ({
  handleChange,
}: {
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const viewItems = [
    {
      name: "Streets",
      value: "streets-v11",
      selected: true,
    },
    {
      name: "Satellite",
      value: "satellite-v9",
      selected: false,
    },
    {
      name: "Outdoors",
      value: "outdoors-v11",
      selected: false,
    },
    {
      name: "Light",
      value: "light-v10",
      selected: false,
    },
    {
      name: "Dark",
      value: "dark-v10",
      selected: false,
    },
  ];
  return (
    <div id="view-changer" className="flex gap-4">
      {viewItems.map(({ name, value }, index) => (
        <div
          id="group"
          className="flex justify-center items-center gap-1"
          key={index}
        >
          <input
            id={value}
            type="radio"
            name="rtoggle"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor={value}>{name}</label>
        </div>
      ))}
    </div>
  );
};

export default ViewChanger;
