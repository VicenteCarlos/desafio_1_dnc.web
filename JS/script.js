const form = document.getElementById("main-form");

const dataForm = [
  {
    name: "Email",
    placeholder: "Email",
    type: "email",
    required: true,
  },
  {
    name: "Name",
    placeholder: "Nome",
  },
  {
    name: "Created",
    value: "x-sheetmonkey-current-date-time",
    type: "hidden",
  },
];

dataForm.forEach((item) => {
  const input = document.createElement("input");
  input.placeholder = item.placeholder;
  input.name = item.name;
  input.type =
    item.type === "email"
      ? "email"
      : item.type === "hidden"
      ? "hidden"
      : "text";

  if (item.required) {
    input.required = item.required;
  }

  if (item.value) {
    input.value = item.value;
  }

  form.append(input);
});
