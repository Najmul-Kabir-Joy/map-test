import React from "react";

const ViewChanger = ({
  currentView,
  handleChange,
}: {
  currentView: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const viewItems = [
    {
      name: "Streets",
      value: "streets-v11",
    },
    {
      name: "Satellite",
      value: "satellite-v9",
    },
    {
      name: "Outdoors",
      value: "outdoors-v11",
    },
    {
      name: "Light",
      value: "light-v10",
    },
    {
      name: "Dark",
      value: "dark-v10",
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
            checked={currentView === value}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor={value}>{name}</label>
        </div>
      ))}
    </div>
  );
};

export default ViewChanger;
