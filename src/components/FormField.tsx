type FormFieldProps = {
  as?: "input" | "textarea";
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

const FormField = ({
  as = "input",
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  className = "mb-3",
}: FormFieldProps) => (
  <div className={`w-full bg-indigo-50 rounded-xl hover:shadow-xl transition-all ${className}`}>
    {as === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-4 rounded-xl bg-indigo-100 text-gray-700 outline-none h-40 resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-4 rounded-xl bg-indigo-100 text-gray-700 outline-none"
      />
    )}
  </div>
);

export default FormField;
